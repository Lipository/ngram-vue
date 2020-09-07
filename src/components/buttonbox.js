import Vue from 'vue';
import EventBus from '../share/event.bus';
import EventNames from "../share/event.names";
import AppData from '../config/app.data';

var ButtonBox = Vue.component('buttonbox', {
    mixins: [EventBus, EventNames, AppData],

    created() {
      this.eventBus.$on(EventNames.OwnValue, value => {
        this.own = value;
      })
    },
    watch: {
      toggle: function() {
        this.eventBus.$emit(EventNames.Toggle, this.toggle);
      }
    },
    methods: {
      computed: function() {
        this.eventBus.$emit(EventNames.Compute);
      }
    }
});
export default ButtonBox;
