var strSiteURL = "http://asatir.info/"
//var strSiteURL = "http://172.20.10.2:801/"
function reLoadPages() {
    $(".ipage,.nocatchpage").height($('html').height() + 10);
    $.ajax(strSiteURL + "ping.asp", {
        timeout: 5000,
        beforeSend: function (xhr) {
            $('.ipage').html('<div class="reload"><i class="fa fa-refresh fa-spin"></i>در حال اتصال به سرور...</div>');
            $(".reload").height($('html').height() - 160);
        },
        error: function () {
            $('.ipage').html('<div class="reload" onclick="reLoadPages()"><i class="fa fa-refresh"></i>عدم دسترسی به اینترنت</div>');
            $(".reload").height($('html').height() - 160);
        },
        success: function () {
            $('.ipage').each(function () {
                $(this).find('.reload').html('<i class="fa fa-refresh fa-spin"></i>در حال دریافت اطلاعات...');
                $(this).append('<iframe src="' + strSiteURL + 'agency/directlogin.asp" onload="$(this).show(); removeLoading();" style="display:none;"></iframe>');
                $("iframe").height($('html').height());
            });
        }
    })
}

function removeLoading() {
    $('.reload').remove();
}

$(document).ready(function () {
    reLoadPages();
    $(window).resize(function () {
        $("iframe").height($('html').height());
        $(".ipage,.nocatchpage").height($('html').height()+10);
        $(".reload").height($('html').height() - 160);
    });
});
$(document).bind("mobileinit", function () {
    $.mobile.allowCrossDomainPages = true;
});