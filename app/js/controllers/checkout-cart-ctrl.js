define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('checkoutCartCtrl', ['$scope', 'craftsvillaService','$state', function ($scope, craftsvillaService,$state) {

    	var successCoupon = false;
    	var showNote = false;
    	$scope.getCartDetails = function() {

    		//console.log('calling fn');
    		//console.log(craftsvillaService);
    		//console.log(craftsvillaService.getCartData);
	        craftsvillaService.getCartData()
	        .success(function (response) {
	          console.log(response);

	          $scope.cartData = response.d.product_list;
	          $scope.items = response.d.total_items;
	          $scope.grandTotal = response.d.grand_total;
	          $scope.subTotal = response.d.sub_total;
	          $scope.totalDiscount = response.d.totol_discount;
	          $scope.shippingAmount = response.d.shipping_amount;
	        })
	        .error(function (err) {
	          throw new Error(err);
	        })
	    };



		$scope.proceedToCheckout = function() {
			console.log("click on proceedToCheckout");
			/*craftsvillaService.loginCheck()
				.success(function (response) {
					if (response.d === 1) {
						$state.go('login');
					}
					else {
						$state.go('shipping');
					}

				}
				.error(function (error) {

				})*/
		};

		$scope.removeOutOfStockProducts = function() {
			console.log("click on removeOutOfStockProducts");
		};

		$scope.removeProductFromCart = function() {
			console.log("click on removeProductFromCart");
		};

		$scope.removeAllItems = function() {
			console.log("click on removeAllItems");
		};

		$scope.addNoteToSeller = function() {
			console.log(1);
			console.log($scope.sellerForm);
			if ($scope.sellerForm1.$valid) {
				console.log('test');
				console.log($scope.seller);
			}
		};

		$scope.updateNoteToSeller = function() {
			console.log("click on updateNoteToSeller");
		};

		$scope.removeNoteToSeller = function() {
			console.log("click on removeNoteToSeller");
		};

		$scope.showNoteToSeller = function() {
			console.log("click on showNoteToSeller");
			$scope.showNote = true;
		};

		$scope.hideNoteToSeller = function() {
			console.log("click on hideNoteToSeller");
			$scope.showNote = false;
		};

		$scope.applyCoupon = function() {
			//console.log($scope.couponForm);
			if ($scope.couponForm.$valid) {
				//console.log($scope.coupon);

				craftsvillaService.getApplyCoupon($scope.coupon)
				.success(function (response) {

					$scope.successCoupon = true;
					console.log(response);
					//console.log(response.d[0]);
					$scope.couponCode = response.d.coupon_code;
					$scope.couponMessage = response.m;
					$scope.subTotal = response.d.sub_total;
					$scope.totalDiscount = response.d.totol_discount;
					$scope.shippingAmount = response.d.shipping_amount;
					$scope.grandTotal = response.d.grand_total;
					$scope.discount = (1 - ($scope.grandTotal / $scope.subTotal)) * 100;
					console.log( (1 - ($scope.grandTotal / $scope.subTotal)) * 100 );
					//$discount = (1 - ($discountPrice / $productPrice)) * 100;
				})
				.error(function (err) {
					throw new Error(err);
				})

			}
		};

		$scope.removeCoupon = function() {
			console.log("click on removeCoupon");

			craftsvillaService.getRemoveCoupon($scope.coupon)
			.success(function (response) {
				$scope.successCoupon = false;
				console.log(response);
				$scope.couponMessage = response.m;
				$scope.subTotal = response.d.sub_total;
				$scope.totalDiscount = response.d.totol_discount;
				$scope.shippingAmount = response.d.shipping_amount;
				$scope.grandTotal = response.d.grand_total;
			})
			.error(function (err) {
				throw new Error(err);
			})

		};

		$scope.updateQuantity = function() {
			console.log("click on updateQuantity");
		};

		$scope.initCheckoutCart = function() {
			$scope.getCartDetails();
		}
		$scope.initCheckoutCart();
    }]);
});
