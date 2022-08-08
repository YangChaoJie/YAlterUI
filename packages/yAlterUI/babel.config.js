module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { optimize: false, enableObjectSlots: false }]
  ],
}
