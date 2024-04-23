// スクロール時のイベントを追加
window.addEventListener('scroll', function(){
  // ウィンドウの幅が768px以下の場合は処理をスキップ
  if (window.innerWidth <= 960) return;

  // すべての.itemを取得
  const item = document.querySelectorAll('.top-img08');

  // querySelectorAll('.item')は配列になるので、for構文で取得
  for(let i = 0; i < item.length; i++){
      // .itemのオフセットの高さを取得
      var targetTop = item[i].offsetTop;

      // 画面のスクロール量 + 100px > .itemのオフセットの高さを取得
      if(window.scrollY + 100 > targetTop){
          // 書くitemにクラスshowを追加
          item[i].classList.add('show');
      }
  }
});