<template>
    <div>
        <h1>TODO</h1>
        <TodoList :list="$store.state.list" />
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue';
    export default {
        name: "App",
        components: {TodoList}
    }
</script>
