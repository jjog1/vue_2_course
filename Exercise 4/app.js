new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    newClass: '',
    secondClass: '',
    booleanClass: '',
    customWidth: 100,
    progressStyle: {}
  },
  methods: {
    startEffect: function() {
      this.effectClass = 'shrink';
      var vm = this;
      setInterval(function() {
        vm.effectClass = vm.effectClass === 'shrink' ? 'highlight' : 'shrink';
      }, 3000)
    },
    startProgress: function() {
      var vm = this;
      var progress = 0;
      var interval = setInterval(function () {
        progress += 10;
        if(progress > 100) {
          progress = 0;
          clearInterval(interval);}
        
        vm.progressStyle = {
          width: progress + '%'
        }
      }, 100)
    }
  },
  computed: {
    shouldShowBooleanClass: function () {
      return this.booleanClass == 1 || this.booleanClass == "true";
    },
    customStyles: function () {
      return {
        width: this.customWidth + 'px'
      }
    }
  }
});
