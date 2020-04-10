module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/*.png");
    eleventyConfig.addPassthroughCopy("./src/*.ico");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/manifest.json");

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}