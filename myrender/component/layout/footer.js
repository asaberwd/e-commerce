import {Link} from './../../routes'


export default ()=>{

    return(
        <div>
		<footer id="colorlib-footer" role="contentinfo">
			<div className="container">
				<div className="row row-pb-md">

					<div className="col-md-4 colorlib-widget">
						<h4>About Store</h4>
						<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci 
							architecto culpa amet.</p>
							<ul className="colorlib-social-icons">
								<li><a href="#"><i className="icon-twitter"></i></a></li>
								<li><a href="#"><i className="icon-facebook"></i></a></li>
								<li><a href="#"><i className="icon-linkedin"></i></a></li>
								<li><a href="#"><i className="icon-dribbble"></i></a></li>
							</ul>
					</div>

					<div className="col-md-2 colorlib-widget">
						<h4>Customer Care</h4>
					
							<ul className="colorlib-footer-links">
								<li><a href="#">Contact</a></li>
								<li><a href="#">Returns/Exchange</a></li>
								<li><a href="#">Gift Voucher</a></li>
								<li><Link route="wishlist.html"><a>Wishlist</a></Link></li>
								<li><a href="#">Customer Services</a></li>
								<li><a href="#">Site maps</a></li>
							</ul>
						
					</div>

					<div className="col-md-2 colorlib-widget">
						<h4>Information</h4>
						
							<ul className="colorlib-footer-links">
								<li><Link route="about.html"><a >About us</a></Link></li>
								<li><a href="#">Delivery Information</a></li>
								<li><Link route="privacy.html"><a>Privacy Policy</a></Link></li>
								<li><a href="#">Support</a></li>
								<li><a href="#">Order Tracking</a></li>
							</ul>
						
					</div>


					<div className="col-md-4">
						<h4>Contact Information</h4>
						<ul className="colorlib-footer-links">
							<li>291 South 21th Street, <br/> Suite 721 New York NY 10016</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
							<li><a href="#">yoursite.com</a></li>
						</ul>
					</div>

				</div>
			</div>


		</footer>

		<div className="gototop js-top">
			<a href="#" className="js-gotop"><i className="icon-arrow-up2"></i></a>
	    </div>


	<script src="./../static/js/jquery.min.js"></script>
	<script src="./../static/js/jquery.easing.1.3.js"></script>
	<script src="./../static/js/bootstrap.min.js"></script>
	<script src="./../static/js/jquery.waypoints.min.js"></script>
	<script src="./../static/js/jquery.flexslider-min.js"></script>
	<script src="./../static/js/owl.carousel.min.js"></script>
	<script src="./../static/js/jquery.magnific-popup.min.js"></script>
	<script src="./../static/js/magnific-popup-options.js"></script>
	<script src="./../static/js/bootstrap-datepicker.js"></script>
	<script src="./../static/js/jquery.stellar.min.js"></script>
	<script src="./../static/js/main.js"></script>



</div>
    )
}