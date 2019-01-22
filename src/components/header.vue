<template>
  <header>
    <div class="header-main">
      <router-link to="/">
        <Logo />
      </router-link>
      <a-menu
        class="header-main-menu"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          v-for="(item, index) in mainMenu"
          :key="index"
        >
          <router-link :to="item.link">
            {{ item.text }}
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <a-menu
      class="header-sec-menu"
      theme="light"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item>
        <a-button
          shape="circle"
          icon="search"
          class="search"
        />
      </a-menu-item>
      <a-menu-item
        v-for="(item, index) in secMenu"
        :key="index"
      >
        {{ item.text }}
      </a-menu-item>
    </a-menu>
    <div
      ref="mobileMenu"
      class="mobile-menu"
    >
      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxyZWN0IHk9IjMiIHdpZHRoPSI1MCIgaGVpZ2h0PSIyIiBmaWxsPSIjMDAwMDAwIi8+Cgk8cmVjdCB5PSIxNyIgd2lkdGg9IjUwIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAwMDAiLz4KCTxyZWN0IHk9IjMxIiB3aWR0aD0iNTAiIGhlaWdodD0iMiIgZmlsbD0iIzAwMDAwMCIvPgoJPHJlY3QgeT0iNDUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIyIiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==">
    </div>
    <div
      ref="mobileMenuItems"
      class="mobile-menu-items"
    >
      <a-menu
        theme="light"
        mode="vertical"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item>
          <a-button
            shape="circle"
            icon="search"
            class="search"
          />
        </a-menu-item>
        <a-menu-item
          v-for="(item, index) in mainMenu"
          :key="index"
        >
          {{ item.text }}
        </a-menu-item>
      </a-menu>
      <a-divider />
      <a-menu
        theme="light"
        mode="vertical"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          v-for="(item, index) in secMenu"
          :key="index"
        >
          {{ item.text }}
        </a-menu-item>
      </a-menu>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/logo'
export default {
  name: 'Header',

  components: {
    Logo
  },

  data() {
    return {
      mainMenu: [
        {
          text: 'Quem Somos',
          link: '/'
        },
        {
          text: 'Conteúdo',
          link: '/'
        },
        {
          text: 'Assinaturas',
          link: '/'
        },
        {
          text: 'Atendimento',
          link: '/'
        }
      ],
      secMenu: [
        {
          text: 'Inscrever-se'
        },
        {
          text: 'Entrar'
        }
      ]
    }
  },

  mounted() {
    this.$refs.mobileMenu.addEventListener('click', () => {
      this.$refs.mobileMenuItems.classList.toggle('display-flex')
      document.body.classList.toggle('overflow-none')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  background: $background;
  width: 100%;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  //box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
  border-bottom: $border;
  .ant-menu {
    border: none;
    .ant-menu-item {
      text-transform: uppercase;
      font-weight: bold;
      border-bottom: none;
      &:hover,
      &:focus {
        border-bottom: none;
      }
    }
  }
  .header-main {
    display: flex;
    align-items: center;
    .ant-menu {
      margin-left: 5rem;
    }
  }
  .mobile-menu {
    cursor: pointer;
    img {
      height: 1.4rem;
    }
  }
  .mobile-menu-items {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background: $background;
    align-items: center;
    //justify-content: center;
    padding-top: 2rem;
    flex-direction: column;
    top: 81px;
    left: 0;
    z-index: 9999;
    overflow-y: auto;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
  .mobile-menu-items {
    display: none !important;
  }
}
@media (max-width: 1025px) {
  .header-main-menu {
    display: none;
  }
  .header-sec-menu {
    display: none;
  }
  .header-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 1100px) {
  .header-main {
    .ant-menu {
      margin-left: 1rem !important;
    }
  }
}
</style>
