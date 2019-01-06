<template>
    <div class="container">
      <!-- <div>
        <span>SEARCH</span>
      </div> -->
      <div ref="SONG_CATEGORY_CONTAINER">
      </div>
    </div>
</template>
<style>

</style>
<script>
import Vue from 'vue';
import axios from 'axios';
import SongCategory from '../components/song-category';

var self;

const addCategory = (data) => {
    let container = self.$refs.SONG_CATEGORY_CONTAINER
    let humanDate = new Date(parseInt(data.buildTime)*1000)
    console.log(`SONG DATA LAST UPDATED: ${humanDate.toDateString()}`)

    data.songCategories.forEach(category => {
        const CategoryClass = Vue.extend(SongCategory);
        const instance = new CategoryClass({
            propsData: {
                category: category,
            },
        });
        instance.$mount();
        container.appendChild(instance.$el)
    });
}

const getSongList = () => {
    axios.get('../data/songdata.json')
    .then((resp) => {
      addCategory(resp.data);
    }).catch((err) => {
      console.error(err);
    });
};


export default {
  name: 'songList',
  mounted() {
    self = this;
    getSongList();
  },
  metaInfo: {
    title: '曲目資料',
    meta: [
      { property: 'og:title', content: '集鼓村 - 曲目資料' },
      { property: 'og:site_name', content: '集鼓村' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hktaiko.com/song' },
      { property: 'og:image', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'og:description', content: '全新香港集鼓村，查詢太鼓の達人街機可遊玩曲目資料。歡迎新舊鼓眾加入我們的 Telegram 群組！' },

      { property: 'twitter:title', content: '集鼓村 - 曲目資料' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: 'https://hktaiko.com/song' },
      { property: 'twitter:image:src', content: 'https://hktaiko.com/media/img/mura_logo.png' },
      { property: 'twitter:description', content: '全新香港集鼓村，查詢太鼓の達人街機可遊玩曲目資料。歡迎新舊鼓眾加入我們的 Telegram 群組！' },
    ],
  },
};
</script>
