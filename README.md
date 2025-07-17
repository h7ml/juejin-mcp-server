[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/h7ml-juejin-mcp-server-badge.png)](https://mseep.ai/app/h7ml-juejin-mcp-server)

# 掘金MCP服务器

<div align="center">

<!-- 核心信息徽章 -->
<div style="margin-bottom: 8px;">
  <a href="https://www.npmjs.com/package/juejin-mcp-server">
    <img src="https://img.shields.io/npm/v/juejin-mcp-server?style=flat-square&logo=npm&color=cb3837" alt="NPM Version" />
  </a>
  <a href="https://github.com/h7ml/juejin-mcp-server/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/h7ml/juejin-mcp-server/ci.yml?style=flat-square&logo=github&label=CI" alt="CI Status" />
  </a>
  <a href="https://github.com/h7ml/juejin-mcp-server/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/juejin-mcp-server?style=flat-square&color=green" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/juejin-mcp-server">
    <img src="https://img.shields.io/npm/dm/juejin-mcp-server?style=flat-square&logo=npm&color=blue" alt="Downloads" />
  </a>
</div>

<!-- 技术栈徽章 -->
<div>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/node/v/juejin-mcp-server?style=flat-square&logo=node.js&color=339933" alt="Node.js" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  </a>
  <a href="https://modelcontextprotocol.io/">
    <img src="https://img.shields.io/badge/MCP-1.1.3-purple?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="MCP" />
  </a>
  <a href="https://juejin.cn/">
    <img src="https://img.shields.io/badge/掘金-API-1e80ff?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="掘金" />
  </a>
</div>

</div>

🚀 为AI助手提供掘金内容智能分析能力的MCP服务器

## ⚡ 快速开始

### 一键启动

```bash
npx juejin-mcp-server
```

### MCP配置

```json
{
  "mcpServers": {
    "juejin-mcp": {
      "command": "npx",
      "args": ["juejin-mcp-server"]
    }
  }
}
```

### 立即体验

```text
AI指令: "帮我找5篇高质量的前端技术文章"
```

## 🛠️ 核心功能

- **34个专业工具** - 文章、沸点、分析、推荐、用户交互
- **一键访问** - 所有文章返回包含可点击URL，直接跳转掘金页面
- **智能分析** - AI驱动的内容质量评估和趋势预测
- **实时数据** - 掘金最新内容和热门趋势
- **即插即用** - 零配置启动，支持Cursor、Claude Desktop

## 📚 文档导航

| 文档类型      | 链接                                                                                         | 描述                   |
| ------------- | -------------------------------------------------------------------------------------------- | ---------------------- |
| 🚀 快速上手   | [5分钟教程](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/quick-start.md)         | 最快速的入门方式       |
| ⚙️ 安装配置   | [安装指南](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/installation.md)         | 详细安装和配置步骤     |
| 🖥️ 客户端配置 | [MCP客户端](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/mcp-clients.md)         | Cursor、Claude等配置   |
| 🛠️ 工具文档   | [34个工具](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/tools/README.md)         | 完整工具列表和使用说明 |
| 💡 使用指南   | [最佳实践](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/usage/best-practices.md) | 推荐使用方式和技巧     |
| 🔧 开发文档   | [贡献指南](https://github.com/h7ml/juejin-mcp-server/blob/main/CONTRIBUTING.md)              | 参与项目开发           |

## 🔗 快速链接

- 📦 [NPM包](https://www.npmjs.com/package/juejin-mcp-server)
- 🐛 [问题反馈](https://github.com/h7ml/juejin-mcp-server/issues)
- 💬 [讨论区](https://github.com/h7ml/juejin-mcp-server/discussions)
- 📖 [完整文档](https://github.com/h7ml/juejin-mcp-server/blob/main/docs/README.md)

## 🙏 致谢

- **掘金API接口** - 基于 [chenzijia12300/juejin-api](https://github.com/chenzijia12300/juejin-api) 项目提供的接口文档

---

**让AI助手拥有掘金内容分析能力！** 🚀
