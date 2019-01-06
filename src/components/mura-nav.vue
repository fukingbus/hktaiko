<template>
  <nav>
      <router-link class="nav-link" to="/">主頁</router-link>
      <router-link class="nav-link" to="/arcade">街機位置</router-link>
      <router-link class="nav-link" to="/song">曲目資料</router-link>
      <router-link class="nav-link" to="/about">關於</router-link>
  </nav>
</template>

<script>
export default {
  name: 'mura-nav',
};
</script>

<style>
    nav {
        display: block;
        background-color: #4c53569e;
        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        position: relative;
        top:0;
        text-align:center;
    }

    nav a {
        display: inline-block;
        padding: 18px 30px;
        color: #fff !important;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none !important;
        line-height: 1;
        text-transform: uppercase;
        background-color: transparent;
        -webkit-transition: background-color 0.25s;
        -moz-transition: background-color 0.25s;
        transition: background-color 0.25s;
    }

    nav a:first-child {
        border-radius: 2px 0 0 2px;
    }

    nav a:last-child {
        border-radius: 0 2px 2px 0;
    }
</style>
