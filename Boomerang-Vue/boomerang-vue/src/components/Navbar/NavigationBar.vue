<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-collapse justify-content-md-center">
            <ul class="navbar-nav">
                <li v-for="(link, i) in links" :key="i" 
                    class="nav-item br-nav-link" :class="{active: i == 0}">
                    <a class="nav-link" href="#">{{link.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import links from '../../../data/Navigation/links';

import Vue from 'vue';
export default Vue.extend({
    name: 'NavigationBar',
    data() {
        return {
            links,
        };
    },
});
</script>

<style lang="scss">
.br-nav-link {
    padding-left: 20px;
    padding-right: 20px;
}
</style>
