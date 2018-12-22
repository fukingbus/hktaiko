<template>
  <div id="root">
    <div class="mura-logo center"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    meta: [
      { property: 'og:title', content: '集鼓村' },
      { property: 'og:site_name', content: '集鼓村' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hktaiko.com' },
      { property: 'og:image', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'og:description', content: '全新香港集鼓村，提供香港太鼓の達人街機、家用機資訊。歡迎新舊鼓眾加入我們的 Telegram 群組！' },

      { property: 'twitter:title', content: '集鼓村' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: 'https://hktaiko.com' },
      { property: 'twitter:image:src', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'twitter:description', content: '全新香港集鼓村，提供香港太鼓の達人街機、家用機資訊。歡迎新舊鼓眾加入我們的 Telegram 群組！' },
    ],
  },
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
