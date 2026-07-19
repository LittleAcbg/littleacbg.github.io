
function letUserCopy(str) {
  document.getElementById("copyModal").style.display = "block";
  document.getElementById("copyModalTextarea").innerHTML = str;
}

// 获取 <span> 元素，设置关闭按钮的点击事件监听器以关闭模态框

document.getElementsByClassName("close")[0].onclick = function() { 
  document.getElementById("copyModal").style.display = "none";
}

document.getElementsByClassName("close")[1].onclick = function() { 
  document.getElementById("importModal").style.display = "none";
}

// 点击窗口之外的区域也可以关闭模态框（可选）
window.onclick = function(event) {
  var modal = document.getElementById("copyModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
  modal = document.getElementById("importModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 复制代码到剪贴板的功能函数
document.getElementById('copyButton').addEventListener('click', async function() {
  var code = document.getElementById("copyModalTextarea");
  await navigator.clipboard.writeText(code.innerHTML);
  alert("Sucessfully copied!");
});
