# 八字论命总纲 · 图-文-表格模板（Quarto + Mermaid + TikZ）

本模板用于：写作可复用的八字论命“总纲”，同时支持**文字说明、表格**与**循环/克制箭头图**。

## 组成
- `wuxing-outline.qmd`：主文档（Markdown + Mermaid 图）
- `styles/variables.scss`：HTML 主题配色（五行色）
- `styles/latex-preamble.tex`：PDF 编译时的 LaTeX 预加载（含 TikZ）
- `tikz/wuxing.tex`：独立可编译的 TikZ 五行“生/克”循环图（输出 PDF/SVG/PNG）

## 使用（简）
1. 安装 [Quarto] 与 LaTeX（任一 TeX 发行版）。
2. 终端进入此目录，运行：
   ```bash
   quarto render wuxing-outline.qmd
   ```
   将生成 `wuxing-outline.html`（和可选的 `wuxing-outline.pdf`，若有 LaTeX 环境）。
3. 若仅需高清矢量图，进入 `tikz/` 目录，编译：
   ```bash
   lualatex -shell-escape wuxing.tex   # 或 xelatex/pdflatex
   ```

## 结构建议
- 把你的“最简七步”“口袋口诀”“用神→行动映射表”直接填入 `wuxing-outline.qmd` 对应段落。
- 需要更精美的五行图时，替换 Mermaid 为 `tikz/wuxing.pdf` 的插图。

> 说明：本模板不依赖互联网；可放入 Git 仓库长期维护与版本化。
