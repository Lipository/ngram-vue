import NGram from "./ngram.js";

var ModelMixin = {
    data() {
      return {
        ngram: new NGram()
      }
    },
    methods: {
      compute: function() {
        let txt = this.codtxt;
        if (!this.casesensitive) {
          txt = this.codtxt.toUpperCase();
        }
        let arr = [];
        for (let k = 0; k < this.countGrams; k++) {
          arr[k] = this.ngram.countNGrams(txt, k);
        }

        for (let k = 0; k < arr.length; k++) {
          arr[k] = arr[k].slice(0, this.tableLength+1);
        }
        /*
        arr[0] = this.ngram.countMonoGrams(txt);
        arr[1] = this.ngram.countBiGrams(txt);
        arr[2] = this.ngram.countTriGrams(txt);
        arr[3] = this.ngram.countTetraGrams(txt);
        */
        console.log(arr);
        this.matrix = arr;
      },
      setText(value) {
        this.codtxt = value;
      }

  }
};
export default ModelMixin;
