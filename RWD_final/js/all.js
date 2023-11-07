$(document).ready(function() {
    // 現在頁面URL
    var currentURL = window.location.href;
    
    //分頁連結
    $(".menu a").each(function() {
        var linkURL = $(this).attr("href");
        
        // 如果連結URL跟目前的URL匹配
        if (currentURL.indexOf(linkURL) !== -1) {
            // 加上active語法
            $(this).addClass("active");    
        }
    });



    $('.fa-heart').click(function(){
        $(this).toggleClass("fa-solid") // 按愛心

    });



    $('.foodGroup .btn').mouseover(function(){
        $(this).find('.fa-cart-shopping').delay(100).toggleClass("active"); // 購物車變白色
    });

    $('.foodGroup .btn').mouseout(function(){
        $(this).find('.fa-cart-shopping').delay(100).removeClass("active"); // 清除所有白色購物車
    });



    $('.foodGroup .btn').click(function(){
        $("span.number").show() // 點擊購買購物車出現數字
    });



    $('.showmenu').on('click', function(event){  //手機漢堡按鈕下放
        event.preventDefault();
        //要執行的程式碼
        $('.menu').toggleClass('menu-show');


    });


    // 給 漢堡按鈕 的 a元素加上事件
    $(".showmenu").click(function(event) {
        event.preventDefault(); 

        //
        var icon = $(this).find("i");

        // 切換名稱"fa-bars"到"fa-xmark"
        if (icon.hasClass("fa-bars")) {
            icon.removeClass("fa-bars").delay(300).addClass("fa-xmark");
        } else {
            icon.removeClass("fa-xmark").delay(300).addClass("fa-bars");
        }
    });



    $('.foodList>a').on('click', function(event){  //手機漢堡按鈕下放
        event.preventDefault();
        //要執行的程式碼
        $('.foodList ul').delay().slideToggle(500);


    });

    $(".foodList>a").click(function(event) {
        event.preventDefault(); 

        //
        var icon = $(this).find("i.down");

        // 切換三角形名稱
        if (icon.hasClass("fa-sort-down")) {
            icon.removeClass("fa-sort-down").delay(2000).addClass("fa-sort-up");
        } else {
            icon.removeClass("fa-sort-up").delay(2000).addClass("fa-sort-down");
        }
    });

    






});