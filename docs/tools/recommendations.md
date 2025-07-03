# 推荐工具文档

## 🎯 推荐工具概览

推荐工具是掘金MCP服务器的智能推荐引擎，提供7个专业工具用于个性化内容推荐、智能匹配和用户画像分析。基于先进的机器学习算法，为用户提供精准的个性化服务。

## 🛠️ 工具列表

### 1. get_simple_recommendations - 简化版智能推荐 🔥

**功能描述**: 提供简化的智能推荐服务，适合快速获取个性化内容

**参数说明**:
- `interests` (array, 可选): 兴趣标签数组，如["前端", "Vue", "React"]
- `limit` (number, 可选): 推荐数量，默认10
- `content_type` (string, 可选): 内容类型，"article"、"pin"、"mixed"
- `exclude_read` (boolean, 可选): 是否排除已读内容

**使用示例**:
```json
{
  "tool": "get_simple_recommendations",
  "arguments": {
    "interests": ["前端开发", "Vue.js", "TypeScript"],
    "limit": 15,
    "content_type": "mixed",
    "exclude_read": true
  }
}
```

**返回格式**:
```json
{
  "recommendations": [
    {
      "content_id": "7234567890123456789",
      "content_type": "article",
      "title": "Vue 3 Composition API 最佳实践",
      "author": "前端专家",
      "match_score": 92.5,
      "match_reasons": ["兴趣匹配: Vue.js", "技术深度适合", "最新发布"],
      "tags": ["Vue", "Composition API", "最佳实践"],
      "quality_score": 88.3,
      "engagement_score": 85.7
    }
  ],
  "total_matches": 156,
  "recommendation_quality": 89.2,
  "diversity_score": 76.8,
  "personalization_level": "high"
}
```

### 2. get_article_recommendations - 个性化文章推荐

**功能描述**: 基于用户兴趣和行为的深度文章推荐

**参数说明**:
- `user_profile` (object, 可选): 用户画像数据
- `interests` (array, 可选): 兴趣标签
- `skill_level` (string, 可选): 技能水平，"beginner"、"intermediate"、"advanced"
- `limit` (number, 可选): 推荐数量，默认10
- `diversity_factor` (number, 可选): 多样性因子，0-1之间

**使用示例**:
```json
{
  "tool": "get_article_recommendations",
  "arguments": {
    "user_profile": {
      "role": "frontend_developer",
      "experience_years": 3,
      "preferred_topics": ["Vue", "React", "性能优化"]
    },
    "skill_level": "intermediate",
    "limit": 20,
    "diversity_factor": 0.3
  }
}
```

### 3. get_pin_recommendations - 个性化沸点推荐

**功能描述**: 基于用户兴趣推荐相关的沸点动态

**参数说明**:
- `interests` (array, 可选): 兴趣标签数组
- `interaction_history` (array, 可选): 历史交互数据
- `limit` (number, 可选): 推荐数量，默认15
- `freshness_weight` (number, 可选): 新鲜度权重，0-1之间
- `engagement_threshold` (number, 可选): 最低互动阈值

**使用示例**:
```json
{
  "tool": "get_pin_recommendations",
  "arguments": {
    "interests": ["前端", "Vue", "职场经验"],
    "limit": 25,
    "freshness_weight": 0.7,
    "engagement_threshold": 5
  }
}
```

### 4. get_trending_recommendations - 基于趋势的推荐

**功能描述**: 结合当前趋势和用户兴趣的智能推荐

**参数说明**:
- `trend_weight` (number, 可选): 趋势权重，0-1之间，默认0.5
- `personal_weight` (number, 可选): 个人化权重，0-1之间，默认0.5
- `time_range` (number, 可选): 趋势分析时间范围(小时)
- `categories` (array, 可选): 关注的分类
- `limit` (number, 可选): 推荐数量

**使用示例**:
```json
{
  "tool": "get_trending_recommendations",
  "arguments": {
    "trend_weight": 0.6,
    "personal_weight": 0.4,
    "time_range": 48,
    "categories": ["前端", "AI", "移动开发"],
    "limit": 18
  }
}
```

### 5. get_recommendations - 多算法综合推荐

**功能描述**: 使用多种推荐算法的综合推荐系统

**参数说明**:
- `algorithms` (array, 可选): 使用的算法，["collaborative", "content_based", "hybrid"]
- `user_context` (object, 可选): 用户上下文信息
- `recommendation_goals` (array, 可选): 推荐目标
- `limit` (number, 可选): 推荐数量
- `explain_recommendations` (boolean, 可选): 是否解释推荐原因

**使用示例**:
```json
{
  "tool": "get_recommendations",
  "arguments": {
    "algorithms": ["collaborative", "content_based", "hybrid"],
    "user_context": {
      "current_learning_focus": "Vue 3",
      "project_type": "企业级应用",
      "time_availability": "limited"
    },
    "recommendation_goals": ["learning", "problem_solving", "inspiration"],
    "limit": 20,
    "explain_recommendations": true
  }
}
```

### 6. get_user_recommendations - 用户个性化推荐

