import Vue from 'vue';

var MatrixFactory = {
  data() {
    return {
      values: [],
      rank: Vue.locale(Vue.config.lang).rank,
      gram: Vue.locale(Vue.config.lang).gram,
    }
  },
  methods: {
    createTable(values) {
      let res = "<div class='tbl-wrap'>";

      for(let k = 0; k < values.length; k++) {
        res += "<div class='tbl'><div class='row'>";
        res += "<div class='cell'>" + this.rank + "</div>";
        res += "<div class='cell'>"+ (k+1) + "-" + this.gram + "</div>";
        res += "<div class='cell'>Abs.</div>";
        res += "<div class='cell'>Rel.</div>";
        res += "</div>";
        for(let l = 0; l < values[k].length-1; l++) {
          res += "<div class='row'><div class='cellBegin'>" + (l+1) + "</div>";
          let obj = values[k][l];
          res += "<div class='cell' >" + obj.key + "</div>";
          res += "<div class='cell' >" + obj.absolute + "</div>";
          res += "<div class='cell' >" + obj.relative.toFixed(3) + "</div>";
          res += "</div>";
        }
        res += "</div>";
      }
      res += "</div>";
      return res;
    },
  }
};
export default MatrixFactory;
