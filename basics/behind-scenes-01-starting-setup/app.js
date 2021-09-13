const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  },
  beforeUnmount(){
    console.log("beforeUnmount");
  },
  unmounted(){
    console.log("unmounted");
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

// Code for javascript Proxies

const data = {
  message: 'Hello',
  longMessage : "Hello World"
};

const handler = {
  set( target, key, value ){
    if( key == 'message' ){
      target.longMessage = value + " World";
    }
    target.message = value;
  }
}

const proxy = new Proxy( data , handler );

proxy.message = "New Message";

console.log( proxy.longMessage );