// replaceTTL.js: 替换 pub1.emby.wtf 的 TTL 脚本内容

// 检查是否存在响应体
if ($response.body) {
  // 获取原始脚本内容
  let body = $response.body;

  // 替换逻辑：修改 TTL 的相关内容
  body = body.replace(/ttl\s*:\s*\d+/gi, "ttl: 9999999"); // 将 TTL 值替换为超大值

  // 返回修改后的响应
  $done({ body });
} else {
  // 如果没有响应体，直接返回
  $done({});
}
