module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("src/assets/project/");
  eleventyConfig.addGlobalData("projectPhoto", () => {
    const fs = require("node:fs");
    const path = require("node:path");
    return fs.readdirSync(path.join(__dirname, "src/assets/project"), { withFileTypes: true })
      .filter(file => file.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(file.name))
      .map(file => file.name).sort()[0] || "";
  });
  // Keep archived warehouse photos out of the published site.
  for (const entry of require("node:fs").readdirSync(require("node:path").join(__dirname, "src/assets"))) {
    if (entry !== "warehouse") eleventyConfig.addPassthroughCopy("src/assets/" + entry);
  }
  eleventyConfig.addPassthroughCopy("src/parts/**/images/*");
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addFilter("encodeUri", value => encodeURIComponent(value));
  eleventyConfig.addFilter("partCategories", part => {
    const value = part.categories ?? part.category ?? [];
    return [...new Set((Array.isArray(value) ? value : [value])
      .filter(cat => typeof cat === "string")
      .map(cat => cat.trim().toLowerCase()).filter(Boolean))];
  });

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
