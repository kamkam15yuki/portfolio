window.addEventListener('scroll', function(){
  // ウィンドウの幅が特定の値以下の場合は処理を行わない
  if(window.innerWidth <= 960) {
      return;
  }

  //すべての.itemを取得
  const item = document.querySelectorAll('.top-all-logo');

  //querySelectorAll('.item')は配列になるので、for構文で取得
  //配列は0から始まるのでi = 0
  //i < item.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
  for(let i = 0; i < item.length; i++){

      //.itemのオフセットの高さを取得
      var targetTop = item[i].offsetTop;

      //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
      if(window.scrollY + 650 > targetTop){

          //書くitemにクラスshowを追加
          item[i].classList.add('show');
      }
  }
});