<template>
    <div class="main-contents">
        <div class="contents">
            <p>Add a quote:</p>
            <input class="quoteInputField" type="textarea"> {{ quoteText}} </input>
            <button>Add Quote</button>
        </div>    
    </div>  
</template>

<script>
    export default {
        props: ['quoteText']
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



