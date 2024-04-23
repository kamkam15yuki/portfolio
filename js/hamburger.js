document.addEventListener('DOMContentLoaded', function() {
    const menuBtnCheck = document.getElementById('menu-btn-check');
    const menuContent = document.querySelector('.menu-content');

    menuBtnCheck.addEventListener('change', function() {
        menuContent.classList.toggle('active'); // メニューを開閉するためのクラスを追加/削除
    });
});