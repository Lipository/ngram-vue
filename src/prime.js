import Vue from 'vue';
import Ciphertext from "./text/ciphertext.vue";
import Matrix from "./components/matrix.vue";
import ButtonBox from "./components/buttonbox.vue";
import Accordion from "./componentDOM/accordion.vue";
import Tabs from "./componentDOM/tabs.vue";
import ModelMixin from "./model/model.mixin";
import EventNames from "./share/event.names";
import AppData from "./config/app.data";
import AppConfig from "./config/app.config";
import ToggleMixin from "./share/toggle.mixin";

var Prime = Vue.extend({
    mixins: [AppData, AppConfig, ModelMixin, EventNames, ToggleMixin],

    beforeCreate () {
      this._eventBus = new Vue();
      this._eventBus.$on(EventNames.ToggleDisplayOptions, value => {
        this.toggleDisplayOptions(value);
      });
      this._eventBus.$on(EventNames.Crypt, obj => {
        this.setText(obj.txt);
      });
      this._eventBus.$on(EventNames.Compute, () => {
        this.compute();
      });
      this._eventBus.$on(EventNames.CountGrams, value => {
        this.countGrams = parseInt(value);
      });
      this._eventBus.$on(EventNames.TableLength, value => {
        this.tableLength = parseInt(value);
      });
    },
    created() {
        if (typeof window.CTO_Globals.lang !== 'undefined') {
            this.switchLang(window.CTO_Globals.lang);
        } else {
            this.switchLang(document.documentElement.lang);
        }
    },
    components: {
        Accordion,
        Ciphertext,
        Matrix,
        ButtonBox,
    },
    watch: {
      matrix: function () {
        console.log(this.matrix);
        this._eventBus.$emit(EventNames.Matrix, this.matrix);
      },
    },
    methods: {
      switchLang: function(lang) {
        Vue.config.lang = lang;
      }
    }
});
export default Prime;
