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
