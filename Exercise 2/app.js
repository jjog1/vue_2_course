new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function () {
                alert('hello');
            },
            storeValue: function (event) {
                this.value = event.target.value;
            }
        }
    });