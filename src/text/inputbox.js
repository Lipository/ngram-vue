import Vue from 'vue';
import EventBus from '../share/event.bus';
import EventNames from "../share/event.names";
import AppData from '../config/app.data';

var InputBox = Vue.component('inputBox', {
    mixins: [EventBus, EventNames, AppData],

    methods: {
      checkInput: function() {
          //this.eventBus.$emit(EventNames.KeyCheck, this.keyValue);
      },
    },
    watch: {
      countGrams: function (newVal, oldVal) {
        if (newVal === oldVal) { return; }
        this.eventBus.$emit(EventNames.CountGrams, newVal);
      },
      tableLength: function (newVal, oldVal) {
        if (newVal === oldVal) { return; }
        this.eventBus.$emit(EventNames.TableLength, newVal);
      }
    }
});
export default InputBox;
