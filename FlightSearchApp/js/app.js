// 应用主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
  console.log('机票搜索应用已加载');
  
  // 确保在iframe中正确加载
  if (window.parent !== window) {
    console.log('应用在iframe中运行');
  }
}); 