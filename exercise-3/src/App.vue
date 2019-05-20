<template>
    <div>
        <input type="text" ref="searchText" />
        <input type="submit" value="Search" @click="search" />

        <div>
            <div class="card" v-for="show in $store.state.shows.searchResult" style="display: flex; padding: 1rem; margin-top: 1rem;">
                <div>
                    <img :src="show.image" width="250">
                </div>
                <div style="margin-left: 2rem; font-family: SansSerif,sans-serif; color: #666">
                    <h2 style="margin-top: 0">{{show.name}}</h2>
                    <div v-html="show.summary"></div>
                    <div :class="show.rating.class">{{show.rating.percentage}} %</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        components: {},

        methods: {
            search() {
                const text = this.$refs.searchText.value;
                this.$store.dispatch('onSearch', text);
            }
        }
    }
</script>

<style scoped>
    .card:nth-child(odd) {
        background-color: aliceblue;
    }

    .good {
        font-weight: bold;
        color: green;
    }

    .bad {
        font-weight: bold;
        color: red;
    }
</style>
