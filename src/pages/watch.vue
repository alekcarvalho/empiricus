<template>
  <div
    id="watch"
    class="content"
  >
    <div class="container">
      <section>
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a-icon type="home" />
            <span>Página Inicial</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            Vídeos
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            {{ video.snippet.title }}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </section>

      <section>
        <h1 class="title">
          Vídeos
        </h1>
      </section>

      <section>
        <a-row :gutter="48">
          <a-col
            :lg="{ span: 19}"
            class="main-video"
          >
            <a-card
              v-if="!loading"
              :bordered="false"
            >
              <iframe
                width="100%"
                height="500"
                :src="`//www.youtube.com/embed/${this.$route.params.id}`"
                frameborder="0"
                allowfullscreen
              />
              <a-card-meta :title="video.snippet.title">
                <template slot="description">
                  {{ extendNumbertoViews(video.statistics.viewCount) }} views
                </template>
                <template slot="description">
                  <div class="description">
                    {{ video.snippet.description }}
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :lg="{ span: 5}">
            <h2 class="title">
              Vídeos relacionados
            </h2>
            <div
              v-for="(item,index) in list.slice(0, itemsToShow)"
              :key="index"
              class="sidebar"
            >
              <router-link
                :to="item.snippet.resourceId.videoId"
                :aria-label="item.snippet.title"
                :title="item.snippet.title"
              >
                <a-card :bordered="false">
                  <img
                    slot="cover"
                    alt="example"
                    :src="item.snippet.thumbnails.standard.url"
                  >
                  <a-card-meta :title="item.snippet.title">
                    <template slot="description">
                      {{ item.snippet.channelTitle }}
                    </template>
                    <!-- <template slot="description">
                    {{ item.view.map(subitem => subitem.statistics.viewCount) }}
                  </template> -->
                  </a-card-meta>
                </a-card>
              </router-link>
            </div>
          </a-col>
        </a-row>
      </section>
      <template>
        <a-skeleton
          :loading="loading"
          active
        />
      </template>
    </div>
  </div>
</template>

<script>
import { API, KEY, PLAYLISTID } from '@/api/api'
import { numberToViews } from '@/assets/js/convertViews'

export default {
  name: 'Watch',

  data() {
    return {
      loading: true,
      video: {
        snippet: {
          title: ''
        },
        statistics: {
          viewCount: ''
        }
      },
      list: [],
      itemsToShow: 5
    }
  },

  watch: {
    $route(to, from) {
      this.shuffle(this.list)
    }
  },

  created() {
    this.getDataVideo()
    this.getDataList()
  },

  methods: {
    async getDataVideo() {
      try {
        await API.get(
          `videos?part=snippet,statistics&id=${
            this.$route.params.id
          }&key=${KEY}`
        ).then(response => {
          this.video = response.data.items[0]
          this.loading = false
        })
      } catch (error) {
        console.log(error.response)
      }
    },
    async getDataList() {
      try {
        await API.get(
          `playlistItems?part=snippet,id&playlistId=${PLAYLISTID}&maxResults=50&key=${KEY}`
        ).then(response => {
          this.list = response.data.items
          this.shuffle(this.list)
        })
      } catch (error) {
        console.log(error.response)
      }
    },
    shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    },
    extendNumbertoViews(number) {
      return numberToViews(number)
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  white-space: pre-line;
  color: $secondary;
}

h2 {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .main-video {
    margin-bottom: 5rem;
  }
}
</style>
