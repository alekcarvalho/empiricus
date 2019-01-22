<template>
  <footer>
    <a-row class="row-flex">
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div>
          <h4>Sobre Nós</h4>
          <ul class="footer-menu">
            <li
              v-for="(item,index) in menuOne"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div class="wrap">
          <ul class="footer-menu">
            <li
              v-for="(item,index) in menuTwo"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div>
          <h4>Conteúdos</h4>
          <ul class="footer-menu">
            <li
              v-for="(item,index) in menuThree"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div class="wrap">
          <ul class="footer-menu">
            <li
              v-for="(item,index) in menuFour"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div class="wrap wrap-mobile">
          <ul class="footer-menu">
            <li
              v-for="(item,index) in menuFive"
              :key="index"
            >
              <router-link :to="item.link">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col
        class="col-footer"
        :xs="{ span: 12}"
        :sm="{ span: 8}"
        :lg="{ span: 4}"
      >
        <div class="menu-social">
          <h4>Empiricus na rede</h4>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="youtube" />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="linkedin" />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="instagram" />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="facebook" />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="twitter" />
          </a>
          <a
            href="#"
            target="_blank"
          >
            <a-icon type="google-plus" />
          </a>
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <div class="copyright">
      © 2017 - Empiricus Research - Todos os direitos reservados - Av. Brigadeiro Faria Lima, 3.477 - Torre B - 10º Andar - CEP 04538-133 - Itaim Bibi - São Paulo
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      menuOne: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'A Empiricus',
          link: '/'
        },
        {
          text: 'Analistas',
          link: '/'
        },
        {
          text: 'Assinaturas',
          link: '/'
        }
      ],
      menuTwo: [
        {
          text: 'Atendimento',
          link: '/'
        },
        {
          text: 'Disclosure',
          link: '/'
        },
        {
          text: 'Política de privacidade',
          link: '/'
        },
        {
          text: 'Trabalhe na Empiricus',
          link: '/'
        }
      ],
      menuThree: [
        {
          text: 'Começando a investir',
          link: '/'
        },
        {
          text: 'Ações',
          link: '/'
        },
        {
          text: 'Renda Fixa',
          link: '/'
        },
        {
          text: 'Cripto moedas',
          link: '/'
        }
      ],
      menuFour: [
        {
          text: 'Dividendos',
          link: '/'
        },
        {
          text: 'Fundos',
          link: '/'
        },
        {
          text: 'Em imóveis',
          link: '/'
        },
        {
          text: 'No exterior',
          link: '/'
        }
      ],
      menuFive: [
        {
          text: 'Newsletter',
          link: '/'
        },
        {
          text: 'Daily News',
          link: '/'
        },
        {
          text: 'Vídeos',
          link: '/'
        },
        {
          text: 'Cotações',
          link: '/'
        },
        {
          text: 'Dicionário de economia',
          link: '/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  background: $secondary;
  width: 100%;
  color: #737373;
  padding: 1.5rem 2rem;
  a {
    color: #737373;
  }
  h4 {
    color: $default;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .wrap {
    ul {
      margin-top: 2rem;
    }
  }
  ul.footer-menu {
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        &:hover {
          color: $default;
        }
      }
    }
  }
  .menu-social {
    a {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
    i {
      color: #ccc;
      font-size: 1.2rem;
      &:hover {
        color: $default;
      }
    }
  }
}
.ant-divider {
  background: #333;
}
.copyright {
  text-align: center;
  font-size: 0.7rem;
}

@media (min-width: 575px) {
  .col-footer {
    display: flex;
    justify-content: center;
    &:last-child {
      align-items: center;
    }
  }
}

@media (max-width: 575px) {
  .col-footer {
    margin-bottom: 1rem;
  }
  .wrap-mobile {
    margin-top: -2rem !important;
  }
}
</style>
