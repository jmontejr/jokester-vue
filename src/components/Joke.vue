<template>
    <div class="joke col-md-6" id="joke">
        <div class="joke__card">
            <span
                class="joke__card__close" 
                @click="REMOVE_JOKE(index)">
                    &times;
            </span>
            <div class="joke__card__block">
                <p><u>{{ joke.setup }}</u></p>
                <p><em>{{ joke.punchline }}</em></p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        joke: {
            required: true
        },
        index: {
            required: true,
            type: Number
        }
    },
    methods: mapActions([ 
        'REMOVE_JOKE',
    ]),
}
</script>