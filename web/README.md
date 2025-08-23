# Web Portal / 网站门户

这个目录包含了"玄学与科学"项目的网站门户，提供SEO优化的多语言访问入口。

This directory contains the web portal for the "Divination vs Science" project, providing SEO-optimized multilingual access.

## 🌍 多语言支持 / Multilingual Support

- **[简体中文](index.html)** - 主要版本 / Primary version
- **[繁體中文](zh-tw/index.html)** - 港澳台用户 / Hong Kong, Macau, Taiwan users  
- **[English](en/index.html)** - 国际用户 / International users

## 🔍 SEO 优化 / SEO Optimization

- 多语言hreflang标签支持
- 结构化数据 (JSON-LD)
- Open Graph 和 Twitter Cards
- 学术搜索引擎优化
- 站点地图和robots.txt

## 📁 文件结构 / File Structure

```
web/
├── index.html          # 简体中文主页
├── zh-tw/
│   └── index.html      # 繁体中文版本
├── en/
│   └── index.html      # 英文版本
├── sitemap.xml         # 站点地图
├── robots.txt          # 搜索引擎指引
└── README.md           # 说明文档
```

## 🎯 设计理念 / Design Philosophy

- **保持根目录整洁** - 所有网站文件集中在单一目录
- **对应现有内容** - 链接到已有的knowledge和docs目录
- **中英双语对照** - 完整的多语言支持
- **运营导向** - 专注于内容发现和用户引导

## 🔗 内容映射 / Content Mapping

网站门户链接到项目的核心内容：

- 讲座材料 → `/knowledge/lectures/`
- 常见问题 → `/knowledge/faq/`
- 学术资源 → `/knowledge/resources/academic/`
- 咨询服务 → `/knowledge/consultation-service/`
- 术语词典 → `/docs/GLOSSARY.md`

## 🚀 部署说明 / Deployment

建议通过GitHub Pages部署，设置`/web`目录作为发布源。

Recommended deployment via GitHub Pages with `/web` directory as publishing source.

## 📞 联系 / Contact

如有问题，请在主项目仓库创建Issue或联系项目维护者。

For questions, please create an Issue in the main project repository or contact the project maintainer.