<template>
  <div class="details-container">
    <v-collapse-wrapper>
        <div class="header" v-collapse-toggle>
          <div class="details-header-container">
            <span class="details-arcade-region">{{data.region}}</span>
             <span class="details-arcade-name">{{data.name}}</span>
             <span class="details-arcade-taikoCount">{{data.taiko.length}}部</span>
          </div>
        </div>
        <div class="my-content" v-collapse-content>
          <div class="details-collapsed-container">
            <span class="details-arcade-address">地址：{{data.full_addr}}{{(data.short_addr!=null)?'，'+data.short_addr:''}}</span>
            <br>
            <div ref="TAIKO_STATUS_CONTAINER"></div>
            <br>
            <span class="details-arcade-remark">{{(data.remark!=null)?`備註：${data.remark}`:``}}</span>
          </div>
        </div>
    </v-collapse-wrapper>
  </div>
</template>

<script>
import Vue from 'vue';
import TaikoView from './taiko-status-view.vue';

const addTaikoView = (self, machine) => {
  machine.forEach((it) => {
    const ComponentClass = Vue.extend(TaikoView);
    const instance = new ComponentClass({
      propsData: {
        machine: it,
      },
    });
    instance.$mount();
    self.$refs.TAIKO_STATUS_CONTAINER.appendChild(instance.$el);
  });
};

export default {
  name: 'arcade-details',
  props: [
    'data',
  ],
  mounted() {
    this.$nextTick(() => {
      addTaikoView(this, this.data.taiko);
    });
  },
};
</script>

<style>
  .details-container{
    background-color: #aeaeae54;
    margin: 8px 0px 0px 0px;
    border-radius: 4px;
  }
  .details-header-container{
    margin: 8px 8px 8px 8px;
  }
  .details-collapsed-container{
    padding: 8px 0px 8px 0px;
    margin: 0px 8px 0px 8px;
    text-align: left;
  }
  .details-arcade-region{
    font-size: 18px;
    margin-left: 8px;
    color:#FFF;
    float: left;
  }
  .details-arcade-name{
    font-size: 18px;
  }
  .details-arcade-address{
    font-size: 14px;
    margin-left: 8px;
  }
  .details-arcade-taikoCount{
    color: #FFF;
    margin-right: 8px;
    font-size: 18px;
    float: right;
  }
  .details-arcade-remark{
    font-size: 18px;
  }

  hr{
    border-top: 0.5px solid #8c8b8b;
    border-bottom: 0.5px solid #ffffff94;
    margin: 0px 8px 0px 8px;
  }
</style>
