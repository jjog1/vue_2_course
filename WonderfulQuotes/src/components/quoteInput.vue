<template>
    <div class="main-contents">
        <div class="contents">
            <p>Add a quote:</p>
            <input class="quoteInputField" type="textarea" v-model="quoteText"></input>
            <button @click="addQuote">Add Quote</button>
        </div>    
    </div>  
</template>

<script>
    import { bus } from '../main.js'

    export default {
        data: () => {
            return {
                quoteText: ''
            }
        },
        methods: {
            addQuote() {
                bus.$emit('new-quote', this.quoteText);
            }
        },
        created() {
            bus.$on('quotes-changed', () => {this.quoteText = '';});
        }
    }
</script>

<style scoped>
    .quoteInputField {
        width: 100%;
        height: 10em;
    }

    button {
        width: 10em;
        margin: 1em auto;
    }

    .main-contents {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .contents {
        width: 60%;
        height: 15em;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
    }
</style>



