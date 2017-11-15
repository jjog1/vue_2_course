<template>
    <div class="container">
        <progress-bar></progress-bar>
        <quote-input></quote-input>
        <quotes-list></quotes-list>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ProgressBar from './components/progressBar.vue'
    import QuotesList from './components/quotesList.vue'
    import QuoteInput from './components/quoteInput.vue'
    export default {
        components: {
            'progress-bar': ProgressBar,
            'quotes-list': QuotesList,
            'quote-input': QuoteInput
        }
    }
</script>

<style>
</style>
