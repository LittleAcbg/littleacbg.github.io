
function letUserCopy(str) {
  document.getElementById("copyModal").style.display = "block";
  document.getElementById("copyModalTextarea").innerHTML = str;
}

// 获取 <span> 元素，设置关闭按钮的点击事件监听器以关闭模态框
document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("copyModal").style.display = "none";
}

// 点击窗口之外的区域也可以关闭模态框（可选）
window.onclick = function(event) {
  var modal = document.getElementById("copyModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 复制代码到剪贴板的功能函数
function copyCode() {
  var code = document.getElementById("copyModalTextarea"); // 获取要复制的代码元素
  var range = document.createRange(); // 创建一个范围对象（Range）对象用于复制文本内容。 
  range.selectNode(code); // 选择要复制的节点（这里是代码块） 
  window.getSelection().removeAllRanges(); // 清空之前的选中区域
  window.getSelection().addRange(range); // 将选中的区域添加到剪贴板
  document.execCommand("copy"); // 执行复制命令
  window.getSelection().removeAllRanges(); // 清空选中区域
  alert("Sucessfully copied!");
}
