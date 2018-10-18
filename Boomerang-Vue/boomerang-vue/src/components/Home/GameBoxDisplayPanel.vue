<template>
    <div class="row" v-infocus="'slide-in'">
        <div v-for="(game,i) in games" :key="i">
            <img :src="game.imageSrc" :alt="game.imageAlt" class="br-game-img" 
                :class="'br-game-img-' + side + ' slide-in-' + side + '-' + (i + 1)">
        </div>
    </div>
</template>

<script lang="ts">
import IGameDisplayPicture from './Dtos/IGameDisplayPicture';
import Vue from 'vue';
export default Vue.extend({
    name: 'GameBoxDisplayPanel',
    props: {
        games: {
            type: Array as () => IGameDisplayPicture[],
            required: true,
        },
        side: {
            type: String,
            required: true,
            validator(value: string) {
                return ['left', 'right'].includes(value);
            },
        },
    },
    directives: {
        infocus: {
            isLiteral: true,
            inserted: (el, binding, vnode) => {
                const f = () => {
                    const rect = el.getBoundingClientRect();
                    const doc = document.documentElement;
                    if (!document) {
                        return;
                    }
                    const inView = (rect.width > 0 &&
                                    rect.height > 0 &&
                                    rect.top >= 0 &&
                                    rect.bottom <= (window.innerHeight || doc.clientHeight));
                    if (inView) {
                        el.classList.add(binding.value);
                        window.removeEventListener('scroll', f);
                    }
                };
                window.addEventListener('scroll', f);
                f();
            },
        },
  },
});
</script>

<style lang="scss">
    .slide-in {
        .br-game-img-right {
            left: 0 !important;
        }
        .br-game-img-left {
            right: 0 !important;
        }
    }
    .br-game-img {
        margin-right: 25px;
        height: 200px;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.21);
        position: relative;
        &-right {
            left: -100em;
        }
        &-left {
            right: -100em;
        }
    }

    @for $i from 1 through 5 {
        .slide-in-right-#{$i} {
            transition: left 1s ease #{($i - 1) * 200}ms;
            z-index: #{$i};
        }
        .slide-in-left-#{$i} {
            transition: right 1s ease #{(5 - $i - 1) * 200}ms;
            z-index: #{5 - $i};
        }
    }
</style>
