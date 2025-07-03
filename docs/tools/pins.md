# 沸点工具文档

## 📌 沸点工具概览

沸点工具提供5个专业工具，用于获取掘金沸点动态、话题分析和社区互动内容。沸点是掘金社区的动态分享功能，包含技术讨论、经验分享、行业动态等。

## 🛠️ 工具列表

### 1. get_pins - 获取沸点列表

**功能描述**: 获取掘金沸点动态列表，支持分类和排序

**参数说明**:
- `limit` (number, 可选): 返回沸点数量，默认10，最大50
- `sort_type` (string, 可选): 排序方式，"newest"(最新)、"hottest"(最热)、"recommended"(推荐)
- `topic_id` (string, 可选): 话题ID筛选
- `include_comments` (boolean, 可选): 是否包含评论数据

**使用示例**:
```json
{
  "tool": "get_pins",
  "arguments": {
    "limit": 15,
    "sort_type": "hottest",
    "include_comments": true
  }
}
```

**返回格式**:
```json
{
  "pins": [
    {
      "pin_id": "7234567890123456789",
      "content": "今天学习了Vue 3的Composition API，感觉比Options API更灵活...",
      "author": {
        "user_id": "123456",
        "username": "前端小王",
        "avatar": "https://avatar.url",
        "level": 5
      },
      "digg_count": 156,
      "comment_count": 23,
      "view_count": 1200,
      "topic": {
        "topic_id": "6809637767543259144",
        "title": "Vue.js",
        "color": "#4fc08d"
      },
      "images": ["https://image1.url", "https://image2.url"],
      "ctime": "2025-07-03T10:30:00Z",
      "comments": [
        {
          "comment_id": "789012345",
          "content": "同感，Composition API确实很强大",
          "author": "技术达人",
          "digg_count": 12,
          "ctime": "2025-07-03T11:00:00Z"
        }
      ]
    }
  ],
  "total": 500,
  "has_more": true
}
```

### 2. search_pins - 搜索沸点

**功能描述**: 根据关键词搜索相关的沸点内容

**参数说明**:
- `keyword` (string, 必需): 搜索关键词
- `limit` (number, 可选): 返回结果数量，默认10
- `time_range` (number, 可选): 时间范围(天)，默认30
- `sort_type` (string, 可选): 排序方式，"relevance"(相关性)、"newest"(最新)、"hottest"(最热)

**使用示例**:
```json
{
  "tool": "search_pins",
  "arguments": {
    "keyword": "React Hooks 最佳实践",
    "limit": 20,
    "time_range": 7,
    "sort_type": "relevance"
  }
}
```

### 3. get_pin_recommendations - 沸点推荐

**功能描述**: 基于用户兴趣的个性化沸点推荐

**参数说明**:
- `interests` (array, 可选): 兴趣标签数组
- `limit` (number, 可选): 推荐数量，默认10
- `exclude_topics` (array, 可选): 排除的话题ID
- `min_engagement` (number, 可选): 最低互动数

**使用示例**:
```json
{
  "tool": "get_pin_recommendations",
  "arguments": {
    "interests": ["前端开发", "Vue.js", "性能优化"],
    "limit": 12,
    "min_engagement": 10
  }
}
```

### 4. analyze_pin_trends - 沸点趋势分析

**功能描述**: 分析沸点的趋势和热度变化

**参数说明**:
- `time_range` (number, 可选): 分析时间范围(小时)，默认24
- `topic_filter` (array, 可选): 话题筛选
- `include_sentiment` (boolean, 可选): 是否包含情感分析
- `group_by` (string, 可选): 分组方式，"topic"(话题)、"time"(时间)、"author"(作者)

**使用示例**:
```json
{
  "tool": "analyze_pin_trends",
  "arguments": {
    "time_range": 72,
    "topic_filter": ["前端", "后端", "AI"],
    "include_sentiment": true,
    "group_by": "topic"
  }
}
```

