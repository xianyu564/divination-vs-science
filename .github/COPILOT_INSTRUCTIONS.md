# GitHub Copilot Instructions / GitHub Copilot 指令

> 本文件为GitHub Copilot提供项目特定的编码指导和上下文信息
> This file provides project-specific coding guidance and context information for GitHub Copilot

## 🎯 项目概述 / Project Overview

**项目名称**: 玄学是科学吗？/ Is Fortune-Telling Science?  
**项目定位**: 知识社区 + 创业冷启动的哲学框架知识仓库  
**核心理念**: 辩证开放理念与混合授权机制

**Project Name**: Is Fortune-Telling Science?  
**Project Positioning**: Knowledge Community + Startup Cold Start Philosophical Framework Repository  
**Core Philosophy**: Dialectical Open Philosophy & Hybrid Licensing Mechanism

## 🏗️ 项目架构 / Project Architecture

### 目录结构 / Directory Structure
```
.
├── knowledge/                   # 🧠 哲学思辨材料中心 / Philosophical Materials Center
│   ├── lectures/               # 讲座材料（探索传统智慧在当代科技社会中的意义）
│   ├── faq/                    # 常见问题（玄学与科学边界的哲学探讨）
│   ├── resources/              # 学术资源（人类智慧边界拓展的研究资料）
│   │   ├── academic/           # 论文、书籍、链接
│   │   └── readings/           # 延伸阅读
│   ├── consultation-service/   # 咨询服务（基于哲学框架的专业指导）
│   └── share-sample/           # 示例文件（公开可访问的样本）
├── docs/                       # 📚 技术文档中心 / Technical Documentation Center
│   ├── project-overview/       # 项目概述
│   ├── license-citation/       # 许可与引用
│   ├── sponsorship/            # 赞助支持
│   ├── contributing/           # 贡献指南
│   └── sponsors-list.md        # 赞助者名单
├── .github/                    # GitHub配置 / GitHub Configuration
│   ├── assets/                 # 图片资源（二维码等）
│   ├── templates/              # 模板文件
│   ├── workflows/              # 工作流
│   └── COPILOT_INSTRUCTIONS.md # 本文档
└── 根目录文件                   # 项目基础文件
```

## 🔧 技术栈与编码规范 / Tech Stack & Coding Standards

### 主要技术 / Main Technologies
- **文档格式**: Markdown (.md)
- **配置文件**: YAML (.yml), JSON (.json)
- **许可证**: MIT (代码), CC BY-NC-SA 4.0 (内容)
- **版本控制**: Git
- **平台**: GitHub

### 编码规范 / Coding Standards

#### Markdown 文件 / Markdown Files
- 使用中英文双语标题和内容
- 标题格式：`## 中文标题 / English Title`
- 代码块使用适当的语言标识
- 图片使用相对路径，存储在 `.github/assets/` 目录

#### 文件命名规范 / File Naming Convention
- **中英文合并文件**: `中文名_EnglishName.md`
- **长文档分离**: `中文名_EnglishName_[语种].md`
- **示例文件**: `[Sample] 文件名.扩展名`

#### 多语言支持 / Multilingual Support
- 中文版本是核心维护版本
- 英文版本作为参考，如有出入以中文为准
- 重要文档采用中英文对照格式

## 🌟 核心理念指导 / Core Philosophy Guidance

### 辩证开放理念 / Dialectical Open Philosophy
- **技术部分**: 保留商业价值，因为技术本身具有商业属性
- **哲学思辨**: 公开共享，因为这是人类智慧的边界拓展
- **最终目标**: 让传统智慧通过技术手段进一步到达人们身边
- **理想主义**: 通过技术的商业获利和通过智慧的公开共享，最终都服务于同一个理想

### 混合授权机制 / Hybrid Licensing Mechanism
- **代码部分**: 按 MIT 许可证完全开源
- **内容部分**: 按 CC BY-NC-SA 4.0 许可证（非商业使用，允许改编）
- **商业使用**: 需单独授权

## 📝 代码生成指导 / Code Generation Guidelines

### 当生成Markdown文档时 / When Generating Markdown Documents
1. **始终使用中英文双语标题**
2. **保持中英文内容的对应关系**
3. **使用项目特定的术语和概念**
4. **遵循现有的文档结构和格式**

### 当生成配置文件时 / When Generating Configuration Files
1. **使用标准的YAML/JSON格式**
2. **遵循GitHub的最佳实践**
3. **包含适当的注释和说明**
4. **确保配置的可维护性**

### 当生成工作流文件时 / When Generating Workflow Files
1. **使用GitHub Actions标准语法**
2. **包含适当的错误处理**
3. **优化性能和资源使用**
4. **添加清晰的步骤说明**

## 🚫 避免事项 / Things to Avoid

### 内容方面 / Content
- 不要生成商业敏感信息
- 不要包含具体的捐赠金额
- 不要生成医疗、法律、证券等高风险建议
- 不要承诺"准确率"或"确定性"

### 技术方面 / Technical
- 不要使用过时的技术或语法
- 不要生成不安全的代码
- 不要违反项目的许可证要求
- 不要破坏现有的文件结构

## 🔍 上下文理解 / Context Understanding

### 项目目标 / Project Goals
1. **知识社区建设**: 探讨玄学与科学关系的哲学思考平台
2. **创业项目支持**: Elephenotype象对论创业项目的哲学框架知识仓库
3. **智慧普惠**: 让传统智慧通过技术手段到达人们身边
4. **学术研究**: 推动人类智慧边界拓展

### 目标用户 / Target Users
- **学术研究者**: 对玄学与科学关系感兴趣的学者
- **哲学爱好者**: 探索传统智慧与现代科技融合的思考者
- **创业团队**: 基于哲学框架进行创业实践的团队
- **开源贡献者**: 愿意参与项目建设和发展的社区成员

## 📚 参考资源 / Reference Resources

### 项目文档 / Project Documentation
- [项目概述](../docs/project-overview/项目概述_Project-Overview.md)
- [许可与引用](../docs/license-citation/许可与引用_License-Citation.md)
- [赞助支持](../docs/sponsorship/赞助支持_Sponsorship-Support.md)
- [贡献指南](../docs/contributing/贡献指南_Contributing-Guide.md)

### 外部资源 / External Resources
- [Creative Commons Licenses](https://creativecommons.org/licenses/)
- [MIT License](https://opensource.org/licenses/MIT)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Markdown Guide](https://www.markdownguide.org/)

## 🤝 协作指导 / Collaboration Guidelines

### 与Copilot协作时 / When Collaborating with Copilot
1. **明确说明需求**: 详细描述您想要实现的功能
2. **提供上下文**: 说明代码的用途和目标
3. **审查生成内容**: 检查生成的代码是否符合项目规范
4. **迭代优化**: 根据反馈不断改进和完善

### 代码审查要点 / Code Review Points
- 是否符合项目的多语言要求
- 是否遵循辩证开放理念
- 是否包含适当的许可证信息
- 是否维护了项目的整体结构

---

**注意**: 本指令文件会随着项目发展持续更新，请定期查看最新版本。
**Note**: This instruction file will be continuously updated as the project develops. Please check for the latest version regularly.

**最后更新**: 2025年1月 / Last Updated: January 2025
