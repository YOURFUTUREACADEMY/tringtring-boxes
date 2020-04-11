module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/css/style.css');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/*.png');
    eleventyConfig.addPassthroughCopy('./src/*.ico');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');

    eleventyConfig.addLayoutAlias('homePage', 'templates/homePage.njk');
    eleventyConfig.addLayoutAlias('voorwPrivacy', 'templates/voorwPrivacy.njk');


    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            layouts: '_layouts',
            includes: '_includes',
            output: 'dist'
        }
    };
};