**返回格式**:
```json
{
  "analysis_period": "72小时",
  "total_pins": 1250,
  "trends": [
    {
      "topic": "前端",
      "pin_count": 456,
      "growth_rate": 15.6,
      "avg_engagement": 23.4,
      "hot_keywords": ["Vue 3", "TypeScript", "Vite"],
      "sentiment": {
        "positive": 78,
        "neutral": 18,
        "negative": 4
      }
    }
  ],
  "trending_topics": [
    {
      "topic_id": "6809637767543259144",
      "title": "Vue.js",
      "growth": 25.3,
      "heat_score": 89.2
    }
  ],
  "insights": [
    "Vue 3相关讨论热度持续上升",
    "TypeScript在前端社区接受度越来越高",
    "性能优化话题关注度增加"
  ]
}
```

### 5. get_hot_topics - 热门话题

**功能描述**: 获取当前热门话题和标签

**参数说明**:
- `limit` (number, 可选): 返回话题数量，默认20
- `time_range` (number, 可选): 统计时间范围(小时)，默认24
- `category` (string, 可选): 分类筛选
- `include_stats` (boolean, 可选): 是否包含统计数据

**使用示例**:
```json
{
  "tool": "get_hot_topics",
  "arguments": {
    "limit": 30,
    "time_range": 48,
    "category": "技术",
    "include_stats": true
  }
}
```

**返回格式**:
```json
{
  "hot_topics": [
    {
      "topic_id": "6809637767543259144",
      "title": "Vue.js",
      "description": "Vue.js相关技术讨论",
      "color": "#4fc08d",
      "pin_count": 234,
      "participant_count": 156,
      "growth_rate": 18.5,
      "heat_score": 92.3,
      "related_keywords": ["Composition API", "Vue 3", "响应式"],
      "top_contributors": [
        {
          "username": "Vue专家",
          "contribution_score": 89.2
        }
      ]
    }
  ],
  "trending_keywords": [
    {
      "keyword": "ChatGPT",
      "mention_count": 89,
      "growth": 45.2
    },
    {
      "keyword": "微前端",
      "mention_count": 67,
      "growth": 23.1
    }
  ],
  "category_stats": {
    "技术": 456,
    "职场": 234,
    "生活": 123
  }
}
```

## 💡 使用建议

### 内容发现
1. **热点追踪**: 使用`get_hot_topics`了解当前技术热点
2. **个性化获取**: 通过`get_pin_recommendations`获得精准推荐
3. **搜索探索**: 用`search_pins`查找特定话题的讨论

### 趋势分析
1. **定期分析**: 使用`analyze_pin_trends`跟踪技术趋势
2. **话题监控**: 关注特定话题的热度变化
3. **情感洞察**: 了解社区对技术的态度和反馈

### 社区互动
1. **参与讨论**: 基于热门沸点参与技术讨论
2. **内容创作**: 根据趋势分析创作相关内容
3. **网络建设**: 关注活跃的技术专家和贡献者

## 🎯 应用场景

### 技术学习
- 发现最新的技术讨论和经验分享
- 了解技术社区的真实反馈和问题
- 跟踪技术发展趋势和热点

### 内容创作
- 寻找热门话题和创作灵感
- 了解用户关心的技术问题
- 分析内容的受欢迎程度

### 市场研究
- 分析技术趋势和发展方向
- 了解开发者社区的关注点
- 监控竞品和技术动态

## 🔧 故障排除

### 常见问题
1. **沸点数据为空**: 检查时间范围和筛选条件
2. **搜索无结果**: 尝试更宽泛的关键词
3. **趋势分析不准确**: 调整时间范围和样本大小

### 性能优化
1. **合理设置limit**: 避免获取过多数据
2. **缓存利用**: 相同查询会被缓存
3. **批量分析**: 一次分析多个话题

---

**通过沸点工具，深入了解技术社区的动态和趋势！** 📌🔥

*最后更新: 2025-07-03*
