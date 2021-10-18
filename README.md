# pdf-img-api

使用[pdf2image][pdf2image]，转换 pdf 生成 png 图片，依赖 GhostScript 与 GraphicsMagick。

## 快速开始

### 安装环境

#### Linux (Debian based)

```bash
$ sudo apt-get update
$ sudo apt-get install ghostscript
$ sudo apt-get install graphicsmagick
```

#### Mac OS

```bash
$ brew update
$ brew install gs graphicsmagick
```

#### Windows

- 下载安装 [Ghostscript 9.52][ghostscript952]，高于此版本可能会产生错误
- 下载安装 [GraphicsMagick][graphicsmagick]

并将目录设置到环境变量, (\*\*\*\*)表示版本号

`C:\Program Files\gs\gs****\bin`  
`C:\program files\graphicsmagick-****`

### 开发

关于服务端框架可查看 [egg docs][egg]

```bash
$ npm install
$ npm run dev
$ open http://localhost:7001/
```

### 部署

#### pm2

```bash
$ npm install -g pm2
$ npm install
$ pm2 start pm2.config.js
$ pm2 startup
$ pm2 save
```

windows 下无法执行 startup，需要安装 pm2-windows-startup

```bash
$ npm install -g pm2-windows-startup
```

执行

```bash
$ pm2-startup install
```

### npm 命令

- `npm run lint` 代码规范
- `npm test` 单元测试.
- `npm run autod` 升级依赖库，详情查看 [autod](https://www.npmjs.com/package/autod)

### 安全相关

项目为内部使用，已关闭 egg 的 csrf 校验，对外开通访问可能会产生安全问题。[查看详情][eggsecurity]

[egg]: https://eggjs.org
[ghostscript952]: https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/tag/gs952
[graphicsmagick]: http://ftp.icm.edu.pl/pub/unix/graphics/GraphicsMagick/windows
[pdf2image]: https://github.com/yakovmeister/pdf2image
[eggsecurity]: https://eggjs.org/zh-cn/core/security.html
