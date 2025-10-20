(function() {
  // 讀取明亮與暗色模式背景圖資料夾路徑
  const lightImages = [
  '/img/bg-light/bg-light-1.webp',
  '/img/bg-light/bg-light-2.webp',
  '/img/bg-light/bg-light-3.webp',
  '/img/bg-light/bg-light-4.webp',
  '/img/bg-light/bg-light-5.webp',
  '/img/bg-light/bg-light-6.webp',
  '/img/bg-light/bg-light-7.webp',
  '/img/bg-light/bg-light-8.webp',
  '/img/bg-light/bg-light-9.webp',
  '/img/bg-light/bg-light-10.webp',
  '/img/bg-light/bg-light-11.webp',
  '/img/bg-light/bg-light-12.webp',
  '/img/bg-light/bg-light-13.webp',
  '/img/bg-light/bg-light-14.webp',
  '/img/bg-light/bg-light-15.webp'
];

  const darkImages = [
  '/img/bg-dark/bg-dark-1.webp',
  '/img/bg-dark/bg-dark-2.webp',
  '/img/bg-dark/bg-dark-3.webp',
  '/img/bg-dark/bg-dark-4.webp',
  '/img/bg-dark/bg-dark-5.webp',
  '/img/bg-dark/bg-dark-6.webp',
  '/img/bg-dark/bg-dark-7.webp',
  '/img/bg-dark/bg-dark-8.webp',
  '/img/bg-dark/bg-dark-9.webp',
  '/img/bg-dark/bg-dark-10.webp',
  '/img/bg-dark/bg-dark-11.webp',
  '/img/bg-dark/bg-dark-12.webp',
  '/img/bg-dark/bg-dark-13.webp',
  '/img/bg-dark/bg-dark-14.webp',
  '/img/bg-dark/bg-dark-15.webp'
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