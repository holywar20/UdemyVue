const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      watchedName : '',
      watchedResult : '',
      dataBindingName : '',
      confirmedName : '',
      name: ''
    };
  },

  // Used like data properties
  // NOTE : Computed properties are better for performance.
  // NOTE : Computed properties and data props share namespace!
  computed:{
    computedName(){
      return this.dataBindingName + " Winter!"
    }
  },

  // Use a data property for a watcher
  // NOTE : Good for conditional logic on properties
  // NOTE : But use computed properties if we want logic to always apply to a specific prop 
  watch: {
    watchedName( newValue, oldValue ){
      this.watchedResult = this.watchedName + " Watcher McWactchface"
    }
  }, 

  methods: {
    add( num ){ this.counter += num; },
    subtract( num ){ this.counter -= num; },
    // Event Modifiers
    textAndEventHandling( eventObject , otherName ){
      this.name = eventObject.target.value + " " + otherName;
    },
    eventModifiers( eventObject ){
      // Need this to prevent form submission & page reload
      // eventObject.preventDefault() - JS Standard way
    },
    enterEventModifier( eventObject ){
      this.confirmedName = eventObject.target.value;
    },
    // Data Binding
    setDataBindingName( eventObject ){
      console.log("setting");
      this.dataBindingName = eventObject.target.value;
    },
    resetDataBindingName( eventObject ){
      console.log("resetting");
      this.dataBindingName = '';
    },
    // Outputting modified data in html
    outputFullname(){
      return this.dataBindingName + " Winter!"
    }
  }
});

app.mount('#events');
