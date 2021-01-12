import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: "#app",
    data:{
      allRates: [],
      selectedRate: 0,
      amountToConvert: 0,
      convertedAmount: 0,
      direction: ""

    },
    mounted: function (){
      this.getRates();
    },
    methods:{
      getRates: function (){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json())
        .then(data => this.allRates = data.rates);
      },
      convertAmount: function (){
        if(this.direction === "fromEuros"){
          let unRounded = this.amountToConvert * this.selectedRate;
          this.convertedAmount =  Math.round((unRounded + Number.EPSILON) * 100) / 100;
      }else {
        let unRounded = this.amountToConvert / this.selectedRate;
        this.convertedAmount = Math.round((unRounded + Number.EPSILON) * 100) / 100;
        
      }
    }
    },
  })
  
  
});


