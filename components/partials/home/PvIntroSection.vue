<template>
	<pv-carousel
		class="home-slider swiper-carousel outer-container w-auto show-nav-hover nav-large nav-outer mb-2 slide-animate"
		:options="IntroSlider"
		v-animate
	>
		<div class="home-slide home-slide1 banner banner-md-vw bg-white swiper-slide">
			<img
				class="slide-bg"
				:src="'./images/home/slider/slide-1.jpg'"
				alt="slider image"
				width="1155"
				height="500"
				image-ratio="43.29"
				style="background: #fff"
			/>
			<div
				class="banner-layer banner-layer-middle appear-animate"
				data-animation-name="fadeIn"
			>
				<h4 class="m-b-3">Find the Boundaries. Push Through!</h4>
				<h2 class="font-script mb-0">Jeans Sale</h2>
				<h3 class="upto-text">
					<em>
						up
						<br />to
					</em>80% OFF
				</h3>
				<h5 class="d-inline-block mb-0 text-uppercase ls-n-20">
					Starting At
					<b class="coupon-sale-text text-white bg-secondary">
						$<em>199</em>99
					</b>
				</h5>
				<nuxt-link
					to="/shop"
					class="btn btn-dark btn-lg ls-10"
				>Shop Now!</nuxt-link>
			</div>
		</div>

		<div class="home-slide home-slide2 banner banner-md-vw bg-white swiper-slide">
			<img
				class="slide-bg"
				:src="'./images/home/slider/slide-2.jpg'"
				alt="slider image"
				width="1155"
				height="500"
				image-ratio="43.29"
				style="background: #c5c5c7"
			/>
			<div
				class="banner-layer banner-layer-middle appear-animate"
				data-animation-name="fadeIn"
			>
				<h2 class="ls-n-25 mb-0">Women's Business Fashion</h2>
				<h3 class="upto-text">
					<em>
						up
						<br />to
					</em>60% OFF
				</h3>
				<h5 class="text-uppercase d-inline-block mb-0 align-top ls-n-20">
					Starting at
					<span class="text-secondary ml-2 mr-5 pr-sm-5">
						$<em class="ls-n-20">29</em>99
					</span>
				</h5>
				<nuxt-link
					to="/shop"
					class="btn btn-dark btn-outline ls-10 btn-xl mt-0"
				>Shop Now!</nuxt-link>
			</div>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { IntroSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			IntroSlider: IntroSlider
		};
	},
	mounted: function() {
		document
			.querySelector('.home-slider .swiper-prev i')
			.classList.add('icon-left-open-big');
		document
			.querySelector('.home-slider .swiper-next i')
			.classList.add('icon-right-open-big');
	}
};
</script>