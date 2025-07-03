# 用户工具文档

## 👤 用户工具概览

用户工具提供6个专业工具，用于用户交互、授权管理和社交功能。这些工具需要掘金Cookie授权才能使用，提供了完整的用户操作能力。

## 🔐 授权要求

**重要提示**: 用户工具需要配置掘金Cookie才能正常使用。请参考[安装指南](../installation.md#获取掘金cookie)获取Cookie配置方法。

## 🛠️ 工具列表

### 1. check_auth_status - 检查登录状态

**功能描述**: 检查当前的登录状态和授权信息

**参数说明**:
- 无需参数

**使用示例**:
```json
{
  "tool": "check_auth_status",
  "arguments": {}
}
```

**返回格式**:
```json
{
  "is_authenticated": true,
  "user_info": {
    "user_id": "123456789",
    "username": "技术达人",
    "avatar": "https://avatar.url",
    "level": 5,
    "follower_count": 1250,
    "following_count": 89
  },
  "permissions": [
    "read_profile",
    "like_content",
    "collect_content",
    "follow_user",
    "comment"
  ],
  "auth_expires": "2025-07-10T10:00:00Z",
  "last_check": "2025-07-03T15:30:00Z"
}
```

### 2. get_user_profile - 获取用户资料 ✅

**功能描述**: 获取当前登录用户的详细资料信息

**参数说明**:
- `include_stats` (boolean, 可选): 是否包含统计数据，默认true
- `include_preferences` (boolean, 可选): 是否包含偏好设置，默认false

**使用示例**:
```json
{
  "tool": "get_user_profile",
  "arguments": {
    "include_stats": true,
    "include_preferences": true
  }
}
```

**返回格式**:
```json
{
  "user_id": "123456789",
  "username": "技术达人",
  "real_name": "张三",
  "avatar": "https://avatar.url",
  "bio": "专注前端开发5年，Vue.js专家",
  "level": 5,
  "experience": 12580,
  "company": "某科技公司",
  "position": "高级前端工程师",
  "location": "北京",
  "website": "https://blog.example.com",
  "github": "https://github.com/username",
  "stats": {
    "article_count": 45,
    "pin_count": 156,
    "follower_count": 1250,
    "following_count": 89,
    "like_received": 2340,
    "view_count": 45600
  },
  "preferences": {
    "interested_tags": ["Vue", "React", "Node.js"],
    "notification_settings": {
      "like": true,
      "comment": true,
      "follow": true
    }
  },
  "join_date": "2020-03-15T08:00:00Z",
  "last_active": "2025-07-03T14:30:00Z"
}
```

### 3. like_article - 点赞文章 ✅

**功能描述**: 对指定文章进行点赞操作

**参数说明**:
- `article_id` (string, 必需): 文章ID
- `action` (string, 可选): 操作类型，"like"(点赞)、"unlike"(取消点赞)，默认"like"

**使用示例**:
```json
{
  "tool": "like_article",
  "arguments": {
    "article_id": "7234567890123456789",
    "action": "like"
  }
}
```

**返回格式**:
```json
{
  "success": true,
  "article_id": "7234567890123456789",
  "action": "like",
  "current_status": "liked",
  "total_likes": 157,
  "message": "点赞成功",
  "timestamp": "2025-07-03T15:45:00Z"
}
```

### 4. like_pin - 点赞沸点 ✅

**功能描述**: 对指定沸点进行点赞操作

**参数说明**:
- `pin_id` (string, 必需): 沸点ID
- `action` (string, 可选): 操作类型，"like"(点赞)、"unlike"(取消点赞)，默认"like"

**使用示例**:
```json
{
  "tool": "like_pin",
  "arguments": {
    "pin_id": "7234567890123456789",
    "action": "like"
  }
}
```

### 5. collect_article - 收藏文章 ✅

**功能描述**: 收藏或取消收藏指定文章

**参数说明**:
- `article_id` (string, 必需): 文章ID
- `action` (string, 可选): 操作类型，"collect"(收藏)、"uncollect"(取消收藏)，默认"collect"
- `collection_id` (string, 可选): 收藏夹ID，不指定则收藏到默认收藏夹

**使用示例**:
```json
{
  "tool": "collect_article",
  "arguments": {
    "article_id": "7234567890123456789",
    "action": "collect",
    "collection_id": "default"
  }
}
```

**返回格式**:
```json
{
  "success": true,
  "article_id": "7234567890123456789",
  "action": "collect",
  "current_status": "collected",
  "collection_info": {
    "collection_id": "default",
    "collection_name": "默认收藏夹",
    "total_articles": 23
  },
  "message": "收藏成功",
  "timestamp": "2025-07-03T15:50:00Z"
}
```

### 6. follow_user - 关注用户 ✅

**功能描述**: 关注或取消关注指定用户

**参数说明**:
- `user_id` (string, 必需): 用户ID
- `action` (string, 可选): 操作类型，"follow"(关注)、"unfollow"(取消关注)，默认"follow"

**使用示例**:
```json
{
  "tool": "follow_user",
  "arguments": {
    "user_id": "987654321",
    "action": "follow"
  }
}
```

**返回格式**:
```json
{
  "success": true,
  "user_id": "987654321",
  "action": "follow",
  "current_status": "following",
  "user_info": {
    "username": "前端专家",
    "avatar": "https://avatar.url",
    "follower_count": 5678
  },
  "message": "关注成功",
  "timestamp": "2025-07-03T16:00:00Z"
}
```

## 🔧 授权配置

### Cookie获取步骤

1. **登录掘金网站**
   - 访问 [掘金网站](https://juejin.cn)
   - 使用您的账号登录

2. **获取Cookie**
   - 打开浏览器开发者工具 (F12)
   - 切换到 Network 标签页
   - 刷新页面或进行任意操作
   - 找到任意API请求
   - 在 Request Headers 中找到 Cookie
   - 复制完整的Cookie值

3. **配置Cookie**
   ```json
   {
     "mcpServers": {
       "juejin-mcp": {
         "command": "npx",
         "args": ["juejin-mcp-server"],
         "env": {
           "JUEJIN_ENABLE_AUTH": "true",
           "JUEJIN_COOKIE": "your_cookie_here"
         }
       }
     }
   }
   ```

### Cookie格式示例

```
sessionid=xxx; userid=xxx; username=xxx; _tea_utm_cache_xxx=xxx
```

## 💡 使用建议

### 安全使用
1. **定期更新Cookie**: 建议每周更新一次Cookie
2. **保护隐私**: 不要在公共环境配置Cookie
3. **合理使用**: 避免频繁的点赞和关注操作

### 功能组合
1. **状态检查**: 使用前先检查授权状态
2. **批量操作**: 可以批量点赞和收藏感兴趣的内容
3. **用户发现**: 通过文章作者发现值得关注的用户

### 最佳实践
1. **错误处理**: 处理授权失败和网络错误
2. **频率控制**: 控制操作频率，避免被限制
3. **反馈确认**: 确认操作结果，处理异常情况

## 🎯 应用场景

### 内容管理
- 点赞高质量的技术文章
- 收藏有价值的学习资源
- 整理个人知识库

### 社交网络
- 关注技术专家和意见领袖
- 建立专业技术网络
- 参与技术社区讨论

### 个人品牌
- 展示技术兴趣和专业方向
- 建立个人技术影响力
- 与同行建立联系

## ⚠️ 注意事项

### 使用限制
1. **频率限制**: 掘金平台对操作频率有限制
2. **权限要求**: 某些操作需要特定权限
3. **账号安全**: 异常操作可能影响账号安全

### 错误处理
1. **授权失败**: 检查Cookie是否有效
2. **操作失败**: 确认目标内容是否存在
3. **网络错误**: 检查网络连接和API可用性

### 合规使用
1. **遵守平台规则**: 不进行恶意操作
2. **尊重他人**: 合理点赞和关注
3. **保护隐私**: 不泄露他人信息

## 🔧 故障排除

### 常见问题
1. **授权失败**: 更新Cookie或检查格式
2. **操作无响应**: 检查网络和API状态
3. **权限不足**: 确认账号权限和状态

### 调试技巧
1. **状态检查**: 先使用`check_auth_status`检查状态
2. **逐步测试**: 从简单操作开始测试
3. **日志分析**: 查看详细的错误信息

---

**通过用户工具，实现完整的掘金社区交互体验！** 👤🤝

*最后更新: 2025-07-03*
