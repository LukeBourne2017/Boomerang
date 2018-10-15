<template>
    <div>
        <div class="container text-center mt-4">
            <h3>Rent Games Like These:</h3>
        </div>
        <PackageExample/>
        <!-- <div class="row mt-3">
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
        </div> -->
        <div class="row mt-3">
            <div class="br-game-container">
                <div class="container d-flex align-items-center justify-content-center mx-0">
                    <div class="row">
                        <div v-for="(game,i) in package1Games" :key="i">
                            <img :src="game.imageSrc" :alt="game.imageAlt" height="200px" style="padding-left: 25px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="br-curve-panel br-curve-panel-right">
                <div class="br-curve-panel-inner">
                    <h2>£9.99 a Month</h2>
                    <div class="font-md">
                        <p>Unlimited Games a Month!</p>
                    </div>
                </div>
            </div>
        </div>
        <PackageExample/>
        <!-- <div class="row mt-3">
            <div class="br-curve-panel br-curve-panel-left pull-left">
                <div class="br-curve-panel-inner">
                    <h2>£11.99 a Month</h2>
                    <div class="font-md">
                        <p>2 Games at a Time!</p>
                    </div>
                </div>
            </div>
            <div class="br-game-container">
                <div class="container d-flex align-items-center justify-content-center mx-0">
                    <div class="row">
                        <div v-for="(game,i) in package2Games" :key="i">
                            <img :src="game.imageSrc" :alt="game.imageAlt" height="200px" style="padding-right: 25px;">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as popularPackages from '../../../data/Games/popularGames';
import IGameDisplayPicture from './DTOs/IGameDisplayPicture';
import PackageExample from './PackageExample.vue';

const relPath = require.context('../../assets', true, /\.jpg$/);

export default Vue.extend({
    name: 'PackageExamples',
    data() {
        return {
            popularPackages,
        };
    },
    computed: {
        package0Games(): IGameDisplayPicture[] {
            return this.mapToGameDisplay(popularPackages.package0Games);
        },
        package1Games(): IGameDisplayPicture[] {
            return this.mapToGameDisplay(popularPackages.package1Games);
        },
        package2Games(): IGameDisplayPicture[] {
            return this.mapToGameDisplay(popularPackages.package2Games);
        },
    },
    methods: {
        mapToGameDisplay(imgs: any[]): IGameDisplayPicture[] {
            return imgs.map(x => {
                return {
                    imageSrc: relPath('./' + x.imageSrc),
                    imageAlt: x.imageAlt,
                };
            });
        },
    },
    components: {
        PackageExample,
    }
});
</script>

<style lang="scss">
    $curved-panel-colour: #adadad;
    $curved-panel-width: 80%;
    $curved-panel-height: 350px;

    .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .font-md {
        font-size: 1.2em;
    }

    h3 {
        font-size: 1.8em;
    }
    .br-game-container {
        display: flex;
        width: 100% - ($curved-panel-width / 2);
        height: $curved-panel-height;
    }
    .br-curve-panel {
        border-radius: 100%;
        width: $curved-panel-width;
        position: relative;
        height: $curved-panel-height;
        box-shadow: 3px 4px 6px 0px rgba(0,0,0,0.14);    
        display: flex;
        align-items: center;
        justify-content: center;
        .br-curve-panel-inner {
            position: relative;
        }
        &.br-curve-panel-left {
            background: linear-gradient(165deg, #808080 50%,#b3b3b3 75%,#a7a7a7 76%,#c2c2c2 100%);
            right: $curved-panel-width / 2;
            margin-right: -($curved-panel-width / 2);
            .br-curve-panel-inner {
                left: ($curved-panel-width / 4) + ($curved-panel-width / 12);
            }
        }
        &.br-curve-panel-right {
            background: linear-gradient(165deg, #808080 0%,#b3b3b3 25%,#a7a7a7 26%,#c2c2c2 50%);
            left: (200% - $curved-panel-width) / 2;
             margin-left: -((200% - $curved-panel-width) / 2);
            .br-curve-panel-inner {
                right: ($curved-panel-width / 4) + ($curved-panel-width / 12);
            }
        }
    }
</style>


