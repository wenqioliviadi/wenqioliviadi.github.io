// 切换按钮逻辑
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // 检查用户是否有保存的偏好
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // 创建切换按钮并添加到页面顶部
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px";
  toggleButton.style.cursor = "pointer";
  document.body.appendChild(toggleButton);

  // 添加点击事件切换模式
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // 将当前模式保存到 localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.setItem("theme", "");
    }
  });
});
