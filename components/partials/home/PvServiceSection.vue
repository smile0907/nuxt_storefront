<template>
    <PvCarousel class="info-boxes-slider" :options="serviceSlider">
        <div class="info-box info-box-icon-left col-lg-4 swiper-slide">
            <i class="icon-shipping font-35 pt-1"></i>

            <div class="info-box-content pt-1">
                <h4>FREE SHIPPING &amp; RETURN</h4>
                <p class="text-body">Free shipping on all orders over $99</p>
            </div>
        </div>

        <div class="info-box info-box-icon-left col-lg-4 swiper-slide">
            <i class="icon-money pt-1"></i>

            <div class="info-box-content">
                <h4>MONEY BACK GUARANTEE</h4>
                <p class="text-body">100% money back guarantee</p>
            </div>
        </div>

        <div class="info-box info-box-icon-left col-lg-4 swiper-slide">
            <i class="icon-support pt-1"></i>

            <div class="info-box-content">
                <h4>ONLINE SUPPORT 24/7</h4>
                <p class="text-body">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </PvCarousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { serviceSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function() {
		return {
			serviceSlider: serviceSlider
		};
	}
};
</script>