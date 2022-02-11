// const { deepMerge } = require('hexo-util');
// const watermark = require('../../../../component/watermark/index'); 

// const defaultOptions = {
//   // 保存的图片质量
//   quality: 80,
//   // 图片宽度小于 100 时不加水印
//   minWidth: 100,
//   // 图片高度小于 100 时不加水印
//   minHeight: 100,
//   // 旋转
//   rotate: 0,
//   // 水印 logo 图片
//   logo: '',

//   // 需要添加的图片类型
//   include: ['*.jpg', '*.jpeg', '*.png', '*.gif'],
//   // 文件名为  .watermark.png 禁止添加水印图片
//   exclude: ['*.watermark.*'],
//   // 文章链接，非文章链接不加水印
//   articlePath: /^\d{4}-\d{2}-\d{2}/,
// };

// hexo.config.watermark = deepMerge(defaultOptions, hexo.config.watermark);
// hexo.extend.filter.register('after_generate', watermark);