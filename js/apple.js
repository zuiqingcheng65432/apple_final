$(function () {
    $(".boxy").click(function () {
        $(document.body).toggleClass("yin");
        $(".ku").slideToggle("slow");
        $(".gang11").toggleClass("gang1");
        $(".gang22").toggleClass("gang2");
        $(".gang22").toggleClass("gang222");
    });

    $(".icon-gouwuche").click(function () {
        $(".right").toggleClass("display2");
    })
    $(".coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("tran");

    })
    
	$(".icon-iconsousuo").click(function(){
		$("a.iconfont.icon-gouwuche").css("opacity","0");
		$(".inputs").css("opacity",1);
		$(".none").css("opacity","0");
		$("a.iconfont.icon-iconsousuo.none2").css("opacity",1);
		$("a.iconfont.icon-iconsousuo.none2").css("right",1000);
		$(".none_info").css("opacity",1);
		$(".none_info").css("right",800);
		$(".icon-cuowu1").css("opacity","1");
		$(".icon-cuowu1").css("z-index","999");
	})
	$(".icon-cuowu1").click(function(){
		$("a.iconfont.icon-gouwuche").css("opacity",1);
		$(".inputs").css("opacity",0);
		$(".none").css("opacity",1);
		$("a.iconfont.icon-iconsousuo.none2").css("opacity",0);
		$("a.iconfont.icon-iconsousuo.none2").css("right",362);
		$(".none_info").css("opacity",0);
		$(".none_info").css("right",100);
		$(".icon-cuowu1").css("opacity",0);
		$(".icon-cuowu1").css("z-index",-1);
	})
})



