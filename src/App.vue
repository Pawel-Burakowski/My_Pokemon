<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
	</div>
	<HomeView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router"
import HomeView from "./views/HomeView.vue"
</script>

<style lang="scss">
#app {
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	color: #2c3e50;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;

	#nav {
		padding: 30px;

		a {
			color: #2c3e50;
			font-weight: bold;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
}
</style>
