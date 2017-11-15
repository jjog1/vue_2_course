<template>
    <div>
        <div v-for="quote in quotes" :key="quote.id">
            <quote @deleteQuote="removeQuote":quote="quote">
            </quote>
        </div>
    </div>
</template>

<script>
import Quote from './quote.vue'
export default {
    data() {
        return {
            quotes: [{
                id: 1,
                text: 'Yay a great quote'
            }]
        }
    },
    methods: {
        removeQuote(id) {
            for(var x = 0; x < this.quotes.length; x++) {
                if(this.quotes[x].id === id) {
                    this.quotes.splice(x , 1);
                }
            }
        }
    },
    components: {
        'quote': Quote
    }
}
</script>
