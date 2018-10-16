<template>
    <div class="br-banner-overlay">
        <div class="pull-left text-white br-banner-text-container">
            <div class="container">
                <h3>Video Game Rental - First 3 rentals FREE!</h3>
                <ul class="br-list-group">
                    <li class="br-list-item">
                        <i class="fa fa-check"></i>Subscriptions from as little as £3.99 a month
                    </li>
                    <li class="br-list-item">
                        <i class="fa fa-check"></i>1000's of titles, all major formats
                    </li>
                    <li class="br-list-item">
                        <i class="fa fa-check"></i>FREE delivery, cancel anytime
                    </li>
                    <li class="br-list-item">
                        <i class="fa fa-check"></i>21 day FREE TRIAL
                    </li>
                </ul>
                <button type="button" class="btn btn-primary btn-lg">View Rental Packages</button>
            </div>
        </div>
        <transition appear name="slide-to-left" @after-enter="afterEnter">
            <img class="pull-right force-back" :src="bannerImg" :alt="imgText" width="50%"/>
        </transition>
    </div>
</template>

<script lang="ts">
const relPath = require.context('../../assets', true, /\.jpg$/);

import Vue from 'vue';
export default Vue.extend({
    name: 'HomeBanner',
    data() {
        return {
            bannerImg: relPath('./Ass_Creed_Background.jpg'),
            imgText: 'Assassins Creed Image',
            imgDisplacement: 0,
        };
    },
    methods: {
        afterEnter(el: any) {
            el.style.right = '170px';
        }
    }
});
</script>

<style lang="scss">
$colour: rgba(44, 48, 51, 1);
$transuclant-colour: rgba(44, 48, 51, 0);

.br-banner-overlay {
    display: inline-block;
    background-image: linear-gradient(90deg, darken($colour, 8%) 45%, darken($colour, 4%) 55%, $transuclant-colour);
}
.force-back {
    z-index: -10;
    position: relative;
}

ul.br-list-group > .br-list-item {
    list-style-type: none;
    i {
        padding-right: 20px;
    }
}
.br-banner-text-container {
    font-size: 1.4em;
    position: relative;
    left: 20%;
    margin-top: 5%;
    h3 {
        font-size: 1.8em;
        padding-left: 40px;
    }
    button {
        margin-top: 20px;
        margin-left: 40px;
    }
}

.slide-to-left-enter-active {
    transition: right 10s ease;
}
.slide-to-left-enter {
    right: 0;
}
.slide-to-left-enter-to {
    right: 170px;
}
</style>

