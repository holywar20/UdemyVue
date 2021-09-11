const app = Vue.createApp({
	data(){
		return {
			courseGoal: "Finish the course",
			viewLink : "https://www.google.com"
		}
	},
	methods : {
		outputGoal(){
			const rand = Math.random();

			if( rand > 0.5 ){
				return "Learn!"
			} else {
				return "Master!"
			}
		}
	}
});

app.mount('#user-goal');