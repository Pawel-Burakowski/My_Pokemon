<template>
	<div id="pokemon-list" class="max-w-3xl ml-auto mr-auto">
		Pokemon List
		<div v-for="(pokemon, index) in allPokemon" :key="index">
			{{ pokemon.name }}
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
	name: "PokemonList",
	components: {},
	setup() {
		let allPokemon = ref([])
		onMounted(() => {
			// Getting all the original 179 pokemon
			fetch(`https://pokeapi.co/api/v2/pokemon?limit=179`)
				.then(response => response.json())
				.then(data => {
					allPokemon.value = data.results
					console.log(allPokemon)
				})
		})

		return {
			allPokemon,
		}
	},
}
</script>

<style lang="scss" scoped></style>
