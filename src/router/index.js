import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import PokemonList from "../views/PokemonList.vue"
import PokemonProfile from "../views/PokemonProfile.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "HomeView",
			component: HomeView,
		},
		{
			path: "/pokedex",
			name: "PokemonList",
			component: PokemonList,
		},
		{
			path: '/pokemon/:id',
			name: 'PokemonProfile',
			component: PokemonProfile,
		},
	],
})

export default router
