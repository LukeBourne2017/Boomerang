<template>  
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container container-fluid">
        <a href="#" class="navbar-brand mr-auto h1">
          <span v-once>{{appTitle}}</span>
        </a>
        <div class="btn-toolbar" role="toolbar" aria-label="">
            <div class="btn-group mr-2" role="group" aria-label="">
            <form class="form-inline my-2 my-lg-0">
                <div class="input-group">
                  <input type="text" class="form-control border-semi-circle-left"
                  placeholder="Search" aria-label="Search">
                  <div class="input-group-append">
                    <button class="btn btn-light border-semi-circle-right" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          <div class="btn-group mr-2" role="group" aria-label="">
            <button type="button" class="btn btn-outline-light">
              <span v-once>{{login}}</span>
            </button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="">
            <button type="button" class="btn btn-secondary">
              <span v-once>{{freeTrial}}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
  public appTitle: string = 'Boomerang';
  public login: string = 'Login';
  public freeTrial: string = 'Start Free Trial!';
}
</script>

<style scoped lang="scss">
</style>