**功能描述**: 基于用户完整画像的深度个性化推荐

**参数说明**:
- `user_id` (string, 可选): 用户ID（需要授权）
- `user_profile` (object, 可选): 用户画像数据
- `recommendation_type` (string, 可选): 推荐类型，"content"、"users"、"topics"
- `personalization_level` (string, 可选): 个性化程度，"low"、"medium"、"high"
- `limit` (number, 可选): 推荐数量

**使用示例**:
```json
{
  "tool": "get_user_recommendations",
  "arguments": {
    "user_profile": {
      "role": "full_stack_developer",
      "interests": ["Node.js", "Vue", "数据库"],
      "skill_levels": {
        "frontend": "advanced",
        "backend": "intermediate",
        "devops": "beginner"
      }
    },
    "recommendation_type": "content",
    "personalization_level": "high",
    "limit": 25
  }
}
```

### 7. generate_user_report - 生成用户报告

**功能描述**: 生成用户的个性化学习和内容消费报告

**参数说明**:
- `user_data` (object, 可选): 用户数据
- `report_type` (string, 可选): 报告类型，"learning"、"consumption"、"comprehensive"
- `time_period` (string, 可选): 时间周期，"weekly"、"monthly"、"quarterly"
- `include_recommendations` (boolean, 可选): 是否包含推荐建议
- `analysis_depth` (string, 可选): 分析深度

**使用示例**:
```json
{
  "tool": "generate_user_report",
  "arguments": {
    "user_data": {
      "interests": ["前端", "Vue", "性能优化"],
      "reading_history": ["article_id_1", "article_id_2"],
      "skill_goals": ["掌握Vue 3", "学习TypeScript"]
    },
    "report_type": "comprehensive",
    "time_period": "monthly",
    "include_recommendations": true,
    "analysis_depth": "detailed"
  }
}
```

## 🧠 推荐算法

### 协同过滤 (Collaborative Filtering)
- **用户协同**: 基于相似用户的行为推荐
- **物品协同**: 基于内容相似性推荐
- **优势**: 发现用户潜在兴趣
- **适用**: 有足够用户行为数据时

### 内容推荐 (Content-Based)
- **特征匹配**: 基于内容特征匹配
- **标签分析**: 分析内容标签和分类
- **优势**: 推荐解释性强
- **适用**: 新用户或冷启动场景

### 混合推荐 (Hybrid)
- **算法融合**: 结合多种推荐算法
- **权重调节**: 动态调整算法权重
- **优势**: 综合各算法优点
- **适用**: 大多数推荐场景

### 深度学习推荐
- **神经网络**: 使用深度神经网络
- **特征学习**: 自动学习用户和内容特征
- **优势**: 处理复杂非线性关系
- **适用**: 大数据量场景

## 💡 使用建议

### 快速开始
1. **简化版推荐**: 使用`get_simple_recommendations`快速体验
2. **兴趣标签**: 提供准确的兴趣标签获得更好推荐
3. **反馈优化**: 根据推荐结果调整参数

### 进阶使用
1. **多算法结合**: 使用`get_recommendations`获得更全面推荐
2. **用户画像**: 构建详细的用户画像提升推荐质量
3. **趋势结合**: 使用`get_trending_recommendations`平衡个性化和热度

### 专业应用
1. **A/B测试**: 对比不同推荐策略的效果
2. **个性化报告**: 生成用户学习和消费分析报告
3. **推荐解释**: 启用推荐解释功能提升用户信任

## 🎯 应用场景

### 个人学习
- 根据技能水平推荐合适的学习内容
- 发现新的技术领域和学习方向
- 跟踪学习进度和效果

### 内容发现
- 发现高质量的技术文章和讨论
- 找到感兴趣的技术话题和社区
- 获得个性化的内容推送

### 职业发展
- 推荐职业相关的技术内容
- 了解行业趋势和技能需求
- 建立专业知识体系

## 📊 推荐质量指标

### 准确性指标
- **匹配分数**: 内容与用户兴趣的匹配程度
- **点击率**: 用户点击推荐内容的比例
- **满意度**: 用户对推荐结果的满意程度

### 多样性指标
- **类别多样性**: 推荐内容的分类分布
- **作者多样性**: 推荐内容的作者分布
- **时间多样性**: 推荐内容的时间分布

### 新颖性指标
- **新鲜度**: 推荐内容的发布时间
- **惊喜度**: 推荐内容的意外程度
- **探索性**: 帮助用户发现新兴趣的能力

## 🔧 故障排除

### 推荐质量问题
1. **推荐不准确**: 检查兴趣标签和用户画像
2. **推荐重复**: 调整多样性参数
3. **推荐过时**: 增加新鲜度权重

### 性能优化
1. **合理设置limit**: 避免请求过多推荐
2. **缓存利用**: 相同用户画像的推荐会被缓存
3. **算法选择**: 根据场景选择合适的推荐算法

---

**通过推荐工具，获得精准的个性化内容和智能建议！** 🎯🤖

*最后更新: 2025-07-03*
