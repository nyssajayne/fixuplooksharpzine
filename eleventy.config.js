export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');

    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/js');

    eleventyConfig.addCollection('pages', (collection) => {
        return collection
            .getFilteredByGlob('./src/pages/*.md')
            .sort((a, b) => (Number(a.data.pageNo) > Number(b.data.pageNo) ? 1 : -1));
    });

  eleventyConfig.addWatchTarget("./src/css/");
}

export const config = {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
};
