# 象数宇宙观 Playbook / Xiangshu Cosmos Playbook

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/xianyu564/divination-vs-science)](https://github.com/xianyu564/divination-vs-science/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/xianyu564/divination-vs-science)](https://github.com/xianyu564/divination-vs-science/network)
[![GitHub issues](https://img.shields.io/github/issues/xianyu564/divination-vs-science)](https://github.com/xianyu564/divination-vs-science/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/xianyu564/divination-vs-science)](https://github.com/xianyu564/divination-vs-science/pulls)

## 🌍 语言版本 / Language Versions
**[English](README_EN.md)** | **[中文](README.md)** | **[更多语言 / More Languages](LANGUAGES.md)**

> 演讲幻灯片 / 讲者笔记 / 延伸阅读 | Lecture Slides / Speaker Notes / Extended Readings  
> Startup 产品设计的指导思想与方法论 | Guiding Philosophy & Methodology for Startup Product Design

## 🌏 项目简介 / Project Overview

### 中文 (Chinese)
本仓库公开汇集我关于**东方术数(命理、占卜、风水)**的系统化思考与应用实践：  
- 讲座用 **Slides**（PDF/PPTX）  
- 对应的 **讲者笔记**（逐页提词/口播稿）  
- 面向读者与产品团队的 **延伸阅读**（学术门牌、方法论）

同时，这也是我在创业中的**产品设计 Playbook**：把"**象数化的启发式与相关宇宙观**"作为**情境建模工具**，在可测部分拥抱证据，在不可测部分降低断言、明确边界与复盘机制。

### English
This repository openly compiles my systematic thinking and practical applications regarding **Eastern divination systems (numerology, fortune-telling, feng shui)**:
- Lecture **Slides** (PDF/PPTX)
- Corresponding **Speaker Notes** (page-by-page prompts/scripts)
- **Extended Readings** for readers and product teams (academic references, methodologies)

This is also my **Product Design Playbook** for startups: using "**numerological heuristics and related cosmological views**" as **situational modeling tools**, embracing evidence in measurable aspects while reducing assertions in unmeasurable aspects, with clear boundaries and review mechanisms.  

---

## 🧭 指导思想 / Guiding Principles

### 中文 (Chinese)
1. **象数是技术语言**：用干支、卦爻、罗盘等把"理/气、时空与感应关系"编码成可操作的符号系统，贯穿认知与决策流程。  
2. **启发式，而非自然因果律宣称**：本仓库不把术数包装为可重复的自然因果法则；它是**组织信息与生成行动备选**的启发式框架。  
3. **可测先测，不可测启发式**：凡涉及空间/心理/行为等可量化维度尽量采证；其余以启发式建议呈现，并设置**回看/复盘**节点。  
4. **伦理与边界**：不替代医学/法律/金融合规；不做结果承诺；尊重隐私，反对任何"邪教化"利用。  
5. **产品即方法**：我的创业项目将以上原则固化为**设计规范、交互与风控**（详见下文"对产品的承诺"）。

### English
1. **Numerology as Technical Language**: Encode "principles/qi, spatiotemporal and resonance relationships" into operational symbol systems using stems-branches, hexagrams, compass, etc., throughout cognitive and decision-making processes.
2. **Heuristic, Not Natural Causality Claims**: This repository does not package numerology as repeatable natural causal laws; it is a heuristic framework for **organizing information and generating action alternatives**.
3. **Measure First, Then Heuristics**: For quantifiable dimensions involving space/psychology/behavior, prioritize evidence; present others as heuristic suggestions with **review/retrospective** checkpoints.
4. **Ethics and Boundaries**: Do not replace medical/legal/financial compliance; make no outcome promises; respect privacy, oppose any "cult-like" exploitation.
5. **Product as Method**: My startup projects solidify the above principles into **design specifications, interactions, and risk controls**.

---

## 📂 目录结构 / Directory Structure

```
.
├── slides/                    # 幻灯片 / Lecture slides (PDF/PPTX)
│   └── Is Divination Science 玄学是科学吗？20250822.*
├── speaker-notes/             # 讲者笔记 / Speaker notes (page-by-page prompts/scripts)
├── readings/                  # 延伸阅读 / Extended readings (academic references, methodologies)
├── templates/                 # 模板文件 / Template files (.pptx/.md)
├── assets/                    # 资源文件 / Assets (diagrams, illustrations, vectors)
├── .github/                   # GitHub 配置 / GitHub configurations
│   ├── FUNDING.yml           # 赞助配置 / Sponsorship configuration
│   ├── ISSUE_TEMPLATE.md     # Issue 模板 / Issue template
│   ├── pull_request_template.md # PR 模板 / Pull request template
│   ├── WeChat Sponsor Code.jpg  # 微信赞助码 / WeChat sponsor QR code
│   └── SG PayNow Sponsor Code.jpg # PayNow 赞助码 / PayNow sponsor QR code
├── LICENSE-CONTENT           # 内容许可证 / Content license (CC BY-NC-ND 4.0)
├── LICENSE-CODE              # 代码许可证 / Code license (MIT)
├── CITATION.cff              # 引用元数据 / Citation metadata (for academic citation)
├── CONTRIBUTING.md           # 贡献指南 / Contributing guide
├── CODE_OF_CONDUCT.md        # 行为准则 / Code of conduct
├── SECURITY.md               # 安全策略 / Security policy
├── PROJECT_STATUS.md         # 项目状态 / Project status
└── README.md                 # 项目说明 / Project documentation
```


## 🧪 产品应用实践 / Product Application Practice

### 中文 (Chinese)
- **定位**：把东方术数视为**"象数化的情境建模器"**，用于**不确定情境下的决策支持与体验设计**（而非自然因果律的黑箱承诺）。
- **设计准则**  
  - 信息架构：以"**时（节律）—位（空间）—象（状态）**"三轴组织界面与数据。  
  - 决策支持：输出**行动选项**而非单一结论；为每个建议配置**可验证指标**与**回看时间点**。  
  - 证据分层：可量化维度采用 A/B、用户研究与可观测指标；不可量化维度明确为**启发式**，并标注不确定度。  
  - 伦理/风控：不触达敏感/高风险场景（医疗/法律/证券）；展现**免责声明**与求助指引。
- **工程化**：将"象数编码"抽象为**可复用组件**（时间坐标=干支/节气模型；空间坐标=方位/尺度；状态机=卦爻变迁），结合现代数据与可观测指标进行**校准与复盘**。  
- **团队规范**：README-first 与 CITATION-first ——先写清**愿景、范围与引用**再写实现（README 先行有助于对齐目标）。

### English
- **Positioning**: Treat Eastern numerology as a **"numerological situational modeler"** for **decision support and experience design in uncertain contexts** (rather than black-box promises of natural causality).
- **Design Principles**  
  - Information Architecture: Organize interfaces and data along **"Time (rhythm) — Position (space) — Symbol (state)"** three axes.
  - Decision Support: Output **action options** rather than single conclusions; configure **verifiable metrics** and **review timepoints** for each suggestion.
  - Evidence Layering: Use A/B testing, user research, and observable metrics for quantifiable dimensions; present non-quantifiable dimensions as **heuristics** with uncertainty annotations.
  - Ethics/Risk Control: Avoid sensitive/high-risk scenarios (medical/legal/securities); display **disclaimers** and help guidance.
- **Engineering**: Abstract "numerological encoding" into **reusable components** (time coordinates = stems-branches/solar terms models; spatial coordinates = directions/scales; state machines = hexagram transitions), combined with modern data and observable metrics for **calibration and retrospection**.
- **Team Standards**: README-first and CITATION-first — clarify **vision, scope, and citations** before implementation (README-first helps align goals).

---

## 🧾 许可与引用（License & Citation）

### 📄 许可证说明 (License Information)
- **内容许可 (Content License)**: 文字、图片、幻灯片与讲义采用 **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** 许可
  - ✅ 允许：署名后分享、教育使用、学术引用
  - ❌ 禁止：商业使用、二次演绎、修改分发
  - 🔗 许可证详情：[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
  
- **代码许可 (Code License)**: 脚本、工具和技术实现采用 **MIT License**，遵循开源社区标准
  - ✅ 允许：商业使用、修改、分发、私人使用
  - 📋 要求：保留版权声明和许可证声明
  - 🔗 许可证详情：[MIT License](https://opensource.org/licenses/MIT)

- **引用文献 (Referenced Materials)**: 已有文献按原文献版权进行转载引用，遵循原始许可条款

### 📚 学术引用 (Academic Citation)
仓库根目录提供 `CITATION.cff`，便于学术工具（如 GitHub、Zotero）自动识别引用元数据。

### 🌍 多语言说明 (Multilingual Information)
- 中文版许可证说明：见 `LICENSE-CONTENT`
- English license information: See `LICENSE-CONTENT`

---

## 🧱 贡献与沟通（Contributing）

欢迎提交 **Issues / PR**：

* 勘误与增补幻灯片引用
* 翻译/精简延伸阅读
* 模板与资产改进
  建议遵循通用的 README/写作规范（分节清晰、给出使用方法与目的）。

---

## 🧩 免责声明与边界 / Disclaimers & Boundaries

### 中文 (Chinese)
* 不提供医疗、法律、证券等**高风险建议**；不替代专业服务。
* 不承诺"灵验率""因果性"与"确定性"；所有方法以**启发式—复盘**方式呈现。
* 尊重学术资料的版权与署名规范；严格引用来源。
* **引用文献遵循原文献版权**：转载引用的已有文献按原文献许可条款执行。
* **内容仅限开源社区传播**：禁止商业使用和二次演绎。

### English
* Do not provide **high-risk advice** in medical, legal, securities, etc.; do not replace professional services.
* Do not promise "accuracy rates," "causality," or "certainty"; all methods are presented in **heuristic-retrospective** manner.
* Respect copyright and attribution standards for academic materials; strictly cite sources.
* **Referenced literature follows original copyright**: Reprinted referenced existing literature follows original license terms.
* **Content distribution limited to open source communities**: Commercial use and derivative works prohibited.

---

## 🗺️ 路线图 / Roadmap

### 版本 1.0.0 / Version 1.0.0
* [ ] 整理《玄学是科学吗？》全套讲稿与讲义 / Complete lecture materials for "Is Divination Science?"
* [ ] 上线模板：Slides（Keynote/PowerPoint）、讲者笔记（Markdown） / Release templates: Slides (Keynote/PowerPoint), Speaker Notes (Markdown)
* [ ] 建立社区贡献流程 / Establish community contribution process
* [ ] 完善中英双语文档 / Complete bilingual documentation

### 版本 1.1.0 / Version 1.1.0  
* [ ] 添加更多讲座内容 / Add more lecture content
* [ ] 开发自动化工具 / Develop automation tools
* [ ] 建立学术合作网络 / Establish academic collaboration network
* [ ] 多语言支持扩展 / Expand multilingual support

---

## 💝 赞助支持（Sponsorship & Support）

### 🎯 赞助性质声明 (Sponsorship Nature)
**重要说明**: 本项目的赞助**并非用作盈利收益**，而是对作者研究工作的支持与认可。支付即表达您对作者学术探索和知识分享的支持。

**Important Note**: Sponsorship for this project is **NOT for profit**, but rather support and recognition for the author's research work. Payment expresses your support for the author's academic exploration and knowledge sharing.

### 🌟 GitHub Sponsors
[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Support%20Me-red?style=for-the-badge&logo=github)](https://github.com/sponsors/xianyu564)

### 💰 其他支付方式 (Alternative Payment Methods)
- **微信支付 (WeChat Pay)**: 扫描下方二维码
- **PayNow**: 新加坡本地银行转账 (Singapore local bank transfer)

<div align="center">
  <img src=".github/WeChat Sponsor Code.jpg" alt="微信赞助码 WeChat Sponsor Code" width="200" />
  <img src=".github/SG PayNow Sponsor Code.jpg" alt="PayNow赞助码 PayNow Sponsor Code" width="200" />
</div>

### 🎯 支持用途 (Support Usage)
您的支持将用于 / Your support will be used for：
- 📚 持续更新讲座内容与学术资料 / Continuous updates of lecture content and academic materials
- 🛠️ 开发开源工具与模板 / Development of open source tools and templates  
- 🎪 举办线下/线上分享活动 / Organizing offline/online sharing events
- 🔬 支持相关学术研究 / Supporting related academic research
- 📖 维护开源社区资源 / Maintaining open source community resources

### 📋 透明度承诺 (Transparency Commitment)
- 所有赞助资金仅用于上述学术和社区目的
- 定期在项目状态文件中公布资金使用情况
- 保持项目的非商业性质和开放性

All sponsorship funds are used only for the above academic and community purposes
Regular disclosure of fund usage in project status files
Maintain the non-commercial nature and openness of the project

---

## 🙏 致谢与参考 / Acknowledgments & References

### 📚 文档规范参考 / Documentation Standards
* [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) - GitHub 文档写作建议 / GitHub documentation writing guidelines
* [CITATION.cff](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files) - GitHub 引用文件规范 / GitHub citation file standards
* [Creative Commons Licenses](https://creativecommons.org/licenses/) - 知识共享许可证 / Creative Commons licensing

### 🌟 社区贡献者 / Community Contributors
感谢所有为本项目做出贡献的朋友们！/ Thanks to all contributors to this project!

### 🏛️ 学术致谢 / Academic Acknowledgments
* 新加坡国立大学 / National University of Singapore
* 相关学术机构和研究者 / Related academic institutions and researchers

### 🛠️ 技术支持 / Technical Support
* GitHub - 代码托管与协作平台 / Code hosting and collaboration platform
* Creative Commons - 开放许可证框架 / Open licensing framework
* Markdown - 文档格式标准 / Documentation format standard

