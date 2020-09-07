import Vue from 'vue';

var Accordion = Vue.component('accordion', {

    data() {
      return {
          lang: Vue.config.lang,
      }
    },
    methods: {
        toggleAccordion() {
            var acc = document.getElementsByClassName("accordion");
            for (var i = 0; i < acc.length; i++) {
                acc[i].onclick = function(){
                    this.innerText = this.innerText.replace('Hide', 'Show');
                    this.innerText = this.innerText.replace('Verstecke', 'Zeige');
                    this.classList.toggle("active");
                    this.nextElementSibling.classList.toggle("show");
                    if (this.classList.contains("active")) {
                        this.innerText = this.innerText.replace('Show', 'Hide');
                        this.innerText = this.innerText.replace('Zeige', 'Verstecke');
                    }
                }
            }
        }
    }
});
export default Accordion;
