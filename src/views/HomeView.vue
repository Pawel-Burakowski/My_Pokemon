<template>
	<div id="home" class="fade-in-element p-3 max-w-3xl ml-auto mr-auto">
		<h1 class="poketitle">My Pokémon Project</h1>
		<p class="poketext mt-8 ml-auto mr-auto max-w-sm">
			Here you can find some categories to choose from to learn more about the
			world of Pokémon!
		</p>

		<ul class="categories mt-9 ml-auto mr-auto max-w-md">
			<li
				class="categories_element brand-color-01-background"
				@click="$router.push({ name: 'PokemonList' })"
			>
				<span class="categories_element_text">Pokédex</span>
				<img class="categories_element_svg" :src="pokeballSVG" alt="Pokeball" />
			</li>

			<li
				class="categories_element overflow-hidden relative rounded-2xl cursor-pointer my-5 px-1.5 py-4"
				@click="$router.push({ name: 'ItemsList' })"
			>
				<span class="categories_element_text">Items</span>
				<img
					class="categories_element_svg absolute m-0 h-auto max-w-none"
					:src="pokeballSVG"
					alt="Pokeball"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "HomeView",
	setup() {
		return {
			pokeballSVG: "/svg/pokeball.svg",
		}
	},
}
</script>

<style lang="scss" scoped>
$breakpoint-max-mobile: 767px;
$breakpoint-min-desktop: 768px;
#home {
	padding: 12px;
	.categories {
		.categories_element {
			background-color: #42b983;
			border-radius: 16px;
			cursor: pointer;
			overflow: hidden;
			padding: 16px 6px;
			position: relative;
			.categories_element_text {
				font-size: 1.25rem;
				font-weight: 500;
				transition: color 0.4s, font-weight 0.3s;
			}
			&:hover .categories_element_text {
				color: white;
				font-weight: bold;
			}
			.categories_element_svg {
				height: auto;
				left: -285px;
				margin: 0;
				max-width: none;
				padding: 0;
				position: absolute;
				top: -310px;
				width: 735px;

				@media (max-width: $breakpoint-max-mobile) {
					left: -285px;
					top: -292px;
					width: 700px;
				}
			}
		}
	}
}
</style>
