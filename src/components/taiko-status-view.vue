<template>
  <div class="taiko-container">
    <div ref="TAIKO_ONE_P">
      <i class="taiko-base"/>
      <i class="taiko-status"/>
    </div>
    <div ref="TAIKO_TWO_P">
      <i class="taiko-base"/>
      <i class="taiko-status"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'taiko-status-view',
  props: [
    'machine',
  ],
  mounted() {
    this.$nextTick(() => {
      const onePStatus = this.machine.status[0].toLowerCase();
      const twoPStatus = this.machine.status[1].toLowerCase();
      const onePIcon = this.$refs.TAIKO_ONE_P.getElementsByClassName('taiko-status')[0];
      const twoPIcon = this.$refs.TAIKO_TWO_P.getElementsByClassName('taiko-status')[0];
      onePIcon.className = `taiko-status status-${onePStatus}`;
      twoPIcon.className = `taiko-status status-${twoPStatus}`;
    });
  },
};
</script>

<style>
.taiko-container{
  margin-right: 8px;
  margin-top: 8px;
  background: #b5b5b563;
  padding: 8px;
  position: relative;
  display: inline-block;
}
.taiko-container div{
  left:0;
  position: relative;
  top:0;
  z-index: 2;
  display: inline-flex;
}

  .taiko-container .taiko-base{
    width: 48px; height: 48px;
    background: url(/media/img/mura_sprites.png) -10px -78px;
    display: inline-block;
  }

  .taiko-status{
    position: absolute;
    left: 0;
    z-index: 4;
  }

  .taiko-container .status-good {
    width: 48px; height: 48px;
    background: url(/media/img/taiko_status_sprites.png) -78px -10px;
  }
  .taiko-container .status-fair {
    width: 48px; height: 48px;
    background: url(/media/img/taiko_status_sprites.png) -10px -10px;
  }
  .taiko-container .status-poor {
    width: 48px; height: 48px;
    background: url(/media/img/taiko_status_sprites.png) -10px -78px;
  }
  .taiko-container .status-unknown {
    width: 48px; height: 48px;
    background: url(/media/img/taiko_status_sprites.png) -78px -78px;
  }
</style>
