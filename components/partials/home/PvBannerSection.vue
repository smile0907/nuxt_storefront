<template>
	<pv-carousel
		class="banners-slider swiper-carousel mb-4 mb-md-2"
		:options="bannerSlider"
	>
		<div
			class="banner banner1 banner-hover-shadow d-flex align-items-center appear-animate swiper-slide"
			data-animation-name="fadeInLeftShorter"
			data-animation-delay="500"
			v-animate
		>
			<figure class="w-100">
				<img
					v-lazy="'./images/home/banners/banner-1.jpg'"
					alt="banner"
					width="380"
					height="185"
					image-ratio="48.68"
					style="background: #f4f4f4"
				/>
			</figure>
			<div class="banner-layer">
				<h3 class="m-b-2">Porto Watches</h3>
				<h4 class="m-b-3 text-primary">
					<sup class="text-dark">
						<del>20%</del>
					</sup>30%<sup>OFF</sup>
				</h4>
				<nuxt-link
					to="/shop"
					class="btn btn-sm btn-dark ls-10"
				>Shop Now</nuxt-link>
			</div>
		</div>

		<div
			class="banner banner2 text-uppercase banner-hover-shadow banner-sm-vw d-flex align-items-center appear-animate swiper-slide"
			v-animate
			data-animation-name="fadeInUpShorter"
			data-animation-delay="200"
		>
			<figure class="w-100">
				<img
					v-lazy="'./images/home/banners/banner-2.jpg'"
					alt="banner"
					width="380"
					height="157"
					image-ratio="41.31"
					style="background: #f4f4f4"
				/>
			</figure>

			<h4 class="banner-layer-circle banner-layer-circle1">
				<span>50</span>
				<sup>
					%
					<small>OFF</small>
				</sup>
			</h4>

			<h4 class="banner-layer-circle banner-layer-circle2">
				<span>70</span>
				<sup>
					%
					<small>OFF</small>
				</sup>
			</h4>

			<h4 class="banner-layer-circle banner-layer-circle3 mb-0">
				<span>30</span>
				<sup>
					%
					<small>OFF</small>
				</sup>
			</h4>

			<div class="banner-layer banner-layer-middle text-center pr-lg-3">
				<div class="row align-items-lg-center">
					<div class="col-lg-7 text-lg-right">
						<h3 class="m-b-1 ls-10">Deal Promos</h3>
						<h4 class="pb-4 pb-lg-0 mb-0 text-body ls-10">Starting at $99</h4>
					</div>
					<div class="col-lg-5 text-lg-left px-0 px-xl-3">
						<nuxt-link
							to="/shop"
							class="btn btn-sm btn-dark ls-10"
						>Shop Now</nuxt-link>
					</div>
				</div>
			</div>
		</div>

		<div
			class="banner banner3 banner-hover-shadow d-flex align-items-center appear-animate swiper-slide"
			data-animation-name="fadeInRightShorter"
			data-animation-delay="500"
			v-animate
		>
			<figure class="w-100">
				<img
					v-lazy="'./images/home/banners/banner-3.jpg'"
					alt="banner"
					width="380"
					height="185"
					image-ratio="48.68"
					style="background: #f4f4f4"
				/>
			</figure>

			<h4 class="banner-layer-circle bg-secondary pt-2">
				40
				<sup>
					%
					<small>OFF</small>
				</sup>
			</h4>

			<div class="banner-layer banner-layer-bottom banner-layer-left banner-layer-brand">
				<img
					:src="'./images/home/banners/banner-brand.png'"
					alt="banner brand"
					width="140"
					height="60"
				/>
			</div>

			<div class="banner-layer banner-layer-middle text-right">
				<h3 class="mb-1">Handbags</h3>
				<h4 class="m-b-1 ls-10 pb-3 text-secondary text-uppercase">Starting at $99</h4>
				<nuxt-link
					to="/shop"
					class="btn btn-sm btn-dark ls-10"
				>Shop Now</nuxt-link>
			</div>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { bannerSlider } from '~/utils/data/carousel';
export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			bannerSlider: bannerSlider
		};
	}
};
</script>