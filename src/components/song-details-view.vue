<template>
    <div class="song-details-header">
        <span class="song-title">{{song.title}}</span>
        <br>
        <span ref="SONG_DETAILS_CAPTION" class="song-caption">{{song.caption}}
        <br></span>
        <div class="song-details-header-right">
            <div class="levels-logo level-easy">{{song.levels.kanntann}}</div>
            <div class="levels-logo level-normal">{{song.levels.hutsuu}}</div>
            <div class="levels-logo level-hard">{{song.levels.muzukashii}}</div>
            <div class="levels-logo level-oni">{{song.levels.oni}}</div>
            <div ref="SONG_DETAILS_URA_ONI" class="levels-logo level-ura-oni">{{song.levels.uraOni}}</div>
        </div>
    </div>
</template>
<style>
@media all and (min-width:0px) and (max-width: 600px){
.song-details-header-right{
    display: block;
    margin-left: 16px;
}
}
@media all and (min-width: 600px){
.song-details-header-right{
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    z-index: 0;
}
}
.song-details-header{
    padding: 8px 16px 8px 16px;
    text-align: left;
    position: relative;
}
.song-details-header .song-title{
    font-size: 18px;
    color: #FFF;
}
.song-details-header .song-caption{
    font-size: 16px;
    margin-left: 16px;
    color: #ffffffa1;
}

.level-easy{
    background: url('/media/img/levels_sprites.png') -10px -10px;
}
.level-normal{
    background: url('/media/img/levels_sprites.png') -10px -70px;
}
.level-hard{
    background: url('/media/img/levels_sprites.png') -10px -130px;
}
.level-oni{
    background: url('/media/img/levels_sprites.png') -10px -190px;
}
.level-ura-oni{
    background: url('/media/img/levels_sprites.png') -10px -250px;
}

.levels-logo{
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: right;
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 3px 4px 6px #000000;
    padding: 4px;
}
</style>
<script>
export default {
    name: 'song-details-view',
    props: [
        'song',
    ],
    mounted() {
        this.$nextTick(() => {
            if(this.song.levels.uraOni == null){
                let target = this.$refs.SONG_DETAILS_URA_ONI;
                target.parentNode.removeChild(target);
            }
        });
    },
}
</script>
