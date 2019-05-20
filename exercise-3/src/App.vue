<template>
    <div>
        <input type="text" ref="searchText" />
        <input type="submit" value="Search" @click="search" />
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
