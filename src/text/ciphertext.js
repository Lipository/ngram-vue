import Vue from 'vue';
import EventBus from '../share/event.bus';
import EventNames from "../share/event.names";
import AppData from '../config/app.data';
import AppConfig from '../config/app.config';
import ToggleMixin from '../share/toggle.mixin';
import InputBox from './inputbox.vue';

var Ciphertext = Vue.component('cipher', {
    mixins: [EventBus, EventNames, AppData, AppConfig, ToggleMixin],

    methods: {
      toggleOptions: function(value) {
        this.toggleDisplayOptions(value);
        this.eventBus.$emit(EventNames.ToggleDisplayOptions, value);
      },
      keyPress: function(key, type) {
        let keyObj = { key : key, type : type };
        this.eventBus.$emit(EventNames.KeyPress, keyObj);
      },
      crypt: function(type) {
        let obj = { type: type, txt: this.codtxt };
        this.eventBus.$emit(EventNames.Crypt, obj);
      },
    },
    components: {
      InputBox
    }

});
export default Ciphertext;
