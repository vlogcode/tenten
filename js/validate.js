// Check validate domain
function checkDomainmkt() {
   
    var txt1 = $("#domainNameSingleInput").val();
    txt1 = $.trim(txt1);
    var array_domain = txt1.split('\n');
    var total_domain = array_domain.length;
    if (txt1 == "") {
        showModalMessege('Nhập tên miền cần kiểm tra!','TENTEN','#ca1515');
        return;
    }
    if (total_domain > 30) {
        showModalMessege('Chỉ có thể đăng ký tối đa 30 tên miền!','TENTEN','#ca1515');
        return;
    }
    var alert = "Tên miền chỉ chứa các ký tự a-z, 0-9, dấu - và các ký tự tiếng việt có mũ, dấu trong bảng mã Unicode dựng sẵn(theo TCVN 6909-2001)";
    for (var i = 0; i < total_domain; i++) {
    	var text = CheckOneDomain(array_domain[i],alert);
    	if (!text) {
    		return false;
    	}

    }

    var inputCrfs = '<input type="hidden" name="_csrfToken" value="'+crsf+'">';
    $("#formSearchDomain").append(inputCrfs);
    $("#formSearchDomain").submit();
}

/*$('#domainNameSingleInput').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('.btn_check_domain_name').click();
    return false;  
  }
});*/   

function checkDomainmkt_d() {
   
    var txt1 = $("#domainNameSingleInput").val();
    txt1 = $.trim(txt1);
    if (txt1 == "") {
        showModalMessege('Nhập tên miền cần kiểm tra!','TENTEN','#ca1515');
        return;
    }

    var array_domain = txt1.split('.');
    if (array_domain[array_domain.length - 1] != 'com' && array_domain[array_domain.length - 1] != 'net' ){
        showModalMessege('Chỉ áp dụng tên miền .com hoặc .net!','TENTEN','#ca1515');
        return;
    }

    var alert = "Tên miền chỉ chứa các ký tự a-z, 0-9, dấu - và các ký tự tiếng việt có mũ, dấu trong bảng mã Unicode dựng sẵn(theo TCVN 6909-2001)";

    var text = CheckOneDomain(txt1,alert);
    if (!text) {
        return false;
    }


    var inputCrfs = '<input type="hidden" name="_csrfToken" value="'+crsf+'">';
    $("#formSearchDomain").append(inputCrfs);
    $("#formSearchDomain").submit();
}

function CheckOneDomain(str,$alert){
	str=str.replace(/\s+/gi,'');
	str=str.replace(/\,+/gi,'',str);
	str=str.replace(/^\s+/gi,'');
	if(str.length<2){
		showModalMessege('Tên miền phải lớn hơn 1 ký tự','TENTEN','#ca1515');
		return false;
	}
    if(str.length>63){
        showModalMessege('Tên miền phải bé hơn hoặc bằng 63 ký tự','Thông báo','#ca1515');
        return false;
    }
	tmpstr=RemoveUnicode(str);
	var pattern1=/^([^a-z0-9]+)/gi;
	var pattern2=/([^a-z0-9]+)$/gi;
	var pattern3=/([^a-z0-9\.\-\s]+)/gi;
	if(pattern1.test(tmpstr)||pattern2.test(tmpstr)||pattern3.test(tmpstr)){
		showModalMessege($alert,'TENTEN','#ca1515');
		return false;
	}
	$codau=IsUnicode(str);
	if(str.lastIndexOf(',')!=-1){
		str=str.replace(/\,+/gi,',',str);
	}
	return true;
}

function IsUnicode(text){
	var unicode=[{'key':'a','value':'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ'},{'key':'d','value':'đ'},{'key':'e','value':'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ'},{'key':'i','value':'í|ì|ỉ|ĩ|ị'},{'key':'o','value':'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ'},{'key':'u','value':'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự'},{'key':'y','value':'ý|ỳ|ỷ|ỹ|ỵ'},{'key':'A','value':'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ'},{'key':'D','value':'Đ'},{'key':'E','value':'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ'},{'key':'I','value':'Í|Ì|Ỉ|Ĩ|Ị'},{'key':'O','value':'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ'},{'key':'U','value':'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự'},{'key':'Y','value':'Ý|Ỳ|Ỷ|Ỹ|Ỵ'}];
	for(vars in unicode){
		return new RegExp(unicode[vars].value,'g').test(text);
	}
	return text;
}
function RemoveUnicode(text){
	var unicode=[{'key':'a','value':'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ'},{'key':'d','value':'đ'},{'key':'e','value':'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ'},{'key':'i','value':'í|ì|ỉ|ĩ|ị'},{'key':'o','value':'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ'},{'key':'u','value':'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự'},{'key':'y','value':'ý|ỳ|ỷ|ỹ|ỵ'},{'key':'A','value':'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ'},{'key':'D','value':'Đ'},{'key':'E','value':'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ'},{'key':'I','value':'Í|Ì|Ỉ|Ĩ|Ị'},{'key':'O','value':'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ'},{'key':'U','value':'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự'},{'key':'Y','value':'Ý|Ỳ|Ỷ|Ỹ|Ỵ'}];
	for(vars in unicode){
		text=text.replace(new RegExp(unicode[vars].value,'g'),unicode[vars].key);
	}
	return text;
}
function CheckMulti() {
    var $test = true;
    var $array = $(".listdomain").val().split("\n");
    if ($array.length > 0) {
        $tmparray = new Array();
        for (i = 0; i < 5; ++i) {
            if ($array[i] != null && $array[i] != "") {
                $test = CheckOneDomain($array[i], "Tên miền chỉ chứa các ký tự a-z, 0-9, dấu - và các ký tự tiếng việt có mũ, dấu trong bảng mã Unicode dựng sẵn(theo TCVN 6909-2001)");
                if (!$test) {
                    return false;
                }
            }
        }
    }
    return true;
}

function showModalMessege(content = '', title = '', color = ''){
    content === ''?content = 'Vui lòng thêm nội dung !': content;
    title === ''?title= 'TENTEN THÔNG BÁO': title;
    color === ''?color= '#0033FF': color;
    jQuery('#popup_notyfy').remove();
    var element_modal = '<div class="modal fade" id="popup_notyfy" data-backdrop="static" data-keyboard="false" >\
        <div class="modal-dialog content_popup">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                    <h4 class="modal-title" id="myModalLabel">'+title+'</h4>\
                </div>\
                <div class="modal-body">\
                    <input type="hidden" class="key_del"/>\
                    <p class="text_del" style="color: '+color+';font-size: 16px;">'+content+'</p>\
                    <p class="debug-url"></p>\
                </div>\
                <div class="modal-footer">\
                    <input type="button" class="close_popup_123" data-dismiss="modal" aria-hidden="true" value="Đóng">\
                </div>\
            </div>\
        </div>\
    </div>';

    $('body').append(element_modal);
    $('#popup_notyfy').modal('show');
}