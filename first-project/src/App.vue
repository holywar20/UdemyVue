<template>
<div>
	<friend-detail 
		v-for="friend in friends" :key="friend.id">
	</friend-detail>
</div>	
</template>

<script>
import friendDetail from './Components/FriendDetail.vue'
export default {
	components: { friendDetail },
	data(){
		return {
			friends:[{
					id : "Bryan",
					name : "Bryan Winter",
					phone: "123.453.1231",
					email: "test@test.com"
				},{
					id : "Other",
					name : "John Carmack",
					phone: "123.453.1231",
					email: "test@test.com"
			}
		]}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: 'Jost', sans-serif;
}

body {
	margin-left: auto;
	margin-right: auto;
}

header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app li {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>