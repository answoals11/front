// next.config.js
const withTM = require("next-transpile-modules")([
  "antd",
  "rc-picker",
  "rc-util",
  "@ant-design/icons",
  "rc-pagination",
  "rc-notification",
])

module.exports = withTM({})
