<template>
    <div id="app" class="app">
        <h1 class="app__title">{{ title }}</h1>
        <h2 class="app__subtitle">Got Jokes?</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
        };
    },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
