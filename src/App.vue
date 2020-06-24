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
                <div class="mt-3 app--filter">
                    <label 
                        class="mx-3"
                        v-for="(type, index) in types" 
                        :key="index">
                        <input 
                            :value="type" 
                            checked 
                            type="checkbox"
                            v-model="checkedTypes">
                        {{ type }}&nbsp;
                    </label>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <joke 
                :joke="joke" 
                :index="index"
                v-for="(joke, index) in $store.state.jokes" 
                v-show="checkedTypes.includes(joke.type)"
                :key="index" 
            />
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from '@/components/Joke.vue';

export default {
    name: 'App',
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
            types: ['general', 'knock-knock', 'programming'],
            checkedTypes: ['general', 'knock-knock', 'programming'],
        };
    },
    methods: mapActions([ 
        'INIT_JOKES',
        'ADD_JOKE',
        'CLEAR_JOKES',
    ]),
    components: {
        Joke,
    }
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
