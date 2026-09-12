module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/warehouse/");
  eleventyConfig.addGlobalData("warehousePhotos", () => {
    const fs = require("node:fs");
    const path = require("node:path");
    return fs.readdirSync(path.join(__dirname, "src/assets/warehouse"), { withFileTypes: true })
      .filter(file => file.isFile() && /\.(jpe?g|png|webp|gif|avif)$/i.test(file.name))
      .map(file => file.name).sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  });
  eleventyConfig.addPassthroughCopy("src/parts/**/images/*");
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addFilter("encodeUri", value => encodeURIComponent(value));

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
