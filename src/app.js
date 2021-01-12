import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: "#app",
    data:{
      allRates: [],
      selectedRate: 0,

    },
    mounted: function (){
      this.getRates();
    },
    methods:{
      
      
      getRates: function (){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json())
        .then(data => this.allRates = data.rates);
        // console.log(this.rates);
      }
    },
  })
  
  
});


