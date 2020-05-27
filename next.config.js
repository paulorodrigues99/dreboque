const sitemap = require('nextjs-sitemap-generator'); 
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
});

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'https://daniloreboque.netlify.app/',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});
