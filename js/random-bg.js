(function() {
  // 讀取明亮與暗色模式背景圖資料夾路徑
  const lightImages = [
  '/img/bg-light/bg_1.webp',
  '/img/bg-light/bg_2.webp',
  '/img/bg-light/bg_3.webp',
  '/img/bg-light/bg_4.webp',
  '/img/bg-light/bg_5.webp',
  '/img/bg-light/bg_6.webp',
  ];

  const darkImages = [
  '/img/bg-dark/bg_1.webp',
  '/img/bg-dark/bg_2.webp',
  '/img/bg-dark/bg_3.webp',
  '/img/bg-dark/bg_4.webp',
  '/img/bg-dark/bg_5.webp',
  ];

  // 取得隨機圖片
  function getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
  }

  // 設定 CSS 變數
  function setRandomBackground() {
    const root = document.documentElement;
    const lightBg = `url(${getRandomImage(lightImages)})`;
    const darkBg = `url(${getRandomImage(darkImages)})`;

    root.style.setProperty('--background-img-light', lightBg);
    root.style.setProperty('--background-img-dark', darkBg);
  }

  setRandomBackground();
})();