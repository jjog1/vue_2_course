<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="hasServerDetails">
            <h2>Server {{ serverId }}</h2>
            <p>Server status {{ serverStatus }}</p>
            <button @click="resetStatus">Set status to okay</button>
        </template>
        <p v-else>Details are currently not updated</p>
    </div>

</template>

<script>

import { eventBus } from '../../main'

export default {
    data() {
        return {
            serverId: 0,
            serverStatus: '',
            hasServerDetails: false
        }
    },
    created() {
        eventBus.$on('displayServer', (id, status) => {
            this.hasServerDetails = true;
            this.serverId = id;
            this.serverStatus = status;
        })
    },
    methods: {
        resetStatus() {
            this.serverStatus = 'Normal';
            eventBus.$emit('setStatusOkay', this.serverId)
        }
    }
}

</script>

<style>

</style>
