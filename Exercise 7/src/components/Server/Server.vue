<template>
<div @click="displayInServerDetails">Server #{{ id }} {{ status }}</div>
</template>

<script>
    import { eventBus } from '../../main'
    
    export default {
        props: ['id', 'status'],
        methods: {
            displayInServerDetails () {
                eventBus.$emit('displayServer', this.id, this.status)
            }

        }
    }    
</script>