module.exports = {
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  printWidth: 120, // 单行长度
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'always', // 箭头函数单参数时包裹圆括号
  requirePragma: false, // 无需顶部注释即可格式化
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
  endOfLine: 'auto', // 不检查结束行形式
}
