<template>
    <p @click="deleteQuote">{{ quote.text }}</p>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            'quote': {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteQuote() {
                this.$emit('deleteQuote', this.quote.id);
            }
        }
    }
</script>

<style scoped>
p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 1em 0.5em;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 10em;
}
</style>
