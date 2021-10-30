<template>
	<div
		class="banner banner-big-sale mb-5 appear-animate"
		v-animate
		data-animation-delay="200"
		data-animation-name="fadeInUpShorter"
		style="background: #2A95CB center/cover"
		data-parallax="{'speed': 1.8, 'enableOnMobile': true}"
		v-lazy:background-image="'./images/home/banners/banner-4.jpg'"
		v-parallax
	>
		<div class="banner-content row align-items-center py-3 mx-0">
			<div class="col-xl-9 col-sm-8 pt-3">
				<h2 class="text-white text-uppercase mb-md-0 px-3 text-center text-sm-left">
					<b class="d-inline-block mr-3 mb-1">Big Sale</b>
					All new fashion brands items up to 70% off
					<small class="text-transform-none align-middle">Online Purchases Only</small>
				</h2>
			</div>
			<div class="col-xl-3 col-sm-4 py-3 text-center text-sm-right">
				<nuxt-link
					class="btn btn-light btn-lg mr-3 ls-10"
					to="/shop"
				>View Sale</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>