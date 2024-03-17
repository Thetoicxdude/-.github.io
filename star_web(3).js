// 获取所有导航栏链接
let navLinks = document.querySelectorAll('.navbar a');

// 遍历所有链接，并为每个链接添加点击事件监听器
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 先移除所有链接上的 active 类
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // 然后将点击的链接添加 active 类
        this.classList.add('active');
    });
});
