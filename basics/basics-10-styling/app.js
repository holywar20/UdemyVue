const app = Vue.createApp({
	data(){
		return{
			boxASelected: false,
			boxBSelected: false,
			classBoxASelected : false,
			classBoxBSelected : false
		}
	},
	methods: {
		// Shouldn't use inline styles most of the time.
		// But useful as an override when you need to.
		setInlineStyle( box ) {
			if( box === 1 ){
				this.boxASelected = !this.boxASelected;
			} else if( box === 2 ) {
				this.boxBSelected = !this.boxBSelected;
			} 
		},
		setClass( box ){
			if( box === 1 ){
				this.classBoxASelected = !this.classBoxASelected;
			} else if ( box === 2 ){
				this.classBoxBSelected = !this.classBoxBSelected; 
			}

			console.log("setting!")
		}
	}
});

app.mount("#styling");