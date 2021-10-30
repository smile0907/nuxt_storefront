<template>
    <div class="container">
        <div class="feature-boxes-container row mt-6 mb-1">
            <div
                class="col-md-4 appear-animate"
                data-animation-name="fadeInRightShorter"
                data-animation-delay="200"
                v-animate
            >
                <div class="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                    <i class="sicon-earphones-alt"></i>

                    <div class="feature-box-content">
                        <h3 class="mb-0 pb-1">Customer Support</h3>
                        <h5 class="m-b-3">Need Assistance?</h5>

                        <p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p>
                    </div>
                </div>
            </div>

            <div
                class="col-md-4 appear-animate"
                data-animation-name="fadeInRightShorter"
                data-animation-delay="400"
                v-animate
            >
                <div class="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                    <i class="sicon-credit-card"></i>

                    <div class="feature-box-content">
                        <h3 class="mb-0 pb-1">Secured Payment</h3>
                        <h5 class="m-b-3">Safe & Fast</h5>

                        <p>With Porto you can customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!</p>
                    </div>
                </div>
            </div>

            <div
                class="col-md-4 appear-animate"
                data-animation-name="fadeInRightShorter"
                data-animation-delay="600"
                v-animate
            >
                <div class="feature-box px-sm-5 px-md-4 feature-box-simple text-center">
                    <i class="icon-action-undo"></i>

                    <div class="feature-box-content">
                        <h3 class="mb-0 pb-1">Returns</h3>
                        <h5 class="m-b-3">Easy & Free</h5>

                        <p>Porto has very powerful admin features to help customer to build their own shop in minutes without any special skills in web development.</p>
                    </div>
                </div>
            </div>
        </div>

        <hr class="mt-0 m-b-5" />

        <pv-brand-section></pv-brand-section>
    </div>
</template>

<script>
import PvBrandSection from '~/components/partials/home/PvBrandSection';

export default {
	components: {
		PvBrandSection
	}
};
</script>