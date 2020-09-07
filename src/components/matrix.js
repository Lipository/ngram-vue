import Vue from 'vue';
import EventBus from '../share/event.bus';
import EventNames from "../share/event.names";
import AppData from "../config/app.data";
import MatrixFactory from "./matrix.factory";

var Matrix = Vue.component('ngrams', {
    mixins: [EventBus, EventNames, AppData, MatrixFactory],

    created() {
      this.eventBus.$on(EventNames.Matrix, value => {
        console.log(Vue);
        console.log(Vue.config);
        console.log(value);
        this.show = true;
        document.getElementById("matrix").innerHTML = this.createTable(value);
      });
    },
});
export default Matrix;
