<template>
    <v-collapse-wrapper v-on:afterOpen="onCollapse">
        <div class="header" v-collapse-toggle>
             <div ref="CATEGORY_TITLE_CONTAINER">
             </div>
        </div>
        <div class="my-content" v-collapse-content style="overflow-y:scroll;">
          <div class="collapsed-content">
              <div ref="CATEGORY_SONG_CONTAINER" style="background-color: #aeaeae54; padding-top:16px;">
                  
             </div>
          </div>
        </div>
    </v-collapse-wrapper>
</template>
<style>
.cat-jpop{
    background: url('/media/img/song_categories_sprites.png') -10px -10px;
}
.cat-anime{
    background: url('/media/img/song_categories_sprites.png') -10px -78px;
}
.cat-vocaloid{
    background: url('/media/img/song_categories_sprites.png') -10px -146px;
}
.cat-douyou{
    background: url('/media/img/song_categories_sprites.png') -10px -214px;
}
.cat-variety{
    background: url('/media/img/song_categories_sprites.png') -10px -282px;
}
.cat-classic{
    background: url('/media/img/song_categories_sprites.png') -10px -350px;
}
.cat-game-music{
    background: url('/media/img/song_categories_sprites.png') -10px -418px;
}
.cat-namco-original{
    background: url('/media/img/song_categories_sprites.png') -10px -486px;
}
.cat-logo{
    width: 192px; height: 48px;
    display: block;
    margin: auto;
}
</style>
<script>
import Vue from 'vue';
import SongDetailsView from './song-details-view';
const updateCategory = (self,category) => {
    let categoryTextClass = null;
    switch(category.title){
        case "J-POP":
            categoryTextClass = "cat-jpop";
            break;
        case "アニメ":
            categoryTextClass = "cat-anime";
            break;
        case "ボーカロイド曲":
            categoryTextClass = "cat-vocaloid";
            break;
        case "どうよう":
            categoryTextClass = "cat-douyou";
            break;
        case "バラエティ":
            categoryTextClass = "cat-variety";
            break;
        case "クラシック":
            categoryTextClass = "cat-classic";
            break;
        case "ゲームミュージック":
            categoryTextClass = "cat-game-music";
            break;
        case "ナムコオリジナル":
            categoryTextClass = "cat-namco-original";
            break;
    }
    if(categoryTextClass != null){
        self.$refs.CATEGORY_TITLE_CONTAINER.insertAdjacentHTML( "beforeend",
            `<i class="cat-logo ${categoryTextClass}"></i>`
        );
        category.songs.forEach(song => {
            const SongDetails = Vue.extend(SongDetailsView);
            const instance = new SongDetails({
                propsData: {
                    song: song,
                },
            });
            instance.$mount();
            self.$refs.CATEGORY_SONG_CONTAINER.appendChild(instance.$el);
        });

    }
}

export default {
    name: 'song-catrgory',
    props: [
        'category',
    ],
    mounted() {
        this.$nextTick(() => {
            updateCategory(this,this.category);
        });
    },
    methods: {
        onCollapse: (vm) => {
            for (let element of document.getElementsByClassName('v-collapse-content-end')) {
                if(vm.$el != element.parentNode)
                    element.classList.remove('v-collapse-content-end');
            }
        }
    }
}
</script>
