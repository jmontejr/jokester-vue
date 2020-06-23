<template>
    <div id="app" class="app container">

        <div class="row">
            <div class="col-md-12">
                <h1 class="app__title">{{ title }}</h1>
                <h2 class="app__subtitle">Got Jokes?</h2>
                <button class="btn btn-primary mt-3" @click="INIT_JOKES">Add ten random jokes</button>
            </div>
        </div>

        <div class="row mt-5">
            <joke 
                :joke="joke" 
                v-for="(joke, index) in $store.state.jokes" 
                :key="index" 
            />
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from '@/components/Joke.vue';

export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
        };
    },
    methods: mapActions([ 'INIT_JOKES' ]),
    components: {
        Joke
    }
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
