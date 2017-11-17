<template>
    <div>
        <div v-for="quote in quotes" :key="quote">
            <quote @deleteQuote="removeQuote" :quote="quote">
            </quote>
        </div>
    </div>
</template>

<script>
import Quote from './quote.vue'
import { bus } from '../main.js'

export default {
    data() {
        return {
            quotes: ['Yay a great quote']
        }
    },
    methods: {
        removeQuote(text) {
            for(var x = 0; x < this.quotes.length; x++) {
                if(this.quotes[x] === text) {
                    this.quotes.splice(x , 1);
                }
            }
            bus.$emit('quotes-changed', this.quotes.length);
        },
        addQuote(quote) {
            if(this.quotes.indexOf(quote) >= 0) {
                alert('This quote already exists');
                return;
            }
            if(this.quotes.length < 10) {
                this.quotes.push(quote);
                bus.$emit('quotes-changed', this.quotes.length);
            }
        }
    },
    created() {
        bus.$on('new-quote', (v) => {return this.addQuote(v);})
    },
    components: {
        'quote': Quote
    }
}
</script>
