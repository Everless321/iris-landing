# iris-landing

Iris 项目介绍页 — Next.js 16 + Tailwind v4，静态导出，部署在 Cloudflare Pages。

## 开发

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 产物在 ./out
```

## 部署（Cloudflare Pages）

- Build command: `npm run build`
- Build output: `out`
- 已配 `next.config.ts` 走 `output: "export"`，无需 SSR
