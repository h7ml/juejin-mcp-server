# 工具完整列表

## 🛠️ 34个专业工具概览

掘金MCP服务器提供34个专业工具，涵盖内容获取、智能分析、个性化推荐等全方位功能。

## 📊 工具分类统计

| 分类                             | 工具数量 | 主要功能                 |
| -------------------------------- | -------- | ------------------------ |
| [文章工具](./articles.md)        | 7个      | 文章获取、搜索、质量分析 |
| [沸点工具](./pins.md)            | 5个      | 沸点获取、话题分析       |
| [分析工具](./analytics.md)       | 9个      | 趋势分析、内容洞察       |
| [推荐工具](./recommendations.md) | 7个      | 智能推荐、个性化服务     |
| [用户工具](./users.md)           | 6个      | 用户交互、授权管理       |
| [性能工具](./performance.md)     | 5个      | 系统监控、性能优化       |

## 🔥 推荐工具

### ⭐ 最受欢迎的工具

| 工具名称                     | 功能描述         | 推荐指数   | 文档链接                                                    |
| ---------------------------- | ---------------- | ---------- | ----------------------------------------------------------- |
| `get_articles`               | 获取技术文章列表 | ⭐⭐⭐⭐⭐ | [详细文档](./articles.md#get_articles)                      |
| `get_simple_recommendations` | 简化版智能推荐   | ⭐⭐⭐⭐⭐ | [详细文档](./recommendations.md#get_simple_recommendations) |
| `get_simple_trends`          | 简化版趋势分析   | ⭐⭐⭐⭐⭐ | [详细文档](./analytics.md#get_simple_trends)                |
| `analyze_article_quality`    | 文章质量分析     | ⭐⭐⭐⭐⭐ | [详细文档](./articles.md#analyze_article_quality)           |

### 🎯 场景化推荐

**内容发现场景：**

- `get_articles` + `get_article_recommendations`
- `search_articles` + `analyze_article_quality`

**趋势分析场景：**

- `get_simple_trends` + `analyze_content_trends`
- `get_trending_articles` + `get_hot_topics`

**用户交互场景：**

- `check_auth_status` + `get_user_profile`
- `like_article` + `collect_article`

## 📋 完整工具列表

### 📝 文章工具 (7个)

| 工具名称                      | 功能描述                   | 需要授权 |
| ----------------------------- | -------------------------- | -------- |
| `get_articles`                | 获取文章列表，支持分类筛选 | ❌       |
| `search_articles`             | 搜索相关文章内容           | ❌       |
| `get_article_recommendations` | 个性化文章推荐             | ❌       |
| `analyze_article_quality`     | 文章质量多维度分析         | ❌       |
| `get_trending_articles`       | 热门文章趋势               | ❌       |
| `get_simple_trends`           | 简化版趋势分析             | ❌       |
| `get_latest_articles`         | 获取最新文章               | ❌       |

### 📌 沸点工具 (5个)

| 工具名称                  | 功能描述           | 需要授权 |
| ------------------------- | ------------------ | -------- |
| `get_pins`                | 获取沸点动态列表   | ❌       |
| `search_pins`             | 搜索沸点内容       | ❌       |
| `get_pin_recommendations` | 个性化沸点推荐     | ❌       |
| `analyze_pin_trends`      | 沸点趋势统计       | ❌       |
| `get_hot_topics`          | 获取热门话题和标签 | ❌       |

### 📊 分析工具 (9个)

| 工具名称                      | 功能描述                  | 需要授权 |
| ----------------------------- | ------------------------- | -------- |
| `get_simple_trends`           | 🔥 简化版趋势分析（推荐） | ❌       |
| `analyze_content_trends`      | 深度内容趋势分析          | ❌       |
| `get_trending_articles`       | 热门文章趋势              | ❌       |
| `analyze_pin_trends`          | 沸点趋势统计              | ❌       |
| `get_trend_analysis`          | 综合趋势报告              | ❌       |
| `analyze_content_quality`     | 通用内容质量评估          | ❌       |
| `compare_content_performance` | 内容表现对比分析          | ❌       |
| `get_content_insights`        | 内容洞察分析              | ❌       |
| `generate_analytics_report`   | 生成分析报告              | ❌       |

### 🎯 推荐工具 (7个)

| 工具名称                       | 功能描述                  | 需要授权 |
| ------------------------------ | ------------------------- | -------- |
| `get_simple_recommendations`   | 🔥 简化版智能推荐（推荐） | ❌       |
| `get_article_recommendations`  | 个性化文章推荐            | ❌       |
| `get_pin_recommendations`      | 个性化沸点推荐            | ❌       |
| `get_trending_recommendations` | 基于趋势的推荐            | ❌       |
| `get_recommendations`          | 多算法综合推荐            | ❌       |
| `get_user_recommendations`     | 用户个性化推荐            | ❌       |
| `generate_user_report`         | 生成用户报告              | ❌       |

### 👤 用户工具 (6个)

| 工具名称            | 功能描述     | 需要授权 |
| ------------------- | ------------ | -------- |
| `check_auth_status` | 检查登录状态 | ❌       |
| `get_user_profile`  | 获取用户资料 | ✅       |
| `like_article`      | 点赞文章     | ✅       |
| `like_pin`          | 点赞沸点     | ✅       |
| `collect_article`   | 收藏文章     | ✅       |
| `follow_user`       | 关注用户     | ✅       |

### ⚡ 性能工具 (5个)

| 工具名称                    | 功能描述     | 用途 |
| --------------------------- | ------------ | ---- |
| `get_performance_stats`     | 性能统计信息 | 监控 |
| `get_cache_stats`           | 缓存使用情况 | 调试 |
| `get_system_health`         | 系统健康检查 | 诊断 |
| `optimize_performance`      | 性能优化     | 调优 |
| `run_performance_benchmark` | 性能基准测试 | 测试 |

## 🚀 快速开始

### 基础使用示例

```json
{
  "tool": "get_articles",
  "arguments": {
    "limit": 5,
    "include_quality_score": true
  }
}
```

### 高级功能示例

```json
{
  "tool": "get_simple_recommendations",
  "arguments": {
    "interests": ["前端", "Vue", "React"],
    "limit": 10
  }
}
```

## 📖 详细文档

每个工具都有详细的文档说明，包括：

- **功能描述** - 工具的具体功能和用途
- **参数说明** - 所有可用参数和默认值
- **返回格式** - 返回数据的结构和字段说明
- **使用示例** - 实际的调用示例和结果
- **最佳实践** - 推荐的使用方式和注意事项

点击上方的分类链接查看各类工具的详细文档。

## 💡 使用建议

1. **新手推荐** - 从简化版工具开始：`get_simple_*` 系列
2. **性能优先** - 合理设置 `limit` 参数，避免超时
3. **功能组合** - 结合多个工具实现复杂功能
4. **授权功能** - 配置Cookie解锁高级交互功能

## 🔧 故障排除

如果工具调用失败，请检查：

1. **网络连接** - 确保能访问掘金API
2. **参数格式** - 检查参数类型和格式
3. **授权状态** - 需要授权的工具检查Cookie配置
4. **系统状态** - 使用性能工具检查系统健康状态

## 🙏 API来源致谢

本项目的掘金API接口基于开源项目：

- **[chenzijia12300/juejin-api](https://github.com/chenzijia12300/juejin-api)** - 提供了完整的掘金平台API接口文档

感谢原作者的开源贡献，让我们能够为MCP用户提供这些强大的工具。
