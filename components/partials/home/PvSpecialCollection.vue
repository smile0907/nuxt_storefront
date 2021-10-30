<template>
	<div class="home-products-container text-center skeleton-body">
		<div class="row">
			<div
				class="col-md-4 mb-2 appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="300"
				v-animate
			>
				<div class="home-products bg-white px-4 pb-2 pt-4">
					<h3 class="section-sub-title mt-1 m-b-1">Featured Products</h3>
					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
						v-if="featuredProducts.length === 0"
					>
						<div
							v-for="item in [1,2,3]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
					>
						<pv-product-four
							v-for="(product,index) in featuredProducts"
							:key="'featured' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-four>
					</pv-carousel>
				</div>
			</div>

			<div
				class="col-md-4 mb-2 appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="500"
				v-animate
			>
				<div class="home-products bg-white px-4 pb-2 pt-4">
					<h3 class="section-sub-title mt-1 m-b-1">Best Sellers</h3>
					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
						v-if="bestProducts.length === 0"
					>
						<div
							v-for="item in [1,2,3]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
					>
						<pv-product-four
							v-for="(product,index) in bestProducts"
							:key="'best' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-four>
					</pv-carousel>
				</div>
			</div>

			<div
				class="col-md-4 mb-2 appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="700"
				v-animate
			>
				<div class="home-products bg-white px-4 pb-2 pt-4">
					<h3 class="section-sub-title mt-1 m-b-1">New Arrivals</h3>
					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
						v-if="newProducts.length === 0"
					>
						<div
							v-for="item in [1,2,3]"
							:key="item"
							class="swiper-slide product-loading-overlay"
						></div>
					</pv-carousel>

					<pv-carousel
						class="nav-image-center nav-thin px-3"
						:options="baseSlider9"
					>
						<pv-product-four
							v-for="(product,index) in newProducts"
							:key="'new' + index"
							:product="product"
							class="swiper-slide"
						></pv-product-four>
					</pv-carousel>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductFour from '~/components/features/product/PvProductFour';
import { baseSlider9 } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvProductFour
	},
	props: {
		featuredProducts: Array,
		bestProducts: Array,
		newProducts: Array
	},
	data: function() {
		return {
			baseSlider9: baseSlider9
		};
	}
};
</script>