<template>
  <div id="app">
    <NavigationBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import NavigationBar from './components/Views/NavigationBar';
import Footer from './components/Views/Footer';

export default {
  name: 'app',
  components: {
    NavigationBar,
    Footer,
  },
};


</script>
<style lang="scss">

</style>
