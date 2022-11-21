// 霓虹灯效果
// 颜色数组
var arr = ["#39c5bb", "#f14747", "#f1a247", "#f1ee47", "#b347f1", "#1edbff", "#ed709b", "#5636ed"];
// 颜色索引
var idx = 0;

// 切换颜色
function changeColor() {
    // 仅夜间模式才启用
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark') {
        if (document.getElementById("site-name"))
            // @ts-ignore
            document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-title"))
            // @ts-ignore
            document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 15px";
        if (document.getElementById("site-subtitle"))
            // @ts-ignore
            document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 10px";
        if (document.getElementById("post-info"))
            // @ts-ignore
            document.getElementById("post-info").style.textShadow = arr[idx] + " 0 0 5px";
        try {
            // @ts-ignore
            document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 12px";
            // @ts-ignore
            document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 12px";
        } catch {
            
        }
        idx++;
        if (idx == 8) {
            idx = 0;
        }
    } else {
        // 白天模式恢复默认
        if (document.getElementById("site-name"))
            // @ts-ignore
            document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-title"))
            // @ts-ignore
            document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("site-subtitle"))
            // @ts-ignore
            document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        if (document.getElementById("post-info"))
            // @ts-ignore
            document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        try {
            // @ts-ignore
            document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
            // @ts-ignore
            document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
        } catch {
            
        }
    }
}

// 开启计时器
// @ts-ignore
window.onload = setInterval(changeColor, 1200);