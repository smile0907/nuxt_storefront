<template>
	<footer class="footer">
		<div class="footer-middle">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-4 mb-2 mb-md-0">
						<div class="widget widget-contact-info">
							<h4 class="widget-title">Contact Info</h4>
							<ul class="contact-info">
								<li>
									<span class="contact-info-label">Address:</span>1234 Street Name, City, England
								</li>
								<li>
									<span class="contact-info-label">Phone:</span>
									<a href="tel:">(123) 456-7890</a>
								</li>
								<li>
									<span class="contact-info-label">Email:</span>
									<a href="mailto:mail@example.com">mail@example.com</a>
								</li>
								<li>
									<span class="contact-info-label">Working Days/Hours:</span>
									Mon - Sun / 9:00AM - 8:00PM
								</li>
							</ul>
							<div class="social-icons">
								<a
									href="javascript:;"
									class="social-icon social-facebook icon-facebook"
									
									title="Facebook"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-twitter icon-twitter"
									
									title="Twitter"
								></a>
								<a
									href="javascript:;"
									class="social-icon social-instagram icon-instagram"
									
									title="Instagram"
								></a>
							</div>
						</div>
					</div>

					<div class="col-lg-9 col-md-8">
						<div class="widget widget-newsletter">
							<h4 class="widget-title m-b-1 pb-2">Subscribe newsletter</h4>
							<div class="row">
								<div class="col-lg-6">
									<p class="pt-2 mb-lg-0">
										Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.
									</p>
								</div>

								<div class="col-lg-6">
									<form
										action="#"
										class="d-flex mb-0 w-100"
									>
										<input
											type="email"
											class="form-control mb-0"
											placeholder="Email Address"
											required
										/>

										<input
											type="submit"
											class="btn btn-primary shadow-none ls-10"
											value="Subscribe"
										/>
									</form>
								</div>
							</div>
						</div>

						<div class="row pt-3">
							<div class="col-sm-6 col-lg-5">
								<div class="widget">
									<h4 class="widget-title">Customer Service</h4>

									<div class="links link-parts row mb-0">
										<ul class="link-part col-sm-6 mb-0">
											<li>
												<nuxt-link to="/pages/about-us">About Us</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/contact-us">Contact Us</nuxt-link>
											</li>
											<li>
												<nuxt-link to="/pages/account">My Account</nuxt-link>
											</li>
										</ul>
										<ul class="link-part col-sm-6">
											<li>
												<a href="javascript:;">Orders History</a>
											</li>
											<li>
												<a href="javascript:;">Advanced Search</a>
											</li>
											<li>
												<nuxt-link to="/pages/login">Login</nuxt-link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-sm-6 col-lg-7">
								<div class="widget">
									<h4 class="widget-title">About Us</h4>

									<div class="links link-parts row mb-0">
										<ul class="link-part col-xl-6 mb-0">
											<li>
												<a href="javascript:;">Super Fast Vue Theme</a>
											</li>
											<li>
												<a href="javascript:;">1st Fully working Ajax Theme</a>
											</li>
											<li>
												<a href="javascript:;">33 Unique Shop Layouts</a>
											</li>
										</ul>
										<ul class="link-part col-xl-6">
											<li>
												<a href="javascript:;">Powerful Admin Panel</a>
											</li>
											<li>
												<a href="javascript:;">Mobile &amp; Retina Optimized</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container d-flex justify-content-between align-items-center flex-wrap">
				<p class="footer-copyright py-3 pr-4 mb-0 ls-n-10">© Porto eCommerce. 2021. All Rights Reserved</p>

				<img
					:src="'./images/home/payments.png'"
					alt="payment methods"
					class="footer-payments py-3"
				/>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>