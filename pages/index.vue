<template>
	<main class="main">
		<div class="container container-not-boxed">
			<pv-service-section></pv-service-section>

			<pv-intro-section></pv-intro-section>

			<pv-special-collection
				:best-products="bestProducts.slice(0,3)"
				:newProducts="newProducts.slice(0,3)"
				:featuredProducts="featuredProducts.slice(0,3)"
				v-if="bestProducts && featuredProducts && newProducts"
			></pv-special-collection>

			<pv-banner-section></pv-banner-section>
		</div>

		<div class="container">
			<pv-products-collection :products="products"></pv-products-collection>
		</div>

		<div class="container container-not-boxed mt-2">
			<pv-sale-section></pv-sale-section>

			<pv-feature-section></pv-feature-section>

			<hr class="mt-4 mb-0" />
		</div>
	</main>
</template>

<script>
import swell from 'swell-js';
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvSaleSection from '~/components/partials/home/PvSaleSection';
import PvSpecialCollection from '~/components/partials/home/PvSpecialCollection';
import PvFeatureSection from '~/components/partials/home/PvFeatureSection';
import PvProductsCollection from '~/components/partials/home/PvProductsCollection';

import {
	getProductsByAttri,
	getTopSellingProducts,
	getTopRatedProducts
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl, storeID, publicKey } from '~/api';

export default {
	components: {
		PvIntroSection,
		PvServiceSection,
		PvBannerSection,
		PvFeatureSection,
		PvSaleSection,
		PvSpecialCollection,
		PvProductsCollection
	},
	data: function() {
		return {
			products: [],
			posts: [],
			featuredProducts: [],
			newProducts: [],
			bestProducts: [],
			topRatedProducts: []
		};
	},
	computed: {
		lightBoxMedia: function() {
			let pictures = [];
			for (let i = 0; i < this.posts.length; i++) {
				pictures.push(this.posts[i].picture[0]);
			}
			return pictures.reduce((acc, cur) => {
				return [
					...acc,
					{
						src: `${baseUrl}${cur.url}`,
						thumb: `${baseUrl}${cur.url}`
					}
				];
			}, []);
		}
	},
	mounted: async function() {
		// Initialize the client first
		swell.init(storeID, publicKey, {
			useCamelCase: true,
		});

		const productsList = await swell.products.list({limit: 3, page: 1});
		const { results } = productsList;
		// this.products = results;
		// for (const ele of results[0]) {
			console.log(results[0].images);
		// }

		// Api.get(`${baseUrl}/demo5`)
		// 	.then(response => {
		// 		this.products = response.data.products;
		// 		this.posts = response.data.posts;
		// 		this.featuredProducts = getProductsByAttri(
		// 			response.data.products
		// 		);
		// 		this.newProducts = getProductsByAttri(
		// 			response.data.products,
		// 			'is_new'
		// 		);
		// 		this.bestProducts = getTopSellingProducts(
		// 			response.data.products
		// 		);
		// 		this.topRatedProducts = getTopRatedProducts(
		// 			response.data.products
		// 		);
		// 	})
		// 	.catch(error => ({ error: JSON.stringify(error) }));

		this.timerId = setTimeout(() => {
			if (
				this.$route.path === '/' &&
				getCookie('newsletter') !== 'false'
			) {
				this.$modal.show(
					() =>
						import('~/components/features/modal/PvNewsletterModal'),
					{},
					{
						width: '740',
						height: 'auto',
						adaptive: true,
						class: 'newsletter-modal'
					}
				);
			}
		}, 10000);
	},
	destroyed: function() {
		clearTimeout(this.timerId);
	},
	methods: {
		toggleSidebar: function() {
			let body = document.querySelector('body');
			if (body.classList.contains('sidebar-opened')) {
				body.classList.remove('sidebar-opened');
			} else {
				body.classList.add('sidebar-opened');
			}
		}
	}
};
</script>