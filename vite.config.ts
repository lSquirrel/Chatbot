// vite.config.ts
import path from 'path';
import { defineConfig } from 'vite';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  build: {
    // 打包输出的目录
    outDir: 'lib',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    copyPublicDir: false,
    lib: {
      // 组件库源码的入口文件
      entry: resolve('packages/index.ts'),
      // 组件库名称
      name: 'react-chatbot',
      // 文件名称, 打包结果: react-chatbot.umd.cjs
      fileName: 'react-chatbot'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  }
})
