<template>
    <div id="app" class="app container">

        <div class="row">
            <div class="col-md-12">
                <h1 class="app__title">{{ title }}</h1>
                <h2 class="app__subtitle">Got Jokes?</h2>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary mt-3 mx-1" @click="INIT_JOKES">Add ten random jokes</button>
                    <button class="btn btn-primary mt-3 mx-1" @click="ADD_JOKE">Add a joke</button>
                    <button class="btn btn-danger mt-3 mx-1" @click="CLEAR_JOKES">Clear all jokes!</button>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <joke 
                :joke="joke" 
                :index="index"
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
    methods: mapActions([ 
        'INIT_JOKES',
        'ADD_JOKE',
        'CLEAR_JOKES',
    ]),
    components: {
        Joke
    }
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
