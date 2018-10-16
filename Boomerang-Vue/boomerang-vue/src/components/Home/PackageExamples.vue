<template>
    <div>
        <div class="container text-center mt-4">
            <h3>Rent Games Like These:</h3>
        </div>
        <PackageExample :games="package0Games" side="left" caption="£3.99 a Month"/>
        <PackageExample :games="package1Games" side="right" caption="£9.99 a Month">
            <div class="font-md">
                <p>Unlimited Games a Month!</p>
            </div>
        </PackageExample>
        <PackageExample :games="package2Games" side="left" caption="£11.99 a Month">
            <div class="font-md">
                <p>2 Games at a Time!</p>
            </div>
        </PackageExample>
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
    },
});
</script>

<style lang="scss">
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
</style>


