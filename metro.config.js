const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { 
  input: "./global.css",
  configPath: "./tailwind.config.js",
  inlineStyles: true // This can help with some theme switching issues
});
