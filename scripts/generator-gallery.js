'use strict';

const pagination = require('hexo-pagination');

/* global hexo */

if (!(hexo.config.gallery && hexo.config.gallery.enabled === false)) {
  let per_page = 3;

  hexo.extend.generator.register('gallery', function (locals) {
    const config = this.config;
    let galleryDir = config.gallery_dir;
    const paginationDir = config.pagination_dir || 'page';
    const galleries = locals.data && locals.data.gallery
      ? locals.data.gallery.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      : [];
    const perPage = per_page;
    let result = [];

    if (!galleries.length) return;

    if (galleryDir[galleryDir.length - 1] !== '/') galleryDir += '/';

    function generate(path, posts, options) {
      options = options || {};
      options.index = true; // 提供 index 判断是否为相册首页
      result = result.concat(pagination(path, posts, {
        perPage: perPage,
        layout: ['custom-gallery'],
        format: paginationDir + '/%d/',
        data: options
      }));
    }
    generate(galleryDir, galleries);

    return result;
  });
}