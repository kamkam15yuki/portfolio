$(window).on('load',function(){
    $("#splash").delay(1200).fadeOut('slow', function() {
        // ローディング画面が完全に非表示になった後に実行する処理
        $("#main").fadeIn('slow');
    }); // ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
  