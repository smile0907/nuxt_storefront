<template>
	<div
		class="category-banner-custom banner banner-big-sale"
		style="background: #35393C no-repeat center/cover"
		v-lazy:background-image="'./images/home/banners/banner-top.jpg'"
	>
		<div class="container position-relative">
			<div class="banner-content row align-items-center px-5">
				<div class="col-md-9">
					<h2 class="text-white text-uppercase mb-md-0 text-center text-sm-left">
						<b class="d-inline-block mr-3 mb-1">Big Sale</b>
						All new fashion brands items up to 70% off
						<small class="text-transform-none align-middle">Online Purchases Only</small>
					</h2>
				</div>
				<div class="col-md-3 text-center text-md-right">
					<a
						class="btn btn-light bg-white btn-lg ls-10"
						href="javascript:;"
					>View Sale</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>