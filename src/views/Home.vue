<template>
  <div id="root">
    <div class="mura-logo center"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
#root {
    height: 100%;
    display: contents;
    position: relative;
}

.center {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
}

@media all and (min-width:0px) and (max-width: 600px)
{
  .mura-logo {
    background-image: url(/media/img/syuukomura.png);
    width: 320px;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media all and (min-width: 600px){
.mura-logo {
    background-image: url(/media/img/syuukomura.png);
    width: 640px;
    height: 480px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
