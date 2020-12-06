module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter( "myFiltter", function() {})
  return {
  dir: {
    input: "src",
    output: "dist",
    includes: '_includes'
    },
  }
}
