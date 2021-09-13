<template>
<div>
	<ul>
		<li v-for="friend in friends" :key="friend.id">{{ friend.name }}</li>
	</ul>
</div>	
</template>

<script>
export default {
	data(){
		return {
			friends:[
				{
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