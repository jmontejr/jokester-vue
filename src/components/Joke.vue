<template>
    <div class="joke col-md-6" id="joke">
        <div class="joke__card">
            <div class="joke__card--block">
                <p><u>{{ joke.setup }}</u></p>
                <p><em>{{ joke.punchline }}</em></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        joke: {
            required: true
        }
    }
}
</script>