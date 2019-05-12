const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#fd403e', // 全局主色
      // '@success-color': '#4fc2b9',                         // 成功色
      // '@font-size-base': '14px',                         // 主字号
      // '@heading-color': 'rgba(0, 0, 0, .85)',              // 标题色
      // '@text-color': 'rgba(0, 0, 0, .65)',              // 主文本色
      // '@text-color-secondary' : 'rgba(0, 0, 0, .45)',      // 次文本色
      // '@border-color-base': '#d9d9d9',                     // 边框色
      // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)'  // 浮层阴影}
    }
  })
);
