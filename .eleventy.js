module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/parts": "parts" });

  eleventyConfig.addFilter("categoryColor", function(cat) {
    const map = {
      "drivetrain":  "cat-drivetrain",
      "suspension":  "cat-suspension",
      "brakes":      "cat-brakes",
      "wheels":      "cat-wheels",
      "electrical":  "cat-electrical",
      "body":        "cat-body",
      "interior":    "cat-interior",
      "other":       "cat-other",
    };
    return map[(cat || "").toLowerCase()] || "cat-other";
  });

  return {
    pathPrefix: "/356parts/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
  };
};
