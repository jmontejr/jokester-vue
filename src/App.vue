<template>
    <div id="app" class="app">
        <h1 class="app__title">{{ title }}</h1>
        <h2 class="app__subtitle">Got Jokes?</h2>
        <button class="btn btn-primary" @click="INIT_JOKES">Add ten random jokes</button>
        <div>
            {{$store.state}}
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
        };
    },
    methods: mapActions([ 'INIT_JOKES' ]),
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
