<template>
    <div class="list">
        <div v-for="item in list.items">
            <input
                type="checkbox"
                :checked="item.checked"/>

            <span :class="{ 'checked': item.checked }">{{item.text}}</span>
        </div>

        <hr />

        <div>
            <input type="text" placeholder="Description" />
            <input type="button" value="Add" />
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoList",

    props: {
        list: {type: Object, required: true}
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
