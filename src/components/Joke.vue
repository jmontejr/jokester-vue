<template>
    <div class="joke col-md-6" id="joke">
        <div class="joke__card">
            <div class="card-block w-100">
                <span
                    class="close" 
                    @click="REMOVE_JOKE(index)">
                        &times;
                </span>
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