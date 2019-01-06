<template>
  <div id="root">
    <div class="container">
      <div style="padding:8px;">
        <span is="title">關於集鼓村</span>
        <p>歡迎各位嚟到新集鼓村！</p>
        <p>我係一個新手鼓眾，眼見舊集鼓村已經消失多時，又唔希望因為無相關嘅資訊而越嚟越少人玩，所以就買咗舊集鼓村嘅 Domain</p>
        <p>未來希望將新集鼓村變為一個可以滿足無論新手定老手嘅網站！</p>
        <br>
        <p>開咗 Telegram Group，希望大家可以多多交流！</p>
        <p>Telegram Group: <a href="https://t.me/syuukomura">t.me/syuukomura</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  metaInfo: {
    title: '關於集鼓村',
  },
};
</script>

<style>
#root {
    height: 100%;
    display: contents;
    position: relative;
}

.container{
  display: block;
  background-color: #4c53569e;
  padding: 8px;
  border-radius: 4px;
  color: #E4E4E4;
  text-align: center;
}

.container #title{
  font-size: large;
  font-weight: bold;
}

.container p {
  text-align: left;
}
.container a {
  text-decoration: none;
  color: #FFF;
}


@media all and (min-width:0px) and (max-width: 600px)
{
  .container {
    margin: 8px 8px 0 8px;
    position: absolute;
  }
}

@media all and (min-width: 600px){
  .container {
    width: 50%;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
  }
}

</style>
