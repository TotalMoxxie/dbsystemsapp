<script>
	// Import UIKit styles
	import "uikit/dist/css/uikit.min.css";
	// Import UIKit JavaScript
	import UIkit from "uikit";
	import Icons from "uikit/dist/js/uikit-icons";
  </script>
<div class="uk-container">
	<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
		<nav class="uk-navbar-container">
			<div class="uk-container">
				<div uk-navbar>
					<div class="uk-navbar-left uk-margin-left">
						<ul class="uk-navbar-nav">
							<li><a href='/'>Home</a></li>
							<li><a href="/book/flight">Book a Flight</a></li>
							<li><a href="/book/myflights">My Flight</a></li>
							<li><a href="/devplan/trackflights">In Development</a></li>
							<li><a href="/about/intro">About</a></li>
						</ul>
					</div>
					<div class="uk-navbar-right uk-margin-right">
						<ul class="uk-navbar-nav">
							<li><a href='/auth/login'>Login</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</div>
	<div><slot /></div>
</div>

