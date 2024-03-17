  // 获取幻灯片容器、幻灯片项、切换按钮、指示器
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');
  
  // 更新幻灯片项的数量
  let lengthItems = 6; // 7 张图片，数组索引从 0 开始，所以数量为 6
  
  // 计算幻灯片项的数量和初始活动项
  let active = 0;
  
  // 点击下一张按钮
  next.onclick = function(){
      active = active + 1 <= lengthItems ? active + 1 : 0; // 如果活动项小于等于最后一张，则增加活动项，否则重置为第一张
      reloadSlider(); // 重新加载幻灯片
  }
  
  // 点击上一张按钮
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : lengthItems; // 如果活动项大于等于第一张，则减少活动项，否则重置为最后一张
      reloadSlider(); // 重新加载幻灯片
  }
  
  // 自动播放幻灯片
  let refreshInterval = setInterval(()=> {next.click()}, 3000);
  
  // 重新加载幻灯片
  function reloadSlider(){
      slider.style.left = -items[active].offsetLeft + 'px'; // 设置幻灯片容器的左侧偏移量来显示当前活动项
  
      // 更新指示器状态
      let last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval); // 清除自动播放的定时器
      refreshInterval = setInterval(()=> {next.click()}, 3000); // 重新设置自动播放的定时器
  }
  
  // 点击指示器切换幻灯片
  dots.forEach((li, key) => {
      li.addEventListener('click', ()=>{
           active = key; // 设置活动项为点击的指示器项的索引
           reloadSlider(); // 重新加载幻灯片
      })
  })
  
  // 窗口大小改变时重新加载幻灯片
  window.onresize = function(event) {
      reloadSlider();
  };