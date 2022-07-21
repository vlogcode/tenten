jQuery( document ).ready(function($) {

	

	    jQuery('a.tg_register_new').click(function(){
    jQuery('.popup_gift').modal('show');
    });
	jQuery(document).on('click','.tmth_btn',function(event){
		event.preventDefault();
		jQuery('html,body').animate({
			scrollTop: $(".tg_preferential_domain").offset().top},
			'slow');
	});
	jQuery(document).on('click','.tmhosting_btn',function(event){
		event.preventDefault();
		jQuery('html,body').animate({
			scrollTop: $(".tg_code_hosting_nsx").offset().top},
			'slow');
	});
	jQuery(document).on('click','.tmhemail_btn',function(event){
		event.preventDefault();
		jQuery('html,body').animate({
			scrollTop: $(".tg_combo_price_ft ").offset().top},
			'slow');
	});
	    // menu test
	    // jQuery('body').append(` <div class="show_test_menu">Menu</div>
	    // 	<div class="qb_test_menu">
	    // 	<ul>
	    // 	<li><a href="index.html">1. Trang chủ</a></li>
	    // 	<li><a href="lich-su-hinh-thanh.html">2. Lịch sử hình thành</a></li>
	    // 	<li><a href="contact.html">3. Liên hệ</a></li>
	    // 	<li><a href="combo-uu-dai.html">4. Combo ưu đãi</a></li>
	    // 	<li><a href="blog.html">5. Blog</a></li>
	    // 	</ul>
	    // 	</div>`);
	    // jQuery('.show_test_menu').click(function() {
	    // 	jQuery('.qb_test_menu').toggle(300);
	    // });
    // end menu test
	     // show hide tab-content
	     $(document).on('click', '.show_hide_tab li', function () {
	     	console.log(1);
	     	var el_main = $(this).closest('.show_hide_tab_parent');
	     	var tab_id = $(this).attr('data-tab');
	     	jQuery(this).addClass('current').siblings().removeClass('current');
	     	var currentTab =  $(el_main).find("#" + tab_id).addClass('current');
	     	jQuery(currentTab).siblings().removeClass('current');    
	     });
	     $(document).on('click', '.show_hide_tab li a', function (e) {
	     	e.preventDefault();
	     });
         // copy ma sale
         jQuery(document).on('click', 'a.copy_coupon', function(event) {
         	event.preventDefault();
         	var $temp = $("<input>");
         	jQuery("body").append($temp);
         	$temp.val($(this).prev().text()).select();
         	document.execCommand("copy");
         	$temp.remove();
         	jQuery('.copy_coupon').text('Copy mã');
         	jQuery(this).text('Đã copy');
         });
    // end copy ma sale
    	 // menu mobile
    	 jQuery(".icon_mobile_click").click(function(){
    	 	jQuery(this).fadeOut(300);
    	 	jQuery("#menu_mobile_lp_18102021").addClass('menu_show').stop().animate({left: "0px"},260);
    	 	jQuery(".close_menu, .bg_opacity").show();
    	 });
    	 jQuery(".close_menu").click(function(){
    	 	jQuery(" .icon_mobile_click").fadeIn(300);
    	 	jQuery("#menu_mobile_lp_18102021").animate({left: "-260px"},260).removeClass('menu_show');
    	 	jQuery(this).hide();
    	 	jQuery('.bg_opacity').hide();
    	 });
    	 jQuery('.bg_opacity').click(function(){
    	 	jQuery("#menu_mobile_lp_18102021").animate({left: "-260px"},260).removeClass('menu_show');
    	 	jQuery('.close_menu').hide();
    	 	jQuery(this).hide();
    	 	jQuery('.icon_mobile_click').fadeIn(300);
    	 });
    	 jQuery("#menu_mobile_lp_18102021 ul li a").click(function(){
    	 	jQuery(".icon_mobile_click").fadeIn(300);
    	 });
    	 jQuery('.mobile-menu .menu>li:not(:has(ul.sub-menu)) , .mobile-menu .menu>li ul.sub-menu>li:not(:has(ul.sub-menu))').addClass('not-have-child');
        // menu cap 2
        jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').click(function(){
        	jQuery(this).children('ul').slideToggle();
        	jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
        	jQuery(this).siblings().find('ul.sub-menu>li').has('ul.sub-menu').removeClass('editBefore_mobile');
        }).children('ul').children().click(function(event){event.stopPropagation();});
        //menu cap 3
        jQuery('.mobile-menu ul.menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function(){
        	jQuery(this).children('ul.sub-menu').slideToggle();
        }).children('ul').children().click(function(event){event.stopPropagation();});
            //menu cap 4
            jQuery('.mobile-menu ul.menu>li>ul.sub-menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function(){
            	jQuery(this).children('ul.sub-menu').slideToggle();
            }).children('ul').children().click(function(event){event.stopPropagation();});
            jQuery('.mobile-menu ul.menu li').has('ul.sub-menu').click(function(event){
            	jQuery(this).toggleClass('editBefore_mobile');
            });
            jQuery('.mobile-menu ul').children().has('ul.sub-menu').addClass('menu-item-has-children');
            jQuery('.mobile-menu ul.menu>li').click(function(){
            	jQuery(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
            });
            // end  menu mobile
            // menu desktop
                    // menu cap 2
                    jQuery('.menu_sub>ul').children().has('ul.sub-menu').click(function(){
                    	jQuery(this).children('ul').slideToggle();
                    	jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
                    	jQuery(this).siblings().find('ul.sub-menu>li').has('ul.sub-menu').removeClass('editBefore_mobile');
                    }).children('ul').children().click(function(event){event.stopPropagation();});
                    jQuery('.menu_sub>ul').children().has('ul.sub-menu').addClass('menu-item-has-children');
                    jQuery('.menu_sub>ul>li').click(function(){
                    	jQuery(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
                    });
            // end  menu desktop
            jQuery('.slide_price_domain ul').slick({
            	dots: true,
            	infinite: true,
            	speed: 300,
            	slidesToShow: 3,
            	slidesToScroll: 1,
            	autoplay: false,
            	arrow: true,
            	dots: false,
            	autoplaySpeed: 5000,
			// fade: true,
			cssEase: 'linear',
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					arrow: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrow: false,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrow: false,
					slidesToScroll: 1
				}
			}
			]
		});

	// slide items services home
	if(jQuery('.kt-slil-index').length>0){
		jQuery('.kt-slil-index').slick({
			slidesToShow: 1	,
			slidesToScroll: 1,
			// autoplay: true,
			autoplaySpeed: 2000,
		});
	}

	if(jQuery('.price-slide').length>0){
		jQuery('.price-slide').slick({
			dots: false,
						infinite: true,
						speed: 300,
						slidesToShow: 7,
						slidesToScroll:3,
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 3,
								infinite: true
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						}

						]
		});
	}
	if(jQuery('.domain-sl').length>0){
		jQuery('.domain-sl').slick({
			dots: false,
						infinite: true,
						speed: 300,
						slidesToShow: 8,
						slidesToScroll:3,
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 3,
								infinite: true
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						}
						

						]
		});
	}
	if(jQuery('.slide').length>0){
		jQuery('.slide').slick({
			lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1
		});
	}
				// slide items services home
				if(jQuery('.tg_administrative_nx ul').length>0){
					jQuery('.tg_administrative_nx ul').slick({
						dots: false,
						arrows:true,
						infinite: false,
						speed: 300,
						slidesToShow: 4,
						slidesToScroll: 1,
						responsive: [
						{
							breakpoint: 1025,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
						]
					});
				}

				// slide items services home
				if(jQuery('.tg_general_manager_nx ul').length>0){
					jQuery('.tg_general_manager_nx ul').slick({
						dots: false,
						arrows:true,
						infinite: false,
						speed: 300,
						slidesToShow: 4,
						slidesToScroll: 1,
						responsive: [
						{
							breakpoint: 1025,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								infinite: true
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
						]
					});
				}

				// slide items services home
				if(jQuery('.kh_domain_sop ul').length>0){
					jQuery('.kh_domain_sop ul').slick({
						dots: false,
						arrows:true,
						infinite: false,
						speed: 300,
						slidesToShow: 2,
						slidesToScroll: 1,
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								infinite: true
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
						]
					});
				}
	// end js new home 2021
	 // Scroll top 
	 jQuery('#page-top').click(function (){
	 	jQuery('html, body').animate({
	 		scrollTop: jQuery("html").offset().top
	 	}, 1000);
	 }); 

	 var width = jQuery(window).width();
	 if(width>1024){
	 	jQuery('[class*="detail_banner"]').on('mouseover mouseout',function(){
	 		jQuery(this).toggleClass('current');
	 	});
	 	jQuery('.banner_smaller a').on('mouseover mouseleave',function(e){
	 		e.preventDefault();
	 		var data_id = jQuery(this).attr('data-hv');
	 		jQuery('#'+ data_id).toggleClass('current');
	 	});
	 }
	 else{
	 	jQuery('.banner_smaller a').on('click',function(e){
	 		e.preventDefault();
	 		jQuery('.bg_opacity').show();
	 		var data_id = jQuery(this).attr('data-hv');
	 		jQuery('#'+ data_id).addClass('current');
	 		jQuery(this).siblings().removeClass('current');
	 		jQuery('#' + data_id).find('.ico_close').click(function(){
	 			jQuery(this).closest('.tab-content').removeClass('current');
	 			jQuery('.bg_opacity').hide();
	 		});
	 	});
	 } 

	 

	 jQuery('.btn_regist_now').click(function (e){
	 	e.preventDefault();
	 	jQuery('.bg_opacity').hide();
	 	
	 	jQuery('html, body').animate({
	 		scrollTop: jQuery(".tg_search_sop").offset().top-100
	 	}, 500);
	 }); 


	 jQuery(".search_mg #domainNameSingleInput").keydown(function (e) {
	 	if (e.keyCode == 13 && !e.shiftKey) {
	 		var check_search_many = jQuery('.click_buy_domains').attr('data-id');
	 		if (check_search_many == 1) {

	 		} else {
	 			$('#formSearchDomain').submit();
	 			e.preventDefault();
	 			return false;
	 		}
	 	}
	 });
	 jQuery('.click_buy_domains').click(function(){
	 	var toggleHeight = $(".tg_wrap_search, .bg_search").height() == 100 ? "68px" : "120px";
	 	jQuery('.tg_wrap_search , .bg_search').animate({ height: toggleHeight},200);
	 	jQuery('.search_mg .textarea').addClass('qb_padding');
	 	jQuery('#txt_search_new').hide();
	 	if(jQuery('#domainNameSingleInput').val()){
	 		jQuery('#search_domains').hide();
	 	}
	 	else{
	 		jQuery('#search_domains').show();
	 	}

	 	jQuery(this).hide();
	 	jQuery(this).attr('data-id', 1);
	 });

	 // menu for tester
  // jQuery('body').append(`<div class="show_menu_tg">Menu</div>
	// <div class="menu_tg"><h3>Menu </h3>
	// <ul>
	// <li><a href="index.html">Trang chủ</a> </li>
	// <li><a href="about_us.html">Công ty</a></li>
	// <li><a href="ten-mien-vn.html">Tên miền .VN</a> </li>
	// <li><a href="ten-mien-com-net.html">Tên miền COM |NET</a> </li>
	// <li><a href="hosting.html">Hosting</a> </li>
	// <li><a href="email_server.html">Email server</a> </li>
	// <li><a href="combo-uu-dai.html">Tin khuyến mãi</a> </li>
	// <li><a href="blog.html">Tin tức</a> </li>
	// <li><a href="contact.html">Liên hệ</a> </li>
	// </ul>
	// </div>`);
  //   jQuery('.show_menu_tg').click(function() {
	// jQuery('.menu_tg').toggle(300);
  //    });

	});


	
	 