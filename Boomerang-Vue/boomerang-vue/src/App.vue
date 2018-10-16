<template>
  <div>
      <div class="fixed-top">
          <AppHeader/>
          <NavigationBar/>
      </div>
      <div style="padding-top: 119px">
          <HomeBanner/>
          <PackageExamples/>
      </div>
  </div>
</template>

<script>

</script>
<script lang="ts">
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { Component, Vue } from 'vue-property-decorator';
import AppHeader from './components/Header/AppHeader.vue';
import NavigationBar from './components/Navbar/NavigationBar.vue';
import HomeBanner from './components/Home/HomeBanner.vue';
import PackageExamples from './components/Home/PackageExamples.vue';

@Component({
  components: {
    AppHeader,
    NavigationBar,
    HomeBanner,
    PackageExamples,
    },
  })
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

body{
  overflow-x: hidden;
}

</style>
