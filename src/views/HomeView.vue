<template>
	<div id="home" class="max-w-3xl ml-auto mr-auto">
		<h1 class="poketitle">My Pokémon Project</h1>
		<p class="poketext mt-8 ml-auto mr-auto max-w-sm">
			Here you can find some categories to choose from to learn more about the
			world of Pokémon!
		</p>

		<ul class="categories mt-9 ml-auto mr-auto max-w-md">
			<li class="categories_element brand-color-01-background">
				<span class="categories_element_text">Pokédex</span>
				<img class="categories_element_svg" :src="pokeballSVG" alt="Pokeball" />
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "HomeView",
	data() {
		return {
			pokeballSVG: "../src/assets/svg/pokeball.svg",
		}
	},
}
</script>

<style lang="scss">
$breakpoint-max-mobile: 767px;
$breakpoint-min-desktop: 768px;
#home {
	padding: 12px;
	.categories {
		.categories_element {
			border-radius: 16px;
			cursor: pointer;
			overflow: hidden;
			padding: 16px 6px;
			position: relative;
			.categories_element_text {
				font-size: 1.25rem;
				font-weight: 500;
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
