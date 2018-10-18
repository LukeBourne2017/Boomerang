<template>
    <div class="row mt-3">
        <div class="br-curve-panel" :class="sideClasses">
            <div class="br-curve-panel-inner">
                <h2>{{caption}}</h2>
                <slot></slot>
            </div>
        </div>
        <div class="br-game-container">
            <div class="container d-flex align-items-center justify-content-center mx-0">
                <GameBoxDisplayPanel :games="games" :side="side"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import IGameDisplayPicture from './Dtos/IGameDisplayPicture';
import GameBoxDisplayPanel from './GameBoxDisplayPanel.vue';
import Vue from 'vue';
export default Vue.extend({
    name: 'PackageExample',
    props: {
        games: {
            type: Array as () => IGameDisplayPicture[],
        },
        side: {
            type: String,
            required: true,
            validator(value: string) {
                return ['left', 'right'].includes(value);
            },
        },
        caption: {
            type: String,
            required: true,
        },
    },
    computed: {
        sideClasses(): any {
            return {
                'br-curve-panel-left': this.side === 'left',
                'br-curve-panel-right': this.side === 'right',
                'order-2': this.side === 'right',
            };
        },
    },
    components: {
        GameBoxDisplayPanel,
    },
});
</script>

<style lang="scss" scoped>
    $curved-panel-colour: #adadad;
    $curved-panel-width: 80%;
    $curved-panel-height: 350px;

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
