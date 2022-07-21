$(document).ready(function(){
        jQuery('a.tg_register_new').click(function(){
    jQuery('.popup_gift').modal('show');
    });
                  
    // click tinhnangthem
    $('.tab-content [class*="xemtinhnang"]').click(function(){
        $(this).closest('.tab-content').find('[class*="tinhnangthem"] , [class*="xtn"] , [class*="arrdown"] , [class*="arrup"]').toggle();
    });
    $(' [class*="tab-content_"] [class*="xemtinhnang"]   ').click(function(){
        $(this).closest('[class*="tab-content_"]').find('[class*="tinhnangthem"] , [class*="xtn"] , [class*="arrdown"] , [class*="arrup"]').toggle();
    });

  // click choose sub domain
  $('.click_search_dm .sub_search ul li').click(function(){
      var text_li = $(this).text();
      $('.tg_search_sop .search_nd_ft .click_search_dm h3').text(text_li);
      $('.vl_hidden').attr('value',text_li);
  });

  $('.search_nd_ft .click_search_dm').click(function(){
    $(this).toggleClass('tg_active_menu');
    $(this).siblings().removeClass('tg_active_menu');
    $(this).find('.sub_search').show();
});

  $('#btn_show_coupon_html ').click(function(){
      $('.fb_email, #fb_sendmail_coupon').show(300);
      $(this).hide();
  });
  $('.click_buy_domains').click(function(){
   var toggleHeight = $(this).parent().find('textarea').height() == 100 ? "98px" : "140px";
   $(this).parent().find('textarea').animate({ height: toggleHeight},200);
   if($(this).parent().find('textarea').val()){
      $(this).parent().find('.search_domains').hide();
  }
  else{
      $(this).parent().find('.search_domains').show();
  }
  $(this).hide();
});
  $('.search_dm textarea').focus(function(){
   $(this).parent().find('.search_domains').hide();
});
  $('.search_domains').click(function(){
   $(this).hide();
   $(this).parent().find('textarea').focus();
});

  $('.btn_scroll_botton').click(function(e){
   e.preventDefault();
   $('html,body').animate({
      scrollTop: $('.promotion_cp_ver2_top').offset().top -50
  },1000);
});
  $('.big_sale_vn_sale_258 .col-sm-4 .text_big_sale_nsx a').click(function (e){
    e.preventDefault();
    $('.bg_opacity').hide();

    $('html, body').animate({
        scrollTop: $(".tg_program_rules_nsx").offset().top
    }, 500);
}); 

  $( ".tg_promotion_1609_ft>a" ).click(function() {
      $( ".tg_search_sop .search_nd_ft textarea" ).focus();
  });
         // show hide tab-content
         $(document).on('click', '.show_hide_tab li', function () {
          var el_main = $(this).closest('.show_hide_tab_parent');
          var tab_id = $(this).attr('data-tab');
      // $(this).addClass('current').siblings().removeClass('current');
      var currentTab =  $(el_main).find("#" + tab_id).addClass('current');
      $(currentTab).siblings().removeClass('current');    
  });
     // show ul li hosting duy nhat

     $('ul.tab_content_ssd_hosting_ver2_nd li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tab_content_ssd_hosting_ver2_nd li').removeClass('current_d');
        $('.tab-content_d').removeClass('current_d');
        $(this).addClass('current_d');
        $("#"+tab_id).addClass('current_d');
    });
     $('ul.tab_content_ssd_hosting_ver3_nd li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tab_content_ssd_hosting_ver3_nd li').removeClass('current_t');
        $('.tab-content_t').removeClass('current_t');
        $(this).addClass('current_t');
        $("#"+tab_id).addClass('current_t');
    });
     $('.tab_content_ssd_hosting_ver2_ft ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab_content_ssd_hosting_ver2_ft ul li').removeClass('currents_g');
        $('.tabs-contents_g').removeClass('currents_g');
        $(this).addClass('currents_g');
        $("#"+tab_id).addClass('currents_g');
    });
     $('.hh_hosting_duynhat ul.show_hide_tab>li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.hh_hosting_duynhat ul.show_hide_tab>li').removeClass('currents');
        $('.tabs-contents').removeClass('currents');
        $(this).addClass('currents');
        $("#"+tab_id).addClass('currents');
    });
     $('.qb_bg_ht_em ul.show_hide_tab>li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.qb_bg_ht_em ul.show_hide_tab>li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
     $('.hh_tinhnang_noibat ul.show_hide_tab>li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.hh_tinhnang_noibat ul.show_hide_tab>li').removeClass('hh_current');
        $('.tab-content').removeClass('hh_current');
        $(this).addClass('hh_current');
        $("#"+tab_id).addClass('hh_current');
    });
     $('ul.ssd_hosting_nd li').click(function(){
        var ssd_hosting_tab_id = $(this).attr('data-tab');
        $('ul.ssd_hosting_nd li').removeClass('currents');
        $('.tab-contents').removeClass('currents');
        $(this).addClass('currents');
        $("#"+ssd_hosting_tab_id).addClass('currents');
    });
     $('ul.tabs_special li').click(function(){
        var failover_tab_id = $(this).attr('data-tab');
        $('ul.tabs_special li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+failover_tab_id).addClass('current');
    })
     $('#hh-tnnb-5 .ct_left>.tnnb_botton_line:nth-child(1) .expand_ver2 ').show();
     $('#hh-tnnb-5 .ct_left>.tnnb_botton_line:nth-child(1)').find('.arrup').show().siblings('.arrdown').hide();
     $('.tnnb_botton_line').click(function(e){
        var gen_hosting_tab_id = $(this).attr('data-tab');
        $('.tnnb_botton_line').removeClass('gen_current');
        $('.tab-content').removeClass('gen_current');
        $(this).addClass('gen_current');
        $("#"+gen_hosting_tab_id).addClass('gen_current');
        $(this).find('.expand_ver2').slideToggle();
        $(this).find('.arrup').toggle();
        $(this).find('.arrdown').toggle();
        $(this).siblings().find('.arrup').hide().siblings('.arrdown').show();
        $('.tnnb_botton_line').not(this).find('.expand_ver2').slideUp();
        $(this).find('.expand_ver2').click(function(e){
          e.stopPropagation();
      });
    }) ;
     // end show ul li hosting duy nhat
              // copy ma sale
              $(document).on('click', 'a.qb_copy_code', function(event) {
                event.preventDefault();
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val($(this).prev().text()).select();
                document.execCommand("copy");
                $temp.remove();
                $('.qb_copy_code').text('Copy mA£');
                $(this).text('ƒêA£ sao chA©p');
            });
    // end copy ma sale
    jQuery('.hh_menu_header ul li a').click(function(e){
        e.preventDefault();
    });
        jQuery('#menu_mobile_hosting_bcn_2022 ul li a').click(function(e){
        e.preventDefault();
    });
    jQuery(window).scroll(function () {
        var window_top = jQuery(this).scrollTop();
        jQuery(".menu [class*='diem']").each(function(){
         var neoindext=jQuery(this).find('a').attr('rel');
         var neoclass= jQuery(".tg_target"+neoindext);
     });
    });
    function scroll_to(div){
        jQuery('html, body').animate({
         scrollTop: jQuery(div).offset().top -20
     },1000);
    }
    jQuery('.hh_menu_header ul li').click(function(event){
        event.preventDefault();
        var neoindext=jQuery(this).find('a').attr('rel');
        scroll_to(".tg_target"+neoindext);
        jQuery(".menu  [class*='diem']").removeClass('active');
        jQuery(this).addClass('active');
        return true;
    });
    $(document).on('click','.top_page_btn ',function(event){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(".qb_bg_ht_em ").offset().top},
        'slow');
  });
    jQuery('#menu_mobile_hosting_bcn_2022 ul li').click(function(event){
        event.preventDefault();
        var neoindext=jQuery(this).find('a').attr('rel');
        scroll_to(".tg_target"+neoindext);
        jQuery(".menu  [class*='diem']").removeClass('active');
        jQuery(this).addClass('active');
        return true;
    });
});