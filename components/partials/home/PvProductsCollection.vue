<template>
	<div class="products-container bg-white text-center mb-2 skeleton-body">
		<div
			class="row product-ajax-grid"
			v-if="products.length === 0"
		>
			<div
				class="col-6 col-sm-4 col-md-3 col-xl-5col mb-2"
				v-for="(item) in [1,2,3,4,5,6,7,8,9,10]"
				:key="'product' + item"
			>
				<div class="swiper-slide product-loading-overlay"></div>
			</div>
		</div>

		<div class="row product-ajax-grid">
			<div
				class="col-6 col-sm-4 col-md-3 col-xl-5col appear-animate"
				v-for="(product,index) in products.slice(0, showCounts)"
				:key="'product-' + index"
				data-animation-name="fadeInUpShorter"
				data-animation-duration="1000"
				:data-animation-delay="index < 10 ? index * 100 + 600 : ((index - 10) % 4) + 600"
				v-animate
			>
				<pv-product-three :product="product"></pv-product-three>
			</div>
		</div>

		<a
			href="javascript:;"
			class="btn btn-dark btn-md font1 loadmore mb-1"
			@click="changeShowingCounts"
			v-if="showCounts < products.length"
		>
			<template v-if="!loadingState">Load more...</template>
			<template v-else>Loading...</template>
		</a>
	</div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';

export default {
	components: {
		PvProductThree
	},
	props: {
		products: Array
	},
	data: function() {
		return {
			showCounts: 10,
			loadingState: false
		};
	},
	methods: {
		changeShowingCounts() {
			this.loadingState = true;
			setTimeout(() => {
				this.showCounts += 4;
				this.loadingState = false;
			}, 500);
		}
	}
};
</script>