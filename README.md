# 拾色 Site

> Life Palette 官方站点 — 协议、隐私政策与支持页面

## 预览

🔗 https://life-palette.github.io/site/

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页 Landing |
| `/support` | 支持与常见问题 |
| `/user-protocol` | 用户协议 |
| `/privacy-policy` | 隐私政策 |

## 技术栈

- [Astro](https://astro.build/) — 静态站点生成
- MDX — 内容驱动页面
- GitHub Actions — 自动部署至 GitHub Pages

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # 输出到 ./dist
pnpm preview    # 预览构建产物
```

## 部署

推送到 `main` 分支后自动通过 GitHub Actions 构建并部署到 GitHub Pages。

## License

© 2026 Life Palette. All rights reserved.
