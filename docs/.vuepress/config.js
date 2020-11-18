module.exports = {
  base: '',
  dest: './dist',
  title: '面试题',
  description: '',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '基础',
        collapsable: false,
        children: [
          'basic/closure',
          'basic/currying',
        ]
      },
      {
        title: 'es6',
        collapsable: false,
        children: [
          'es6/promise'
        ]
      },
      // {
      //   title: '网络',
      //   collapsable: false,
      //   children: [
          
      //   ]
      // },
      // {
      //   title: '框架',
      //   collapsable: false,
      //   children: [

      //   ]
      // }
    ]
  }
}