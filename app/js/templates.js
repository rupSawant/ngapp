define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/cart.html',
    "<div>hi</div>"
  );


  $templateCache.put('partials/login.html',
    "\n" +
    "<div data-overlay class=\"hide\">&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Login-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Shipping-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=\"container-fluid nopadding visible-xs\">\n" +
    "\t<div class=\"col-xs-12 col-sm-6 socialMediaContainer\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-xs-6 nopadding socialMedia\">\n" +
    "\t\t\t\t<a class=\"signup-fb\" href=\"#\"><small><img src=\"images/facebook_alt.png\" alt=\"\" title=\"\"></small><span>Log In with Facebook</span></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-6 nopadding socialMedia\">\n" +
    "\t\t\t\t<a class=\"signup-g\" href=\"#\"><small><img src=\"images/googlw_Plus.png\" alt=\"\" title=\"\"></small><span>Log In with Google</span></a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 guest\">\n" +
    "\t\t\t\t<h4>CONTINUE AS A GUEST</h4>\n" +
    "\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\">\n" +
    "                    <button class=\"btn guestBtn\" type=\"submit\" ng-click=\"changeGuest()\">CONTINUE AS GUEST</button>\n" +
    "                </div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container m-padding\">\n" +
    "\t\t<!--// login Container Start -->\n" +
    "\t\t<div class=\"col-xs-12 loginContainer\">\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 signinForm\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-10\">\n" +
    "\t\t\t\t\t<div class=\"mobile-seperator visible-xs\">\n" +
    "\t\t\t\t\t\t<span class=\"Mseperator\">OR</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<form>\n" +
    "\t\t\t\t\t\t<h4>HAVE AN ACCOUNT? SIGN IN</h4>\n" +
    "\t\t\t\t\t\t<div class=\"existingUser\" ng-hide=\"guestUser\">\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group error\">\n" +
    "\t\t\t\t\t\t\t\t<label>Email</label>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n" +
    "\t\t\t\t\t\t\t\t<span>Email is either wrong or not registered with us.</span>\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t<label>Password</label>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t<a role=\"ForgotPassword\" href=\"#\">Forgot password?</a>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"container-fluid ForgotPasswordContainer hide\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"FPcontainer\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<span role=\"close\"><a href=\"#\"><img src=\"images/delete-icon.png\" alt=\"\" title=\"\"></a></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t<h3>FORGOT PASSWORD?</h3>\n" +
    "\t\t\t\t\t\t\t\t\t\t<p>Enter your email below and we’ll send you a new password by email.</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t<form>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn sendBtn\" value=\"SEND PASSWORD\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\"><input class=\"btn newBtn button-fixed\" type=\"submit\" value=\"LOGIN\"></div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"guestUser col-xs-12 nopadding\" ng-show=\"guestUser\">\n" +
    "\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t<label>Email</label>\n" +
    "\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n" +
    "\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\">\n" +
    "                                <button class=\"btn guestBtn\" type=\"submit\" ng-click=\"changeGuest()\">CONTINUE AS GUEST</button>\n" +
    "\n" +
    "                                <!--<input class=\"btn newBtn\" type=\"submit\" value=\"CONTINUE AS GUEST\">-->\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<p>Have an account? <span><a class=\"rougeColor\" href=\"#\">Login Here</a></span></p>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</form>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<span class=\"seperator hidden-xs\">OR</span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 socialMediaContainer hidden-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-10 pull-right\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding socialMedia\">\n" +
    "\t\t\t\t\t\t<a class=\"signup-fb\" href=\"#\"><small><img src=\"images/facebook_alt.png\" alt=\"\" title=\"\"></small><span>Log In with Facebook</span></a>\n" +
    "\t\t\t\t\t\t<a class=\"signup-g\" href=\"#\"><small><img src=\"images/googlw_Plus.png\" alt=\"\" title=\"\"></small><span>Log In with Google</span></a>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding guest\">\n" +
    "\t\t\t\t\t\t\t<h4>CHECKOUT AS A GUEST</h4>\n" +
    "\t\t\t\t\t\t\t<p>New to craftsvilla? Use our quick and secure method.</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"BtnContainer col-xs-12 nopadding\">\n" +
    "                                <button class=\"btn guestBtn\" type=\"submit\" ng-click=\"changeGuest()\">CONTINUE AS GUEST</button>\n" +
    "                                <!--<input class=\"btn guestBtn\" type=\"submit\" value=\"CONTINUE AS GUEST\"></div>-->\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Container End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid hidden-xs\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Footer -->\n" +
    "<!--// Jquery -->\n" +
    "<!--<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>-->\n" +
    "<!--<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>-->\n"
  );


  $templateCache.put('partials/payments.html',
    " <!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta charset=\"UTF-8\">\n" +
    "<title>Payments</title>\n" +
    "<meta name=\"description\" content=\"\">\n" +
    "<meta name=\"keywords\" content=\"\">\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n" +
    "<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>\n" +
    "<link href=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\n" +
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap.vertical-tabs.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" data-complete alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"row paymentContainer\">\n" +
    "\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t<h4 role=\"headding\">CHOOSE PAYMENT METHOD</h4>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 youpay\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding visible-xs\">\n" +
    "\t\t\t\t\t<div role=\"items\" class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>You Pay <span><a href=\"#\">Hide Details</a></span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\"><span class=\"total-amount\">&#8377; 3,240</span></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 pull-right item-details\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t<div role=\"items\" class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>2 ITEMS <span><a href=\"#\">View Details</a></span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\"><span class=\"total-amount\">&#8377; 3,240</span></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"media\">\n" +
    "\t\t\t\t\t\t\t<div class=\"media-left\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\"http://dummyimage.com/100x100/dedede/0011ff\" alt=\"\" title=\"\">\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Latest Designer Black And White Long Sleeve Straight Suit</h4>\n" +
    "\t\t\t\t\t\t\t\t<p>Quantity: <span>1</span></p>\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"items-price\">&#8377; 1,800</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"media\">\n" +
    "\t\t\t\t\t\t\t<div class=\"media-left\">\n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t\t\t<img class=\"media-object\" src=\"http://dummyimage.com/100x100/dedede/0011ff\" alt=\"\" title=\"\">\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Latest Designer Black And White Long Sleeve Straight Suit</h4>\n" +
    "\t\t\t\t\t\t\t\t<p>Quantity: <span>1</span></p>\n" +
    "\t\t\t\t\t\t\t\t<h4 class=\"items-price\">&#8377; 1,800</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// Shipping Details -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 items-list\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding shipping-details\">\n" +
    "\t\t\t\t\t\t\t<h5>SHIPPING DETAILS</h5>\n" +
    "\t\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t\t<span>Shruti Kartikey</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</span>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"normal\">+91 7738233261</span>\n" +
    "\t\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<!--// Shipping End -->\n" +
    "\t\t\t\t\t<!--// Order Summary -->\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 order-summary\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding border-bottom\">\n" +
    "\t\t\t\t\t\t\t<h5>ORDER SUMMARY</h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding border-bottom order-summary-details\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Sub Total</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>&#8377; 3,600</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Coupon Applied (CRAFTSLOVE)</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>- &#8377; 360</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-8 nopadding text-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Shipping</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-4 nopadding text-right\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>&#8377; 0</p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h5>Total Payable <span class=\"pull-right\">&#8377; 3,240</span></h5>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// Desktop -->\n" +
    "\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-8 new-payment-method hidden-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding box-border\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 col-sm-3 nopadding payment-list\"> <!-- required for floating -->\n" +
    "\t\t\t\t\t    <!-- Nav tabs -->\n" +
    "\t\t\t\t\t\t<ul class=\"nav nav-tabs tabs-left\">\n" +
    "\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t<a ng-href=\"#cashondelivery\" data-toggle=\"tab\">Cash on Delivery</a>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery hide\">\n" +
    "\t\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#CreditCard\" data-toggle=\"tab\">Credit Card</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#DebitCard\" data-toggle=\"tab\">Debit Card</a></li>\n" +
    "\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#NetBanking\" data-toggle=\"tab\">Net Banking</a></li>\n" +
    "\t\t\t\t\t\t\t<li><a href=\"#PayUmoney\" data-toggle=\"tab\">Pay U Money</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t<!-- Tab panes -->\n" +
    "\t\t\t\t\t<div class=\"tab-content col-xs-9 col-sm-9\">\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"cashondelivery\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\">\n" +
    "\t\t\t\t\t\t\t\t<h3>Pay Using Cash on Delivery</h3>\n" +
    "\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\">\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"CreditCard\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 creditcard\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Credit Card Number\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"MM\" maxlength=\"2\" class=\"form-control pull-left\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"YY\" maxlength=\"4\" class=\"form-control pull-right\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input maxlength=\"3\" type=\"text\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"#\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"DebitCard\">Debit Card</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"NetBanking\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"icici\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"icici\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"axis\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"axis\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"sbi\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"sbi\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"city\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"city\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"idbi\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"idbi\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Volvo</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"btn btn-newStyle bg-green\" href=\"#\">PAY <span><i>&#x20B9;</i>3240</span> SECURELY</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"tab-pane\" id=\"PayUmoney\">Pay U Money</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// Mobile -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 new-payment-method visible-xs\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<h4 role=\"headding\">CHOOSE PAYMENT METHOD</h4>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding payment-list\"> <!-- required for floating -->\n" +
    "\t\t\t\t\t\t    <!-- Nav tabs -->\n" +
    "\t\t\t\t\t\t\t<ul data-payment-mobile class=\"nav nav-tabs tabs-left\">\n" +
    "\t\t\t\t\t\t\t\t<li class=\"active\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"m-tab\" href=\"#\">Cash on Delivery</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cashondelivery\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<p>Please keep a total of Rs 3240 to pay on delivery </p>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Credit Card</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 creditcard\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Credit Card Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Credit Card Number\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label>Name on Card</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Name on Card\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 valid-upto\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Valid Upto</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"MM\" maxlength=\"2\" class=\"form-control pull-left\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<span role=\"division\">/</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"YY\" maxlength=\"4\" class=\"form-control pull-right\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 cvv-code\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<label>CVV Code</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<input maxlength=\"3\" type=\"text\" class=\"form-control\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Debit Card</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"icici1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"icici1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"axis1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"axis1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sbi1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"sbi1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"city1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"idbi1\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idbi1\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#\">Net Banking</a>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 NetBanking\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<ul role=\"nasted-list\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"icici2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"icici2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"axis2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"axis2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"sbi2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"sbi2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"hdfc2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"hdfc2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"city2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"idbi2\" type=\"radio\" name=\"gender\" value=\"male\" checked>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idbi2\"><span></span><span><img src=\"images/Bitmap.png\" title=\"\" alt=\"\"></span></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left or\">OR</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-style\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"volvo\">Volvo</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"saab\">Saab</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"mercedes\">Mercedes</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"audi\">Audi</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li><a href=\"#\">Pay U Money</a></li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-xs-12 nopadding visible-xs fixed-button\">\n" +
    "\t\t\t\t<input type=\"button\" value=\"PLACE ORDER\" class=\"btn btn-newStyle bg-green\">\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding spacer\">&nbsp;</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding payments-facilities text-center\">\n" +
    "\t\t\t<div class=\"row visible-xs\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 nopadding buyerProtection visible-xs\">\n" +
    "\t\t\t\t\t\t<a href=\"#\">\n" +
    "\t\t\t\t\t\t\t<span><img src=\"images/bitmap.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t\t\t<strong>100%</strong> Buyer Protection\n" +
    "\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li><img src=\"images/verified-by-visa.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t\t<li><img src=\"images/visa-mastercard.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t\t<li><img src=\"images/footer.png\" alt=\"\" title=\"\"></li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid hidden-xs\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding hidden-xs\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Footer -->\n" +
    "<!--// Jquery -->\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\n" +
    "<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"js/common.js\"></script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "</html>\n"
  );


  $templateCache.put('partials/product.html',
    "<div class=\"row-fluid\"><div class=\"container product_container\" itemscope=\"\" itemtype=\"http://schema.org/Product\"><div class=\"col-xs-12 col-sm-12 col-md-12 buyer-section hidden-sm hidden-xs\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "    <img class=\"buyer-icon\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/img/sheild.png\"><span class=\"buyer-text\"><b>100%</b> <span class=\"buyer-regular-text regular-text\">Buyer Protection</span> | <span class=\"secure-text regular-text\">Secure Payments &amp; Easy Returns | <span class=\"learn-text regular-text\">Learn More</span></span></span>\n" +
    "</div>\n" +
    "    <!-- Product page breadcrumbs starts here -->\n" +
    "\n" +
    "    <div class=\"col-xs-12 nopadding product_breadcrumbs\">\n" +
    "\n" +
    "        <p class=\"pull-left breadcrumbs\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n" +
    "\n" +
    "\t\t<span itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n" +
    "      \t\t<a href=\"http://www.craftsvilla.com/\" itemprop=\"item\">  <span itemprop=\"name\"> Home </span></a>\n" +
    "      \t\t <meta itemprop=\"position\" content=\"1\">\n" +
    "      \t</span> &gt;\n" +
    "\t\t<span itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/ListItem\">\n" +
    "\t\t\t<a href=\"http://www.craftsvilla.com/sarees-sari.html\" itemprop=\"item\">\n" +
    "                <span itemprop=\"name\"> Sarees </span>\n" +
    "            </a>\n" +
    "\t\t\t<meta itemprop=\"position\" content=\"2\">\n" +
    "\t\t</span> &gt;\n" +
    "            <span class=\"black\">{{product.name_suggest}}</span>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- Product page breadcrumbs ends here-->\n" +
    "\n" +
    "    <!-- Wish it section starts here -->\n" +
    "\n" +
    "    <div class=\"col-xs-12 error-msg text-center\" id=\"productpageerrormsg\"></div>\n" +
    "    <div id=\"wishthis\" style=\"display:none;\">\n" +
    "        <div id=\"welcome_img\" class=\"popuphead\">\n" +
    "            <span class=\"popuoheading\">Add to Wishlist</span>\n" +
    "        </div>\n" +
    "        <div id=\"bg_welcome\" class=\"shortpop\">\n" +
    "            <ul class=\"followshop\">\n" +
    "                <li>\n" +
    "                    <h2 class=\"greyheading\">Already Member</h2>\n" +
    "                    <a href=\"#login\" class=\"spriteimg bluesmallbtn fancybox\">Login</a></li>\n" +
    "                <li class=\"nobor\">\n" +
    "                    <h2 class=\"greyheading\">New Customer </h2>\n" +
    "                    <a class=\"spriteimg bluesmallbtn fancybox\" href=\"#signUpForm\">Sign Up</a></li>\n" +
    "            </ul>\n" +
    "            <p class=\"clr\"></p>\n" +
    "            <p align=\"center\" class=\"clr margintoptwenty\"><span class=\"required\">Note:</span>To Wish this product You need to login or register.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <input type=\"hidden\" id=\"cvpagetype\" value=\"cvproductpage\">\n" +
    "    <input type=\"hidden\" id=\"prodid\" value=\"4212240\">\n" +
    "    <input type=\"hidden\" id=\"categoryname\" value=\"Sarees\">\n" +
    "    <input type=\"hidden\" id=\"categoryid\" value=\"74\">\n" +
    "    <input type=\"hidden\" id=\"prodprice\" value=\"5999.0000\">\n" +
    "    <input type=\"hidden\" id=\"vendpostcode\" value=\"395010\">\n" +
    "\n" +
    "    <!-- Wish it section ends here -->\n" +
    "\n" +
    "    <!-- Product description section starts here -->\n" +
    "\n" +
    "    <!-- Image galler section starte here -->\n" +
    "\n" +
    "    <div class=\"col-xs-12 nopadding\">\n" +
    "\n" +
    "        <!-- Big image section -->\n" +
    "        <div class=\"col-xs-12 col-sm-6 big_image_container\" id=\"messages_product_view\">\n" +
    "            <section class=\"product-slider pull-left col-md-12 nopadding\">\n" +
    "                <div class=\"big-image\">\n" +
    "                    <div id=\"big1\" class=\"big-zoom\" style=\"position: relative; overflow: hidden;\" ng-repeat=\"img in product.images\" ng-show=\"activeImageIndex === $index\">\n" +
    "                        <img itemprop=\"image\" src=\"http://img1.craftsvilla.com/thumb/500x500{{img}}\" alt=\"\" data-orginal=\"http://img1.craftsvilla.com/orig{{img}}\"><img src=\"http://img1.craftsvilla.com/orig{{img}}\" class=\"zoomImg\" style=\"position: absolute; top: -94.5949px; left: -96.0506px; opacity: 0; width: 651px; height: 924px; border: none; max-width: none; max-height: none;\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "        </div>\n" +
    "        <!-- Big image section ends here -->\n" +
    "\n" +
    "        <!-- Thumbnail image section starts here -->\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-1 thumbnail_container\">\n" +
    "            <ul class=\"thumbnails thumbs\">\n" +
    "                <li class=\"wishit_new wishthisproduct\" id=\"wishthisproduct\" onclick=\"dataLayer.push({'type':'addedToWishlist','productId':'4212240','category':'Sarees','subCategory':'Designer Sarees','source':'detailedView'});MSDtrack({'event':'addToWishlist','sourceProdID':'4212240','sourceCatgID':'Sarees','prodPrice':''});\">\n" +
    "                    <i class=\"icon-wish\"></i>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"img in product.images\" ng-click=\"showPdpImage($index)\"><a><img src=\"http://img1.craftsvilla.com/thumb/166x166{{img}}\"></a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Thumbnail image section ends here -->\n" +
    "\n" +
    "        <!-- Product description starts here -->\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-5 nopadding\">\n" +
    "            <div class=\"product_description col-xs-12\">\n" +
    "                <div class=\"social_media_icons\">\n" +
    "                    <li>\n" +
    "                        <a href=\"http://www.facebook.com/craftsvilla\" target=\"_blank\">\n" +
    "                            <svg class=\"facebook-svg\" width=\"10px\" height=\"20px\" viewBox=\"0 0 10 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                                <title>facebook</title>\n" +
    "                                <desc>Created with sketchtool.</desc>\n" +
    "                                <defs></defs>\n" +
    "                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                                    <g id=\"product_Desktop\" sketch:type=\"MSArtboardGroup\" transform=\"translate(-1162.000000, -194.000000)\" fill=\"#D7D7D7\">\n" +
    "                                        <g id=\"social-media\" sketch:type=\"MSLayerGroup\" transform=\"translate(1150.000000, 187.000000)\">\n" +
    "                                            <path d=\"M18.4957574,26.9628099 L14.4755447,26.9628099 L14.4755447,17.457478 L12.4666667,17.457478 L12.4666667,14.1822595 L14.4755447,14.1822595 L14.4755447,12.2159287 C14.4755447,9.54416616 15.6092619,7.95454545 18.8323105,7.95454545 L21.5149089,7.95454545 L21.5149089,11.2309637 L19.8382849,11.2309637 C18.5835806,11.2309637 18.5006706,11.6886545 18.5006706,12.5428506 L18.4951433,14.1822595 L21.5333333,14.1822595 L21.1777417,17.457478 L18.4951433,17.457478 L18.4951433,26.9628099 L18.4957574,26.9628099 Z\" id=\"facebook-icon\" sketch:type=\"MSShapeGroup\"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </svg>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"https://twitter.com/share\" data-text=\"Royalvilla(tm) New Black Embroidered And Lace Work Saree\" onclick=\"MSDtrack({'event':'socialShare','sourceProdID':'4212240','sourceCatgID':'Sarees','socialMedium':'twitter'});\" target=\"_blank\">\n" +
    "                            <svg class=\"twitter-svg\" width=\"16px\" height=\"14px\" viewBox=\"0 0 16 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                                <title>twitter</title>\n" +
    "                                <desc>Created with sketchtool.</desc>\n" +
    "                                <defs></defs>\n" +
    "                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                                    <g id=\"product_Desktop\" sketch:type=\"MSArtboardGroup\" transform=\"translate(-1159.000000, -230.000000)\" fill=\"#D7D7D7\">\n" +
    "                                        <g id=\"social-media\" sketch:type=\"MSLayerGroup\" transform=\"translate(1150.000000, 187.000000)\">\n" +
    "                                            <path d=\"M23.0642014,45.3376755 C23.7366046,44.9122162 24.2525484,44.2375875 24.494688,43.4339422 C23.8651249,43.8288708 23.1694391,44.1144801 22.4271879,44.269103 C21.834877,43.5993986 20.9883195,43.1818182 20.0514253,43.1818182 C18.254004,43.1818182 16.7974409,44.7231232 16.7974409,46.6239019 C16.7974409,46.8937534 16.8244487,47.1567108 16.8803271,47.40785 C14.1758134,47.2640605 11.7776995,45.8951059 10.171196,43.8111434 C9.89087281,44.3213005 9.73068811,44.9122162 9.73068811,45.5425262 C9.73068811,46.7361759 10.3053041,47.7899754 11.1788695,48.4084672 C10.645231,48.3907397 10.1432568,48.234147 9.70368023,47.9780836 L9.70368023,48.0204326 C9.70368023,49.6887844 10.8249731,51.0803908 12.3159946,51.3955458 C12.0421905,51.4763043 11.7553482,51.5166835 11.4573301,51.5166835 C11.2477862,51.5166835 11.0428988,51.4960015 10.8454618,51.4556222 C11.2589619,52.8226071 12.4612784,53.8192849 13.8861771,53.8458761 C12.7714034,54.7696742 11.3679247,55.3192258 9.84337618,55.3192258 C9.58074778,55.3192258 9.32091331,55.3044529 9.06666667,55.2719525 C10.5073976,56.2479482 12.2182074,56.8181818 14.0566062,56.8181818 C20.0449062,56.8181818 23.3175168,51.5728205 23.3175168,47.0237548 C23.3175168,46.8740562 23.3156542,46.7253424 23.309135,46.5785983 C23.9452173,46.0930627 24.4984133,45.4863892 24.9333333,44.7960028 C24.3494042,45.0697937 23.7217037,45.2549473 23.0642014,45.3376755 Z\" id=\"twitter-icon\" sketch:type=\"MSShapeGroup\"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </svg>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li>\n" +
    "                        <a data-pin-do=\"buttonPin\" data-pin-custom=\"true\" onclick=\"dataLayer.push({'type':'pinnedToPinterest','productId':'4212240','category':'Sarees','subCategory':'Designer Sarees','source':'detailedView'});MSDtrack({'event':'socialShare','sourceProdID':'4212240','sourceCatgID':'Sarees','socialMedium':'pinterest'});\" data-pin-log=\"button_pinit\" data-pin-href=\"https://www.pinterest.com/pin/create/button?guid=MqrhMZ0hQD9V-1&amp;url=%2Fcatalog%2Fproduct%2Fview%2Fid%2F4212240%2Fs%2Froyalvilla-tm-new-black-embroidered-and-lace-work-saree&amp;media=undefined&amp;description=Royalvilla(tm)%20New%20Black%20Embroidered%20And%20Lace%20Work%20Saree%20MROYA33530599540%20-%20buy%20Sarees%20online%20from%20Royalvilla%20at%20CraftsVilla.com\">\n" +
    "                            <svg class=\"pin-svg\" width=\"16px\" height=\"22px\" viewBox=\"0 0 16 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "                                <title>pinterest</title>\n" +
    "                                <desc>Created with sketchtool.</desc>\n" +
    "                                <defs></defs>\n" +
    "                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "                                    <g id=\"product_Desktop\" sketch:type=\"MSArtboardGroup\" transform=\"translate(-1159.000000, -259.000000)\" fill=\"#D7D7D7\">\n" +
    "                                        <g id=\"social-media\" sketch:type=\"MSLayerGroup\" transform=\"translate(1150.000000, 187.000000)\">\n" +
    "                                            <path d=\"M9.06666667,80.1482127 C9.06666667,82.1917451 9.83377223,84.0094511 11.4779395,84.6869301 C11.7476553,84.7978852 11.988912,84.6908461 12.0671749,84.3893093 C12.1215061,84.1811052 12.2502195,83.6550474 12.3071379,83.4357479 C12.3860476,83.138127 12.355648,83.0336987 12.1376761,82.7739332 C11.6642181,82.2093674 11.3608686,81.4790216 11.3608686,80.4438755 C11.3608686,77.442213 13.5865096,74.7544882 17.157496,74.7544882 C20.3190575,74.7544882 22.0557173,76.704035 22.0557173,79.3069118 C22.0557173,82.7321618 20.5531994,85.6235219 18.3236775,85.6235219 C17.0915223,85.6235219 16.1698314,84.5955553 16.4654193,83.3352356 C16.8192192,81.8301619 17.5041811,80.2056483 17.5041811,79.1195934 C17.5041811,78.1471044 16.9867406,77.3364792 15.9169323,77.3364792 C14.6582583,77.3364792 13.6460152,78.6503185 13.6460152,80.4105889 C13.6460152,81.5325411 14.0218064,82.2902993 14.0218064,82.2902993 C14.0218064,82.2902993 12.7333795,87.7995477 12.5076461,88.7642047 C12.0581197,90.6856864 12.4403788,93.0405458 12.4727189,93.2781203 C12.4914761,93.4190986 12.6706399,93.4530378 12.7521368,93.3466514 C12.8685609,93.1932723 14.367198,91.3253101 14.8781705,89.4593059 C15.0217602,88.9306374 15.7054285,86.1939618 15.7054285,86.1939618 C16.1148533,86.9810905 17.3101409,87.6742337 18.5811042,87.6742337 C22.3661816,87.6742337 24.9333333,84.1928534 24.9333333,79.5327381 C24.9333333,76.0089338 21.975514,72.7272727 17.4802495,72.7272727 C11.8873643,72.7272727 9.06666667,76.7738715 9.06666667,80.1482127 Z\" id=\"pin-svg\" sketch:type=\"MSShapeGroup\"></path>\n" +
    "                                        </g>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </svg>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"visible-xs\">\n" +
    "                        <a href=\"whatsapp://send?text=www.craftsvilla.com/catalog/product/view/id/4212240/s/royalvilla-tm-new-black-embroidered-and-lace-work-saree/\" data-action=\"share/whatsapp/share\" id=\"whatsapp-share\">\n" +
    "                            <svg width=\"14px\" height=\"14px\" viewBox=\"0 0 14 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"whatsapp-svg\">\n" +
    "                                <title>Whatsapp</title>\n" +
    "                                <desc>Created with Sketch.</desc>\n" +
    "                                <defs></defs>\n" +
    "                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n" +
    "                                    <g id=\"product_mobile_Drop-down\" transform=\"translate(-332.000000, -593.000000)\" fill=\"#9B9B9B\">\n" +
    "                                        <path d=\"M338.997968,593 C335.13899,593 332,596.139875 332,599.999942 C332,601.530798 332.493693,602.950507 333.332924,604.10286 L332.460718,606.703608 L335.151298,605.843699 C336.257926,606.576201 337.578543,607 339.002032,607 C342.86101,607 346,603.860008 346,600.000058 C346,596.139992 342.86101,593.000116 339.002032,593.000116 L338.997968,593.000116 L338.997968,593 Z M337.043748,596.555661 C336.908017,596.230582 336.805145,596.218271 336.599517,596.209908 C336.529504,596.205844 336.451479,596.201779 336.364978,596.201779 C336.097465,596.201779 335.81776,596.279942 335.649054,596.45276 C335.443426,596.662627 334.933246,597.152278 334.933246,598.156434 C334.933246,599.16059 335.665542,600.131762 335.764234,600.267647 C335.867106,600.4033 337.191902,602.49384 339.248878,603.345852 C340.857444,604.012502 341.334765,603.950715 341.700855,603.872552 C342.23565,603.75734 342.906292,603.362111 343.074998,602.884888 C343.243703,602.407431 343.243703,602.000008 343.194241,601.913599 C343.144895,601.82719 343.009048,601.777946 342.80342,601.674929 C342.597792,601.572028 341.597983,601.078196 341.408726,601.012344 C341.223534,600.942427 341.0467,600.967165 340.906906,601.164721 C340.709406,601.44044 340.516085,601.72034 340.359687,601.888977 C340.236264,602.020681 340.034584,602.037173 339.865994,601.96714 C339.639699,601.872601 339.006212,601.650191 338.224454,600.954738 C337.619646,600.415727 337.208274,599.745012 337.08903,599.543391 C336.969671,599.337705 337.076723,599.218196 337.171235,599.107165 C337.274107,598.979526 337.372799,598.889052 337.475671,598.769659 C337.578543,598.650382 337.636133,598.588595 337.701966,598.448645 C337.77198,598.312876 337.722518,598.172926 337.673172,598.070025 C337.623825,597.967124 337.212453,596.962968 337.043748,596.555661 Z\" id=\"Whatsapp\"></path>\n" +
    "                                    </g>\n" +
    "                                </g>\n" +
    "                            </svg>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </div>\n" +
    "\n" +
    "                <h1 class=\"product-title col-xs-11 nopadding\" itemprop=\"name\">{{product.name}}</h1>\n" +
    "\n" +
    "                <p class=\"col-xs-8 col-sm-8 col-md-12 nopadding vendor_container\">\n" +
    "                    Sold by : <span class=\"bluen\"> <span class=\"text-uppercase \">\n" +
    "\t\t\t\t\t<a ng-href=\"/{{product.vendor_url}}\">\n" +
    "                        <span itemprop=\"brand\">{{product.vendor_name}}</span>\n" +
    "                    </a>\n" +
    "\t\t\t\t\t</span> (<a class=\"fancybox\" href=\"#contact_seller\">Contact Seller</a>)\n" +
    "\t\t\t\t</span>\n" +
    "                </p>\n" +
    "                <!--<p class=\"col-xs-8 col-sm-8 col-md-12 nopadding sku_container\">\n" +
    "                    SKU : <span class=\"bluen\"> <span class=\"text-uppercase \">\n" +
    "                        <a href=\"/\">\n" +
    "                                                </a>\n" +
    "                    </span>\n" +
    "                </p>-->\n" +
    "                <div class=\"col-xs-12 price_container nopadding\">\n" +
    "\t\t\t\t<span itemprop=\"offers\" itemscope=\"\" itemtype=\"http://schema.org/Offer\"><div class=\"grayn\"><i class=\"fa fa-rupee\"></i><s>{{product.price}}</s></div><meta itemprop=\"priceCurrency\" content=\"INR\"><div class=\"col-xs-4 col-sm-4 col-md-3 nomargin nopadding price_details\"><i class=\"fa fa-rupee\"></i> <span itemprop=\"price\">{{product.discounted_price}}</span></div><div class=\"col-xs-8 col-sm-8 col-md-6\"><div class=\"text-uppercase saved-percent text-center\">\n" +
    "                    you save {{product.discount_percentage}}%</div>\n" +
    "                </div></span>\t\t\t</div>\n" +
    "                <!--international starts here-->\n" +
    "                <!--international ends here-->\n" +
    "                <div class=\"col-xs-12 nopadding shipping-container\">\n" +
    "                    <div class=\"col-xs-12 col-sm-6 col-md-6 padleft0\">\n" +
    "                        <b>Shipping Cost :</b>\n" +
    "                        <ul class=\"ship-cost\">\n" +
    "                            <li>Free shipping in India</li><li><i class=\"fa fa-rupee\"></i> {{product.international_shipping_cost}} outside India</li>\t\t\t\t\t</ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-6 col-md-6 padleft0 mobmtop10\">\n" +
    "                        <b>Estimated Delivery Time :</b>\n" +
    "                        <div class=\"pt10\"> 6-8 working days</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 col-sm-12\" id=\"codshow1\">\n" +
    "                    <div class=\"col-xs-12 cod_text cod_container nopadding\" id=\"codshow2\">\n" +
    "                        <div>Available  for <span class=\"dark-blackn\"><b>Cash on Delivery</b></span> <span class=\"bluen\" id=\"tocheckpincode\">(Check Pincode) </span></div>\n" +
    "                    </div>\n" +
    "                    <!-- check for cod starts here  -->\n" +
    "                    <div class=\"col-xs-12 nopadding xs-pdlr-15\" id=\"pin\">\n" +
    "                        <div class=\"col-xs-12 col-sm-5 nopadding cod-txt\" id=\"cod-txt\">Check for cash on delivery at</div>\n" +
    "                        <div class=\"col-xs-12 col-sm-7 nopadding\" id=\"pincheckcontainer\">\n" +
    "                            <form action=\"#pincode\" method=\"POST\" id=\"pintextbox\" class=\"couponcode-form center-block\">\n" +
    "                                <input type=\"text\" name=\"pincode_value\" id=\"pincode_value\" placeholder=\"Enter Pin Code\" class=\"col-xs-8 col-sm-8 pull-left chk-input\" required=\"\">\n" +
    "                                <button class=\"col-xs-4 col-sm-4 pull-left craftsvilla_pincode check_btn\" type=\"submit\" id=\"submitpincode\" onclick=\"dataLayer.push({'event':'TappedButtonEvent','eventName':'TappedButton','type':'CheckedPinCode'});\">CHECK</button>\n" +
    "                                <div class=\"clearfix\"></div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                        <div id=\"pincode\" class=\"col-xs-12 nopadding text-center\"></div>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 buynow-chunk nopadding xs-dspl-no\">\n" +
    "\n" +
    "                    <form action=\"/checkout/cart/add/uenc/aHR0cDovL2xvY2FsLmNyYWZ0c3ZpbGxhLmNvbS9mbGludC1hZ2F0ZS05MjUtc3Rlcmxpbmctc2lsdmVyLWVhcnJpbmdzLWVhcnJpbmdzLWJ5LXNhYW52aS1ob21lLXNob3BwZWUuaHRtbA,,/product/4212240/\" method=\"post\" id=\"product_addtocart_form\" class=\"\">\n" +
    "                        <div class=\"col-xs-6 nopadding\">\n" +
    "                            <input type=\"hidden\" name=\"qty\" id=\"qty\" maxlength=\"12\" value=\"1\">\n" +
    "                            <div id=\"addtocart\" class=\"add_to_cart cart_buy_buttons\" onclick=\"MSDtrack({'event':'addToCart','sourceProdID':'4212240', 'sourceCatgID' : 'Sarees', 'prodPrice' : '1999'});dataLayer.push({'event':'BuyNowGAEvent','eventName':'AddedToCart','source':'productDetailsPage'});\">\n" +
    "                                ADD TO CART\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-6 nopadding\">\n" +
    "                            <button class=\"col-xs-12 buy_now cart_buy_buttons\" id=\"buynow\" onclick=\"MSDtrack({'event':'addToCart','sourceProdID':'4212240', 'sourceCatgID' : 'Sarees', 'prodPrice' : '1999'});dataLayer.push({'event':'BuyNowGAEvent','eventName':'AddedToCart','source':'productDetailsPage'});\">BUY NOW</button>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                    <p class=\"mt10 order-asst col-xs-12 order_assistance_container nopadding\">For Order Assistance Dial <b>02261579090</b></p>\t\t</div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <!--<div class=\"col-xs-12 buyer_protection hidden-sm hidden-xs\" data-toggle=\"modal\" data-target=\"#myModal\">\n" +
    "                <img src=\"img/sheild.png\" style=\"width:23px;height:24px;\"/>\n" +
    "                <span class=\"protection_text\"><b>100%</b> Buyer Protection</span>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "        <!-- check for cod ends here -->\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "    <div class=\"col-xs-12 pad15 white-bg product_detail_section\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 text-center mb20\">\n" +
    "            <h2 class=\"product_name\">More Details about  Royalvilla(tm) New Black Embroidered And Lace Work Saree</h2>\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 nopadding sku_container text-center mb10\">\n" +
    "                SKU :  <span class=\"text-uppercase \">\n" +
    "\t\t\t\t\t\t\t<span class=\"clrrouge\">MROYA33530599540</span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-12 oh show-read-more\" id=\"prodDescription\" itemprop=\"description\" ng-bind-html=\"problem.long_description\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"col-xs-12 col-sm-12 nopadding seller_section\">\n" +
    "        <div class=\"col-xs-12 nopadding\">\n" +
    "            <div>\n" +
    "                <div class=\"seller-logo-cont\">\n" +
    "                    <div class=\"seller-logo\">\n" +
    "                        <img src=\"/media/vendor/8447/royal-store-Jarek-Kowalczyk-studio-fuerte-luxury-boutique-crown-logo-design-branding-identity-graphics-navy-blue.jpg\" title=\"Seller Logo\" alt=\"Seller Logo\" class=\"img-responsive center-block\">\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"pull-left\">\n" +
    "                    <div class=\"seller-name\">\n" +
    "                        <a href=\"/ROYALVILLA\">\n" +
    "                            <span class=\"brown\">Royalvilla</span>\n" +
    "                        </a>\n" +
    "                        <div class=\"rating\">\n" +
    "                            <div class=\"blankstar\"></div>\n" +
    "                            <div class=\"goldstar\" style=\"width:114.66px;\"></div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--<div class=\"seller-place\"-->\n" +
    "                        <!--<p class=\"city_and_country\">Surat, India</p>-->\n" +
    "\n" +
    "                        <div class=\"seller-policies\"><span class=\"bluen\">\n" +
    "\t\t\t\t\t\t\t\t\t<a class=\"fancybox\" href=\"#contact_seller\">Contact Seller</a></span>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--<span itemprop=\"aggregateRating\" itemscope itemtype=\"http://schema.org/AggregateRating\">\n" +
    "                            <span itemprop=\"ratingValue\">4.4</span> stars, based on <span itemprop=\"reviewCount\">89\n" +
    "                              </span> reviews\n" +
    "                        </span> -->\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <div class=\"spacer\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!---Mobile view button starts-->\n" +
    "    <div class=\"col-xs-12 buynow-chunk nopadding dspl-no fixed-position-display\" id=\"addTocCartBuyNow\">\n" +
    "        <div>\n" +
    "            <form action=\"/checkout/cart/add/uenc/aHR0cDovL2xvY2FsLmNyYWZ0c3ZpbGxhLmNvbS9mbGludC1hZ2F0ZS05MjUtc3Rlcmxpbmctc2lsdmVyLWVhcnJpbmdzLWVhcnJpbmdzLWJ5LXNhYW52aS1ob21lLXNob3BwZWUuaHRtbA,,/product/4212240/\" method=\"post\" id=\"product_addtocart_form\" class=\"\">\n" +
    "                <input type=\"hidden\" name=\"qty\" id=\"qty1\" maxlength=\"12\" value=\"1\">\n" +
    "                <div class=\"button-custom buynow text-uppercase grey_button mobile_fixed_button\" id=\"addtocartmob\" onclick=\"MSDtrack({'event':'addToCart','sourceProdID':'4212240', 'sourceCatgID':'Sarees', 'prodPrice':'1999'});dataLayer.push({'event':'BuyNowGAEvent','eventName':'AddedToCart','source':'productDetailsPage'});\">add to cart</div>\n" +
    "                <button id=\"buynow\" class=\"button-custom text-uppercase green_button mobile_fixed_button\" onclick=\"MSDtrack({'event':'addToCart','sourceProdID':'4212240', 'sourceCatgID' : 'Sarees', 'prodPrice' : '1999'});dataLayer.push({'event':'BuyNowGAEvent','eventName':'AddedToCart','source':'productDetailsPage'});\">Buy Now</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <p class=\"col-xs-12 text-center mt10 order-asst\" id=\"morder-asst\" style=\"display: none;\">For Order Assistance Dial <b><a href=\"tel://02261579090\">02261579090</a></b></p>\t\t\t</div>\n" +
    "    <!--Mobile view button ends-->\n" +
    "\n" +
    "    <div class=\"item-chunk-xtra-padding\">\n" +
    "        <div class=\"col-xs-12 nopadding\" id=\"view_recommended_products\">\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 nopadding\" id=\"sales-recommended-products\">\n" +
    "            <h4 class=\"borderbottom product_name text-center\">Featured Products</h4><div class=\"flex-center\"><div class=\"col-xs-6 col-md-3 product mob_padding sales\">\n" +
    "            <div class=\"product-image-container\">\n" +
    "                <a href=\"/catalog/product/view/id/4143664/s/shonaya-red-beige-colour-chiffon-lycra-embroidery-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'983','eventLabel':'4143664','discountPercentage':'22.36','category':'NA','subCategory':'NA','price':'983','price2':'3219', 'productId':'4143664','positionOnPage':'1','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <img src=\"http://img1.craftsvilla.com/thumb/500x500/C/V/CV-MSHON96049605760--Shonayaa-Craftsvilla_1.jpg\" alt=\"Shonaya Red &amp; Beige \" class=\"product-image\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"product-details-container col-xs-12\">\n" +
    "                <a href=\"/catalog/product/view/id/4143664/s/shonaya-red-beige-colour-chiffon-lycra-embroidery-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'983','eventLabel':'4143664','discountPercentage':'22.36','category':'NA','subCategory':'NA','price':'983','price2':'3219', 'productId':'4143664','positionOnPage':'1','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <div class=\"product-name\">Shonaya Red &amp; Beige </div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href=\"/Shonayaa\" title=\"Shonayaa\" target=\"_blank\"><div class=\"vendor-name\">Shonayaa</div></a>\n" +
    "                <div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\">Rs<s> 3219</s></div>\n" +
    "                    <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                        Rs 983\n" +
    "                    </div><div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\">Rs<s> 3219</s></div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                    Save 69%\n" +
    "                </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x grey\" id=\"wishicon-4143664\"></i></div></div><div class=\"col-xs-6 col-md-3 product mob_padding sales\">\n" +
    "            <div class=\"product-image-container\">\n" +
    "                <a href=\"/catalog/product/view/id/4160840/s/shonaya-skyblue-colour-tussar-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'1019','eventLabel':'4160840','discountPercentage':'23.78','category':'NA','subCategory':'NA','price':'1019','price2':'3397', 'productId':'4160840','positionOnPage':'2','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <img src=\"http://img1.craftsvilla.com/thumb/500x500/C/V/CV-MSHON40145498920--Shonayaa-Craftsvilla_1.jpg\" alt=\"Shonaya Skyblue Colo\" class=\"product-image\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"product-details-container col-xs-12\">\n" +
    "                <a href=\"/catalog/product/view/id/4160840/s/shonaya-skyblue-colour-tussar-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'1019','eventLabel':'4160840','discountPercentage':'23.78','category':'NA','subCategory':'NA','price':'1019','price2':'3397', 'productId':'4160840','positionOnPage':'2','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <div class=\"product-name\">Shonaya Skyblue Colo</div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href=\"/Shonayaa\" title=\"Shonayaa\" target=\"_blank\"><div class=\"vendor-name\">Shonayaa</div></a>\n" +
    "                <div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\">Rs<s> 3397</s></div>\n" +
    "                    <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                        Rs 1,019\n" +
    "                    </div><div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\">Rs<s> 3397</s></div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                    Save 70%\n" +
    "                </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x grey\" id=\"wishicon-4160840\"></i></div></div><div class=\"col-xs-6 col-md-3 product mob_padding sales\">\n" +
    "            <div class=\"product-image-container\">\n" +
    "                <a href=\"/catalog/product/view/id/3840115/s/shonaya-black-beige-colour-bhagalpuri-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'586','eventLabel':'3840115','discountPercentage':'11.64','category':'NA','subCategory':'NA','price':'586','price2':'1750', 'productId':'3840115','positionOnPage':'3','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <img src=\"http://img1.craftsvilla.com/thumb/500x500/C/V/CV-MSHON83962544090--Shonayaa-Craftsvilla_1.jpg\" alt=\"Shonaya Black &amp; Beig\" class=\"product-image\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"product-details-container col-xs-12\">\n" +
    "                <a href=\"/catalog/product/view/id/3840115/s/shonaya-black-beige-colour-bhagalpuri-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'586','eventLabel':'3840115','discountPercentage':'11.64','category':'NA','subCategory':'NA','price':'586','price2':'1750', 'productId':'3840115','positionOnPage':'3','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <div class=\"product-name\">Shonaya Black &amp; Beig</div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href=\"/Shonayaa\" title=\"Shonayaa\" target=\"_blank\"><div class=\"vendor-name\">Shonayaa</div></a>\n" +
    "                <div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\">Rs<s> 1750</s></div>\n" +
    "                    <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                        Rs 586\n" +
    "                    </div><div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\">Rs<s> 1750</s></div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                    Save 67%\n" +
    "                </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x grey\" id=\"wishicon-3840115\"></i></div></div><div class=\"col-xs-6 col-md-3 product mob_padding sales\">\n" +
    "            <div class=\"product-image-container\">\n" +
    "                <a href=\"/catalog/product/view/id/4161010/s/shonaya-green-colour-super-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'909','eventLabel':'4161010','discountPercentage':'21.21','category':'NA','subCategory':'NA','price':'909','price2':'3030', 'productId':'4161010','positionOnPage':'4','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <img src=\"http://img1.craftsvilla.com/thumb/500x500/C/V/CV-MSHON19508246120--Shonayaa-Craftsvilla_1.jpg\" alt=\"Shonaya Green Colour\" class=\"product-image\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"product-details-container col-xs-12\">\n" +
    "                <a href=\"/catalog/product/view/id/4161010/s/shonaya-green-colour-super-silk-printed-saree-with-unstitched-blouse-piece/\" onclick=\"dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'909','eventLabel':'4161010','discountPercentage':'21.21','category':'NA','subCategory':'NA','price':'909','price2':'3030', 'productId':'4161010','positionOnPage':'4','type':'others','feedId':'NA', 'Sponsored':'1', 'Recommended':'1'});\">\n" +
    "                    <div class=\"product-name\">Shonaya Green Colour</div>\n" +
    "                </a>\n" +
    "\n" +
    "                <a href=\"/Shonayaa\" title=\"Shonayaa\" target=\"_blank\"><div class=\"vendor-name\">Shonayaa</div></a>\n" +
    "                <div class=\"price-container col-xs-12 nopadding\"><div class=\"col-xs-6 col-md-8 nopadding\"><div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\">Rs<s> 3030</s></div>\n" +
    "                    <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                        Rs 909\n" +
    "                    </div><div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\">Rs<s> 3030</s></div></div><div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                    Save 70%\n" +
    "                </div></div></div><div class=\"wishit text-center\" onclick=\"dataLayer.push({&quot;event&quot;:&quot;ProductBookmarkedEvent&quot;,&quot;eventName&quot;:&quot;ProductBookmarked&quot;,&quot;productId&quot;:&quot;&quot;,&quot;type&quot;:&quot;addedToWishlist&quot;,&quot;category&quot;:&quot;NA&quot;,&quot;subCategory&quot;:&quot;NA&quot;,&quot;source&quot;:&quot;productDetailsPage&quot;});\"><i class=\"fa fa-heart-o fa-2x grey\" id=\"wishicon-4161010\"></i></div></div></div></div>\n" +
    "        <div class=\"clearfix spacer\"></div>\n" +
    "    </div>\n" +
    "    <!-- Show subcategories -->\n" +
    "\n" +
    "    <div class=\"subcategorydescbot col-xs-12 col-sm-12 well mt20\">\n" +
    "\n" +
    "\n" +
    "        <ul class=\"SubCategoryListView\">\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/banarasi.html\" title=\"Banarasi Sarees\">\n" +
    "                    Banarasi Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/bandhani.html\" title=\"Bandhani Sarees\">\n" +
    "                    Bandhani Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/cotton.html\" title=\"Cotton Sarees\">\n" +
    "                    Cotton Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/cotton-silk.html\" title=\"Cotton Silk Sarees\">\n" +
    "                    Cotton Silk Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/designer.html\" title=\"Designer Sarees\">\n" +
    "                    Designer Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/georgette.html\" title=\"Georgette Sarees\">\n" +
    "                    Georgette Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/handwoven.html\" title=\"Handwoven Sarees\">\n" +
    "                    Handwoven Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/heavy-work.html\" title=\"Heavy Work Sarees\">\n" +
    "                    Heavy Work Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/jacquard.html\" title=\"Jacquard Sarees\">\n" +
    "                    Jacquard Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/kanchivaram.html\" title=\"Kanchivaram Sarees\">\n" +
    "                    Kanchivaram Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/chiffon.html\" title=\"Chiffon Sarees\">\n" +
    "                    Chiffon Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/leheriya.html\" title=\"Leheriya Sarees\">\n" +
    "                    Leheriya Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/net.html\" title=\"Net Sarees\">\n" +
    "                    Net Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/satin.html\" title=\"Satin Sarees\">\n" +
    "                    Satin Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/silk.html\" title=\"Silk Sarees\">\n" +
    "                    Silk Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/wedding.html\" title=\"Wedding Sarees\">\n" +
    "                    Wedding Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/bollywood-sarees.html\" title=\"Bollywood Sarees\">\n" +
    "                    Bollywood Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/half-sarees.html\" title=\"Half Sarees\">\n" +
    "                    Half Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/uppada-sarees-32.html\" title=\"Uppada Sarees\">\n" +
    "                    Uppada Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"http://www.craftsvilla.com/sarees-sari/paithani-sarees.html\" title=\"Paithani Sarees\">\n" +
    "                    Paithani Sarees\t\t\t\t\t\t</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <!--Seller Contact pop up-->\n" +
    "    <div id=\"contact_seller\" style=\"display:none;\">\n" +
    "        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n" +
    "            <div id=\"welcome_img\"><h4 class=\"brown\">Welcome to Royalvilla</h4></div>\n" +
    "        </div>\n" +
    "        <div id=\"bg_welcome\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "            <form id=\"sellercontact\" method=\"post\" name=\"sellercontact\" enctype=\"multipart/form-data\">\n" +
    "                <div id=\"craft-thumb\" class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 mb10\">\n" +
    "                    <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2012/img/messages/default_avatar_75px.png\">\n" +
    "                </div>\n" +
    "                <div id=\"craft-message\" class=\"col-lg-10 col-md-10 col-sm-10 col-xs-12\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"email\" name=\"newcustemail\" id=\"newcustemail\" placeholder=\"Enter your email address\" value=\"\" class=\"form-control\" required=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" name=\"subject\" id=\"subject\" class=\"subreadonly\" value=\"Product Inquiry: Royalvilla(tm) New Black Embroidered And Lace Work Saree\" readonly=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <textarea rows=\"6\" name=\"message_text\" id=\"message_text\" placeholder=\"Message text\" class=\"form-control\" required=\"\"></textarea>\n" +
    "                    </div>\n" +
    "                    <p><span class=\"required\">*</span> You can contact seller directly to enquire about product details like color, material, sizes, expected delivery date, wholesale prices, discounts etc</p>\n" +
    "                    <div class=\"form-group\" id=\"craft-upload-frame\">\n" +
    "                        <label>Attach image</label>\n" +
    "                        <input type=\"file\" name=\"imgfile\" id=\"craft-upload-shim\" class=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"\" id=\"imgshow\" style=\"display:none\">\n" +
    "                        <p class=\"\"><img id=\"show_img\" src=\"\"></p>\n" +
    "                    </div>\n" +
    "                    <input type=\"hidden\" name=\"custid\" id=\"custid\" value=\"\">\n" +
    "                    <input type=\"hidden\" name=\"recmail\" id=\"recmail\" value=\"royalvilla5160@gmail.com\">\n" +
    "                    <input type=\"hidden\" name=\"recname\" id=\"recname\" value=\"Royalvilla\">\n" +
    "                    <input type=\"hidden\" name=\"msgid\" id=\"msgid\" value=\"\">\n" +
    "                    <input type=\"hidden\" name=\"vendorid\" id=\"vendorid\" value=\"8447\">\n" +
    "                    <input type=\"hidden\" name=\"sendname\" id=\"sendname\" value=\"\">\n" +
    "                    <input type=\"hidden\" name=\"sendemail\" id=\"sendemail\" value=\"\">\n" +
    "                    <input type=\"hidden\" name=\"productid\" id=\"productid\" value=\"4212240\">\n" +
    "                    <input type=\"hidden\" name=\"imagephoto\" id=\"imagephoto\" value=\"http://img1.craftsvilla.com/thumb/166x166{{img}}\">\n" +
    "                    <input type=\"hidden\" name=\"productname\" id=\"productname\" value=\"Royalvilla(tm) New Black Embroidered And Lace Work Saree (SKU: MROYA33530599540)\">\n" +
    "                    <input type=\"hidden\" name=\"producturl\" id=\"producturl\" value=\"www.craftsvilla.com/catalog/product/view/id/4212240/s/royalvilla-tm-new-black-embroidered-and-lace-work-saree/\">\n" +
    "                    <script type=\"text/javascript\">\n" +
    "                        var hostname=document.domain+'/catalog/product/view/id/'+'4212240'+'/s/'+'royalvilla-tm-new-black-embroidered-and-lace-work-saree'+'/';\n" +
    "                        document.getElementById(\"producturl\").value = hostname;\n" +
    "                        var whatsappshareurl = 'whatsapp://send?text='+hostname;\n" +
    "                        document.getElementById(\"whatsapp-share\").href = whatsappshareurl;\n" +
    "                    </script>\n" +
    "                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center spacer brown\" id=\"craft-send\">\n" +
    "                        <button type=\"submit\" id=\"submit_val\" class=\"btn sendmsg\" onclick=\"dataLayer.push({'event':'SellerContactedEvent','eventName':'SellerContacted','category':'Sarees','subCategory':'Designer Sarees','productId':'4212240'});\">Send Message</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\" id=\"response\"></div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"fancybox\" id=\"successmessage\" style=\"display:none\">\n" +
    "        <p class=\"colorgreen mt20\">Your message has been sent</p>\n" +
    "    </div>\n" +
    "    <div class=\"fancybox\" id=\"notsuccessmessage\" style=\"display:none\">\n" +
    "        <p class=\"colorred mt20\">Image size should be less than 2MB</p>\n" +
    "    </div>\n" +
    "    <div class=\"fancybox\" id=\"filetypeext\" style=\"display:none\">\n" +
    "        <p class=\"colorred mt20\">It is not valid file type</p>\n" +
    "    </div>\n" +
    "    <!--Seller Contact pop up Info-->\n" +
    "    <script>\n" +
    "        /* $('.modal-toggle').click(function (e) {\n" +
    "         var tab = e.target.hash;\n" +
    "         $('li > a[href=\"' + tab + '\"]').tab(\"show\");\n" +
    "         });*/\n" +
    "    </script>\n" +
    "    <script>\n" +
    "        dataLayer = [{\n" +
    "            'productId':'4212240',\n" +
    "            'skuId':'MROYA33530599540',\n" +
    "            'prodName':'Royalvillatm New Black Embroidered And Lace Work Saree',\n" +
    "            'prodURL':'/catalog/product/view/id/4212240/s/royalvilla-tm-new-black-embroidered-and-lace-work-saree',\n" +
    "            'imageURL':'{{img}}',\n" +
    "            'localShippingCost':'0',\n" +
    "            'shippingCostInternational':'2,000',\n" +
    "            'productCategory':'Sarees',\n" +
    "            'productSubCategory':'Designer Sarees',\n" +
    "            'productPrice':'1999',\n" +
    "            'sellerName':'Royalvilla',\n" +
    "            'productAvailability':'1',\n" +
    "            'currency':'INR',\n" +
    "            'source':'productDetailsPage',\n" +
    "            'buttonText':'BuyNow'\n" +
    "        }];\n" +
    "    </script>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <!-- Show subcategories -->\n" +
    "\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('partials/products.html',
    "<div class=\"container\">\n" +
    "    <div itemprop=\"itemListElement\" itemscope=\"\" itemtype=\"http://schema.org/Product\"\n" +
    "     class=\"col-xs-6 col-md-3 product mob_padding\" ng-repeat=\"product in products\">\n" +
    "\n" +
    "    <div class=\"product-image-container\">\n" +
    "        <a ui-sref=\"productById({id: product.entity_id})\">\n" +
    "            <img itemprop=\"image\"\n" +
    "                 src=\"http://img1.craftsvilla.com/thumb/500x500{{product.image}}\" class=\"product-image lazy\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"product-details-container col-xs-12\">\n" +
    "        <a itemprop=\"url\" ui-sref=\"productById({id: product.entity_id})\">\n" +
    "            <div class=\"product-name\" itemprop=\"name\">Mimosa Silk Saree (r...</div>\n" +
    "        </a>\n" +
    "\n" +
    "        <a href=\"/Mimosa\" title=\"Kataria Silk House Pvt Ltd\" target=\"_blank\">\n" +
    "            <div class=\"vendor-name\">By Kataria Silk House</div>\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"price-container col-xs-12 nopadding\" itemprop=\"offers\" itemscope=\"\"\n" +
    "             itemtype=\"http://schema.org/Offer\">\n" +
    "            <div class=\"col-xs-6 col-md-8 nopadding\">\n" +
    "                <div class=\"col-xs-12 col-md-6 original-price price nopadding visible-xs\"><s><span itemprop=\"price\"> 4256</span></s>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 col-md-6 discounted-price price nopadding\">\n" +
    "                    Rs 2,149\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6 col-md-6 original-price price nopadding hidden-xs\"><s> <span\n" +
    "                        itemprop=\"price\">4256</span></s></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-md-4 save-percent nopadding\">\n" +
    "                Save 50%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wishit\">\n" +
    "        <div class=\"wishitIcon\"><i class=\"icon-small icon-v2 icon-wish\" id=\"wishicon-3150468\"></i></div>\n" +
    "        <div class=\"wishitText hidden-xs\" id=\"wished-3150468\">Wished</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/shipping.html',
    " <!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta charset=\"UTF-8\">\n" +
    "<title>Shipping</title>\n" +
    "<meta name=\"description\" content=\"\">\n" +
    "<meta name=\"keywords\" content=\"\">\n" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
    "<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n" +
    "<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>\n" +
    "<link href=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
    "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div data-overlay class=\"hide\">&nbsp;</div>\n" +
    "<!--// Header -->\n" +
    "<div role-header class=\"container-fluid nopadding\">\n" +
    "\t<div role-nav class=\"container\">\n" +
    "\t\t<div class=\"col-xs-6 nopadding\" role=\"logo\">\n" +
    "\t\t\t<img role=\"back\" src=\"images/Shape.png\" alt=\"\" title=\"\">\n" +
    "\t\t\t<a href=\"#\" title=\"\"><img class=\"logo\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/cv_logo.png\" alt=\"\" title=\"\"></a>\n" +
    "\t\t\t<span class=\"hidden-xs\">Call 022 288288281 for any assistance</span>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 nopadding buyerProtection\">\n" +
    "\t\t\t<ul>\n" +
    "\t\t\t\t<li class=\"visible-xs\">100% Buyer Protection<br>Secure Payments</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\">100% BUYER<br>PROTECTION</li>\n" +
    "\t\t\t\t<li class=\"hidden-xs\"><strong>SECURE</strong><br>PAYMENTS</li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Header -->\n" +
    "\n" +
    "<!--// Content -->\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Flow Start -->\n" +
    "\t\t<div class=\"loginProcessContainer container-fluid\">\n" +
    "\t\t\t<div role=\"loginFlow\" class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t<div class=\"circleBox LoginIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/check.png\" data-complete alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Login</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Firstliner rougeBack\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox ShippingIcon rougeBack\">\n" +
    "\t\t\t\t\t<span><img src=\"images/Shipping-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"rougeColor\">Shipping</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"Progressliner Secoundliner white-nine\"></div>\n" +
    "\t\t\t\t<div class=\"circleBox PaymentIcon white-nine\">\n" +
    "\t\t\t\t\t<span><img src=\"images/payment-icon.png\" alt=\"\" title=\"\"></span>\n" +
    "\t\t\t\t\t<span class=\"warm-greyColor\">Payment</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// login Flow End -->\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid nopadding\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<!--// login Container Start -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding shippingContainer\">\n" +
    "\t\t\t<h4 role=\"headding\">SELECT SHIPPING ADDRESS <small><a class=\"rougeColor\" href=\"#\">Change</a></small></h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard addressCardActive\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Edit Shipping Address Start -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 add-new-shipping\">\n" +
    "\t\t\t\t\t<!--// -->\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address </a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"change-country\" style=\"display:none;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"City\" type=\"text\" class=\"form-control\" placeholder=\"Select City\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input id=\"State\" type=\"text\" class=\"form-control\" placeholder=\"Select State\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Country\">Country</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input id=\"Country\" type=\"text\" class=\"form-control\" placeholder=\"Select Country\" >\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">SAVE</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">CANCEL</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address Start -->\n" +
    "\t\t\t\t<div class=\"addressEditContainer hide\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<h4 role=\"headding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a href=\"#new-address\">Edit Address </a>\n" +
    "\t\t\t\t\t\t\t\t</h4>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"change-country\" style=\"display:none;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"City\" type=\"text\" class=\"form-control\" placeholder=\"Select City\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"State\" type=\"text\" class=\"form-control\" placeholder=\"Select State\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Country\">Country</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"Country\" type=\"text\" class=\"form-control\" placeholder=\"Select Country\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">SAVE</a>\n" +
    "\t\t\t\t\t\t\t\t\t<a role=\"button\" class=\"btn btn-default outline-btn\" href=\"#\">CANCEL</a>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// Desktop Edit Shipping Address End -->\n" +
    "\t\t\t\t<!--// Select Billing Address -->\n" +
    "\t\t\t\t<div class=\"col-xs-12\"><h4 role=\"headding\">SELECT BILLING ADDRESS</h4></div>\n" +
    "\t\t\t\t<!--// Billing Address Not select Error -->\n" +
    "\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 text-center form-error\">Please select billing address or add new billing Address</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<!--// -->\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 addressCard\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding customer-address\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t<h5>Shruti Kartikey <span><a href=\"#\"><img src=\"images/edit-icon.png\"></a></span><span class=\"pull-right delete-shipping\"><a href=\"#\"><img src=\"images/remove.png\"></a></span></h5>\n" +
    "\t\t\t\t\t\t\t\t<p>G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056</p>\n" +
    "\t\t\t\t\t\t\t\t<p class=\"margin0\">+91 7738233261</p>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding hidden-xs\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle\" type=\"button\" value=\"DELIVER TO THIS ADDRESS\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// -->\n" +
    "\t\t<!--// -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding add-new-shipping\">\n" +
    "\t\t\t<h4 class=\"M-add-new-address\" role=\"headding\">\n" +
    "\t\t\t\t<a href=\"#new-address\">ADD NEW ADDRESS <span><img src=\"images/Shape.png\" title=\"\" alt=\"\"></span></a>\n" +
    "\t\t\t</h4>\n" +
    "\t\t\t<!--// -->\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t<div class=\"col-xs-12 new-address\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"change-country\" style=\"display:none;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"City\" type=\"text\" class=\"form-control\" placeholder=\"Select City\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"State\" type=\"text\" class=\"form-control\" placeholder=\"Select State\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Country\">Country</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"Country\" type=\"text\" class=\"form-control\" placeholder=\"Select Country\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding margin0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<hr class=\"line-divider\" />\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 nopadding\">\n" +
    "\t\t\t\t\t\t\t<h4 role=\"headding\">ADD BILLING ADDRESS</h4>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 nopadding\">\n" +
    "\t\t\t\t\t\t\t<form role=\"form\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label>Country: <span role=\"country\">India</span> <a href=\"#change-country\">Change</a></label>\n" +
    "\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"change-country\" style=\"display:none;\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Select Country</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"1\">India</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"2\">US</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"3\">UK</option>\n" +
    "\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Dubai</option>\n" +
    "\t\t\t\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group col-sm-8 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Full Name\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Address\">Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t<textarea id=\"Address\" class=\"form-control\"></textarea>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 nopadding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"Pincode\">Pincode</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"Pincode\" type=\"text\" class=\"form-control\" placeholder=\"Pincode\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 m-padding\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label for=\"City\">City</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input id=\"City\" type=\"text\" class=\"form-control\" placeholder=\"Select City\" >\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"State\">State</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"State\" type=\"text\" class=\"form-control\" placeholder=\"Select State\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Country\">Country</label>\n" +
    "\t\t\t\t\t\t\t\t\t<input id=\"Country\" type=\"text\" class=\"form-control\" placeholder=\"Select Country\" >\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-sm-8 col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<label for=\"Number\">Phone Number</label>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">+91</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Number\" placeholder=\"Phone Number\">\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"checkbox col-xs-12 nopadding margin0\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" id=\"Guest\"><span for=\"Guest\"></span> This is also my Billing Address</label>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</form>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"form-group nopadding col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<input class=\"btn btn-newStyle btn-newStyleActive Width60\" type=\"button\" value=\"SAVE & CONTINUE\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// Button Mobile Start -->\n" +
    "\t\t<div class=\"BtnContainer col-xs-12 nopadding visible-xs\">\n" +
    "\t\t\t<a class=\"btn newBtn\" href=\"#\">PROCEED TO PAYMENT <span><img src=\"images/Checkout-CTA-icon.png\" title=\"\" alt=\"\"></span></a>\n" +
    "\t\t</div>\n" +
    "\t\t<!--// Button Mobile End -->\n" +
    "\t\t<!--// login Container End -->\n" +
    "\t\t<div class=\"col-xs-12 nopadding spacer\">&nbsp;</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Content -->\n" +
    "\n" +
    "<!--// Footer -->\n" +
    "<div role=\"footer\" class=\"container-fluid\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<section class=\"col-xs-12 m-padding hidden-xs\">\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">SUPPORT</li>\n" +
    "\t\t    <li><span class=\"ln-hgt-15\">For Help, send email to </span>\n" +
    "\t\t      <a href=\"mailto:customercare@craftsvilla.com\"><span class=\"rouge ln-hgt-15\">customercare@craftsvilla.com</span></a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\"> PAYMENT OPTIONS </li>\n" +
    "\t\t    <li><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_1.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_2.png\"> <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Visa_3.png\"></li>\n" +
    "\t\t  </ul>\n" +
    "\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">STAY CONNECTED</li>\n" +
    "\t\t    <li>\n" +
    "\t\t      <a target=\"_blank\" href=\"http://www.facebook.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/FB.png\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://twitter.com/craftsvilla\"><img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Twitter.png\" class=\"p-l-5\"></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://plus.google.com/117677147285924975963\"><!-- <img class=\"p-l-5\" src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/g-plus.png\"> --></a>\n" +
    "\t\t      <a target=\"_blank\" href=\"https://www.pinterest.com/craftsvilla/\">\n" +
    "\t\t        <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/pin.png\" class=\"p-l-5\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t  <ul class=\"footer-col col-xs-12 col-sm-3 m-padding\">\n" +
    "\t\t    <li class=\"FooterHeader\">DOWNLOAD OUR APP</li>\n" +
    "\t\t    <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.craftsvilla.app&amp;hl=en\">\n" +
    "\t\t      <img src=\"http://lstatic1.craftsvilla.com/skin/frontend/default/craftsvilla2015//img/Googleplay.png\">\n" +
    "\t\t      </a>\n" +
    "\t\t    </li>\n" +
    "\t\t  </ul>\n" +
    "\t\t</section>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!--// Footer -->\n" +
    "<!--// Jquery -->\n" +
    "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\"></script>\n" +
    "<script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"js/common.js\"></script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "</html>\n"
  );
}]); });