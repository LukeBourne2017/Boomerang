<template>
    <div class="row mt-3">
        <div class="br-curve-panel br-curve-panel-left">
            <div class="br-curve-panel-inner">
                <h2>£3.99 a Month</h2>
            </div>
        </div>
        <div class="br-game-container">
            <div class="container d-flex align-items-center justify-content-center mx-0">
                <div class="row">
                    <div v-for="(game,i) in package0Games" :key="i">
                        <img :src="game.imageSrc" :alt="game.imageAlt" height="200px" style="padding-right: 25px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'PackageExample'
});
</script>

<style lang="scss" scoped>

</style>
