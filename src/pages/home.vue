<template>
  <div
    id="home"
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
        </a-breadcrumb>
      </section>

      <section>
        <h1 class="title">
          Vídeos
        </h1>
      </section>

      <section>
        <a-row
          :gutter="32"
          class="row-flex"
        >
          <a-col
            v-for="(item,index) in list"
            :key="index"
            :xs="{ span: 24}"
            :sm="{ span: 12}"
            :lg="{ span: 8}"
            class="main-col"
          >
            <router-link
              :to="`watch/${item.snippet.resourceId.videoId}`"
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
                    <span>{{ item.snippet.channelTitle }}</span>
                  </template>
                  <template slot="description">
                    <span> {{ extendNumbertoViews(views[index]) }} views</span>
                  </template>
                </a-card-meta>
              </a-card>
            </router-link>
          </a-col>
        </a-row>
      </section>
      <section class="load-more">
        <a-button
          v-if="!loading"
          type="primary"
          size="large"
          :loading="buttonLoading"
          @click="getData()"
        >
          Carregar Mais
        </a-button>
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
  name: 'Home',

  data() {
    return {
      list: [],
      views: [],
      loading: true,
      buttonLoading: true,
      itemsToShow: 6,
      pageToken: ''
    }
  },

  created() {
    this.getData()
  },

  methods: {
    async getData() {
      this.buttonLoading = true
      try {
        await API.get(
          `playlistItems?part=snippet,id&playlistId=${PLAYLISTID}&key=${KEY}&maxResults=6&pageToken=${
            this.pageToken
          }`
        ).then(response => {
          const ress = response.data.items.map(item => {
            return {
              listItem: this.list.push(item),
              id: this.getViews(item.snippet.resourceId.videoId)
            }
          })
          Promise.all(ress.map(item => item.id)).then(response =>
            response.map(item =>
              item.data.items.map(subitem =>
                this.views.push(subitem.statistics.viewCount)
              )
            )
          )

          console.log(this.views)

          this.pageToken = response.data.nextPageToken
          this.loading = false
          this.buttonLoading = false
        })
      } catch (error) {
        console.log(error.response)
      }
    },
    async getViews(id) {
      try {
        return await API.get(`videos?part=statistics&id=${id}&key=${KEY}`)
      } catch (error) {
        console.log(error.response)
      }
    },
    extendNumbertoViews(number) {
      return numberToViews(number)
    }
  }
}
</script>

<style lang="scss" scoped>
.load-more {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1201px) {
  .main-col {
    height: 26rem;
  }
}
@media (min-width: 580px) and (max-width: 768px) {
  .main-col {
    height: 20rem;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .main-col {
    height: 23rem;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .main-col {
    height: 22rem;
  }
}
</style>
