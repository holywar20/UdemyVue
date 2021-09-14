<template>
<div>
	<header>
		<h3>{{ friend.name }}</h3>
		<button @click="toggle()">Show Details</button>
	</header>
	<div>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone:</strong>{{ friend.phone }}</li>
			<li><strong>Email:</strong>{{ friend.email }}</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return {
			detailsAreVisible : true,
			friend : {
				id : '',
				name : '',
				phone: '',
				email: ''
			}
		}
	},
	methods: {
		toggle(){
			this.detailsAreVisible = !this.detailsAreVisible
		}
	}
}
</script>