<template>
  <div class="container">
    <v-collapse-wrapper>
        <div class="header" v-collapse-toggle>
             <i class="don-0"/><span class="district-header">九龍區</span>
        </div>
        <div class="my-content" v-collapse-content style="overflow-y:scroll;">
          <div ref="KLN" class="collapsed-content"></div>
        </div>
    </v-collapse-wrapper>
    <v-collapse-wrapper>
        <div class="header" v-collapse-toggle>
            <i class="katsu-0"/><span class="district-header">新界區</span>
        </div>
        <div class="my-content" v-collapse-content style="overflow-y:scroll;">
          <div class="collapsed-content">
           <div ref="NTR" class="collapsed-content"></div>
          </div>
        </div>
    </v-collapse-wrapper>
    <v-collapse-wrapper>
        <div class="header" v-collapse-toggle>
            <i class="don-0"/><span class="district-header">港島區</span>
        </div>
        <div class="my-content" v-collapse-content style="overflow-y:scroll;">
           <div class="collapsed-content">
           <div ref="HKG" class="collapsed-content"></div>
          </div>
        </div>
    </v-collapse-wrapper>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import ArcadeDetails from '../components/arcades-details.vue';

let self;

const makeArcadeDetails = (arcade) => {
  const ComponentClass = Vue.extend(ArcadeDetails);
  const instance = new ComponentClass({
    propsData: {
      data: arcade,
    },
  });
  return instance;
};

const addArcadeComponent = (data) => {
  data.KLN.forEach((arcade) => {
    const details = makeArcadeDetails(arcade);
    details.$mount();
    self.$refs.KLN.appendChild(details.$el);
  });
  data.NTR.forEach((arcade) => {
    const details = makeArcadeDetails(arcade);
    details.$mount();
    self.$refs.NTR.appendChild(details.$el);
  });
  data.HKG.forEach((arcade) => {
    const details = makeArcadeDetails(arcade);
    details.$mount();
    self.$refs.HKG.appendChild(details.$el);
  });
};

const getArcades = () => {
  axios.get('../data/arcade.json')
    .then((resp) => {
      const newArcades = resp.data.NEW;
      addArcadeComponent(newArcades);
    }).catch((err) => {
      console.error(err);
    });
};

export default {
  name: 'arcade',
  mounted() {
    self = this;
    getArcades();
  },
  metaInfo: {
    title: '街機位置',
    meta: [
      { property: 'og:title', content: '集鼓村 - 太鼓街機資訊' },
      { property: 'og:site_name', content: '集鼓村' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hktaiko.com/arcade' },
      { property: 'og:image', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'og:description', content: '全新香港集鼓村，查詢港九新界太鼓の達人街機位置、鼓況。歡迎新舊鼓眾加入我們的 Telegram 群組！' },

      { property: 'twitter:title', content: '集鼓村 - 太鼓街機資訊' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: 'https://hktaiko.com/arcade' },
      { property: 'twitter:image:src', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'twitter:description', content: '全新香港集鼓村，查詢港九新界太鼓の達人街機位置、鼓況。歡迎新舊鼓眾加入我們的 Telegram 群組！' },
    ],
  },
};
</script>

<style>
.vc-collapse{
  padding: 8px;
}

.v-collapse-content{
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
    padding: 0;
  }

  .v-collapse-content-end{
    transition: max-height 0.3s ease-in;
    max-height: 500px;
  }

  .district-header{
    font-size: 24px;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 8px;
    line-height: 48px;
  }

  .collapsed-content{
    margin-top:8px;
  }

  .don-0{
    width: 48px; height: 48px;
    background: url(/media/img/mura_sprites.png) -10px -10px;
    position: absolute;
  }
  .katsu-0{
    width: 48px; height: 48px;
    background: url(/media/img/mura_sprites.png) -78px -10px;
    position: absolute;
  }
  @media all and (min-width:0px) and (max-width: 600px){
     .v-collapse-content-end{
      transition: max-height 0.3s ease-in;
      max-height: 300px;
    }
  }
</style>
