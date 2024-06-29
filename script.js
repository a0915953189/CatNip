// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 在這裡添加更多互動功能
    // 例如: 載入成員資料、播放視頻、顯示攻略等
});