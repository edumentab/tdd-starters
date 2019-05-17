<template>
    <div class="list">
        <div v-for="(item, index) in list.items">
            <input
                type="checkbox"
                @change="() => onToggleItem(index)"
                :checked="item.checked"/>

            <span :class="{ 'checked': item.checked }">{{item.text}}</span>
        </div>

        <hr />

        <div>
            <input :value="list.next" ref="text" type="text" placeholder="Description" @keyup="onUpdateNext" />
            <input type="button" value="Add" @click="onAddNewItem" />
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoList",

    props: {
        list: {type: Object, required: true}
    },

    methods: {
        onToggleItem(index) {
            this.$store.dispatch('onToggleItem', index);
        },

        onUpdateNext() {
            this.$store.dispatch('onUpdateNext', this.$refs.text.value);
        },

        onAddNewItem() {
            this.$store.dispatch('onAddNewItem');
        }
    }
}
</script>

<style scoped>
    .list {
        background-color: aliceblue;
        padding: 1rem;
    }

    .checked {
        text-decoration: line-through;
        color: gray;
    }
</style>
