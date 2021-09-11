const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    add( num ){ this.counter += num },
    subtract( num ){ this.counter -= num },

    textChanged( eventObject ){
      this.name = eventObject.target.value
    }
  }
});

app.mount('#events');
