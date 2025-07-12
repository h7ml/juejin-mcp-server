#!/usr/bin/env node

/**
 * 掘金智能聚合MCP服务器
 * 
 * 这是一个基于Model Context Protocol (MCP)的智能服务器，
 * 提供掘金平台的数据聚合、分析和推荐功能。
 * 
 * 主要功能：
 * - 文章和沸点数据获取  
 * - 智能内容分析和质量评估
 * - 趋势识别和预测
 * - 个性化推荐系统
 * - 用户行为分析
 * 
 * 使用方法：
 * npm start 或 node dist/index.js 或 npx juejin-mcp-server
 */

import { JuejinMcpServer } from './server.js';
import { runPerformanceBenchmark } from './utils/performance-monitor.js';
import { getBrandInfo } from './utils/package-info.js';

/**
 * 显示帮助信息
 */
function showHelp() {
  const brandInfo = getBrandInfo();
  console.error(`${brandInfo.fullName}`);
  console.error(`${brandInfo.description}\n`);
  console.error('用法：');
  console.error('  juejin-mcp-server [选项]\n');
  console.error('选项：');
  console.error('  -h, --help     显示帮助信息');
  console.error('  -v, --version  显示版本号');
  console.error('  --no-benchmark 跳过性能基准测试\n');
  console.error('功能：');
  console.error('  • 文章数据获取和分析');
  console.error('  • 沸点数据获取和分析');
  console.error('  • 智能趋势分析');
  console.error('  • 个性化推荐系统');
  console.error('  • 用户行为分析');
  console.error('  • 内容质量评估');
  console.error('  • 性能监控和优化\n');
  console.error(`文档：${brandInfo.homepageUrl}`);
}

/**
 * 显示版本信息
 */
function showVersion() {
  const brandInfo = getBrandInfo();
  console.error(brandInfo.version);
}

/**
 * 处理命令行参数
 */
function parseArgs(): { help: boolean; version: boolean; noBenchmark: boolean } {
  const args = process.argv.slice(2);
  const result = { help: false, version: false, noBenchmark: false };

  for (const arg of args) {
    switch (arg) {
      case '-h':
      case '--help':
        result.help = true;
        break;
      case '-v':
      case '--version':
        result.version = true;
        break;
      case '--no-benchmark':
        result.noBenchmark = true;
        break;
    }
  }

  return result;
}

/**
 * 主函数 - 启动MCP服务器
 */
async function main() {
  const args = parseArgs();

  // 处理帮助参数
  if (args.help) {
    showHelp();
    process.exit(0);
  }

  // 处理版本参数
  if (args.version) {
    showVersion();
    process.exit(0);
  }
  const brandInfo = getBrandInfo();
  console.error(`🚀 启动${brandInfo.displayName}...`);
  console.error(`📦 ${brandInfo.fullName}`);
  console.error(`📝 ${brandInfo.description}`);
  console.error('');
  
  try {
    // 创建服务器实例
    const server = new JuejinMcpServer();
    
    // 运行性能基准测试（除非用户指定跳过）
    if (!args.noBenchmark) {
      await runPerformanceBenchmark();
    }

    // 启动服务器
    await server.start();

    console.error(`✅ ${brandInfo.displayName}启动成功！`);
    console.error('📊 可用功能：');
    console.error('   • 文章数据获取和分析');
    console.error('   • 沸点数据获取和分析');
    console.error('   • 智能趋势分析');
    console.error('   • 个性化推荐系统');
    console.error('   • 用户行为分析');
    console.error('   • 内容质量评估');
    console.error('   • 性能监控和优化');
    console.error('');
    console.error('🔧 支持的工具数量 34+');
    console.error('🧠 集成AI分析能力：趋势识别、质量评估、推荐算法');
    console.error('⚡ 性能优化：智能缓存、批处理、并发控制');
    console.error('🔐 授权功能：点赞、收藏、关注等用户操作');
    console.error('');
    console.error(`📖 使用文档：${brandInfo.homepageUrl}`);
    
  } catch (error) {
    console.error('❌ 服务器启动失败:', error);
    process.exit(1);
  }
}

/**
 * 优雅关闭处理
 */
function setupGracefulShutdown() {
  const shutdown = (signal: string) => {
    console.error(`\n📴 收到 ${signal} 信号，正在关闭服务器...`);
    process.exit(0);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

/**
 * 错误处理
 */
function setupErrorHandling() {
  process.on('uncaughtException', (error) => {
    console.error('💥 未捕获的异常:', error);
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 未处理的Promise拒绝:', reason);
    console.error('Promise:', promise);
    process.exit(1);
  });
}

// 设置错误处理和优雅关闭
setupErrorHandling();
setupGracefulShutdown();

// 启动服务器
main().catch((error) => {
  console.error('💥 启动过程中发生错误:', error);
  process.exit(1);
});
