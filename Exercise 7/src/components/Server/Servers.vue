<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in services">
                <server-details :status="server.status" :id="server.id"></server-details>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    import { eventBus } from '../../main'

    export default {
        data() {
            return {
                services: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Normal'},
                    {id: 3, status: 'Critical'},
                    {id: 4, status: 'Normal'},
                ]
            }
        },
        components: {
            'server-details': Server
        },
        created() {
            eventBus.$on('setStatusOkay', (id) => {
                for(var service in this.services) {
                    if(this.services[service].id === id) {
                        this.services[service].status = 'Normal';
                    }
                }
            })
        } 
    }
</script>

<style>

</style>
