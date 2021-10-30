<template>
	<main class="main skeleton-body">
		<div class="container container-not-boxed">
			<pv-service-section></pv-service-section>

			<div
				class="outer-container category-banner-custom banner banner-big-sale"
				style="background: #35393C no-repeat center/cover"
				v-lazy:background-image="'./images/home/banners/banner-top.jpg'"
			>
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

		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">Home</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Shop</li>
				</ol>
			</div>
		</nav>

		<div class="container">
			<div class="row">
				<div class="col-lg-9 main-content">
					<pv-product-list-one
						:category-list="categoryList"
						:itemsPerRow="3"
					></pv-product-list-one>
				</div>

				<div
					class="sidebar-overlay"
					@click="hideSidebar"
				></div>
				<aside
					class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar"
					sticky-container
				>
					<div
						v-sticky="isSticky"
						sticky-offset="{top: 70}"
					>
						<pv-sidebar-filter-one
							:category-list="categoryList"
							:featured-products="featuredProducts"
							v-if="featuredProducts.length > 0"
						></pv-sidebar-filter-one>

						<div
							class="sidebar-content skeleton-body"
							v-if="featuredProducts.length === 0"
						>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
							<aside class="widget"></aside>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import Sticky from 'vue-sticky-directive';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListOne from '~/components/partials/shop/product-list/PvProductListOne';
import Api, { baseUrl, currentDemo } from '~/api';

export default {
	directives: {
		Sticky
	},
	components: {
		PvServiceSection,
		PvSidebarFilterOne,
		PvProductListOne
	},
	data: function() {
		return {
			categoryList: [],
			featuredProducts: [],
			isSticky: false
		};
	},
	mounted: function() {
		this.getCategoryLists();
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		getCategoryLists: function() {
			Api.get(`${baseUrl}/shop/sidebar-list`, {
				params: { demo: currentDemo }
			})
				.then(response => {
					this.categoryList = response.data.sidebarList;
					this.featuredProducts = response.data.featuredProducts;
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		},
		hideSidebar: function() {
			document.querySelector('body').classList.remove('sidebar-opened');
		}
	}
};
</script>