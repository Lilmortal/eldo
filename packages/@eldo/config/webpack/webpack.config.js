const merge = require("webpack-merge");

const common = require("./webpack.common");
const dev = require("./webpack.dev");
const prod = require("./webpack.prod");

// type can be 'component' or 'app'
// mode = "DEV" || "PROD"
module.exports = ({
  dir,
  isApp = false,
  title = "",
  isProd = false,
}) => config => {
  return merge(
    common({ dir, isApp, title }),
    isProd ? prod({ dir }) : dev({ dir }),
    config
  );
};
