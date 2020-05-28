$(function () {
	// nav
	var url = location.href;
	var last = url.lastIndexOf('.html');
	var fileName = url.substring(url.lastIndexOf('/') + 1, last);
	var $thisNav = $(".nav a[href*='" + fileName + "']");
	if ($thisNav.length > 0) {
		$('.nav li').removeClass('active');
		$thisNav.eq(0).addClass('active');
	} else {
		$('.nav li a').eq(0).addClass('active');
	}

	// 状态栏上滚动吸顶
	var a = $(document).scrollTop(); // 先获取滚动条起始距离顶部位置
	var timer = null;
	$(window).scroll(function () {
		timer && clearTimeout(timer);
		timer = setTimeout(function () {
			a = $(document).scrollTop(); // 重置滚动条的起始位置
			if (a >= 100) {
				$('#header').addClass('fixed-top');
			} else {
				$('#header').removeClass('fixed-top');
			}
		}, 30);
	});
});
