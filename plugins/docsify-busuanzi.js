/*
不蒜子 树先生 xhwsd@qq.com 2025-7-23

参考文档：
http://ibruce.info/2015/04/04/busuanzi/
https://busuanzi.ibruce.info/
https://github.com/docsify-note/docsify-busuanzi/tree/main


安装插件：
```
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script src='plugins/docsify-busuanzi.js'></script>
```

安装标签：
算法a：pv的方式，单个用户连续点击n篇文章，记录n次访问量。
```
<span id="busuanzi_container_site_pv">
    本站总访问量<span id="busuanzi_value_site_pv"></span>次
</span>
```

算法b：uv的方式，单个用户连续点击n篇文章，只记录1次访客数。
```
<span id="busuanzi_container_site_uv">
  本站访客数<span id="busuanzi_value_site_uv"></span>人次
</span>
```

算法：pv的方式，单个用户点击1篇文章，本篇文章记录1次阅读量。
<span id="busuanzi_container_page_pv">
  本文总阅读量<span id="busuanzi_value_page_pv"></span>次
</span>


```
本站总访问量<span id="busuanzi_value_site_pv"></span>次
本站访客数<span id="busuanzi_value_site_uv"></span>人次
本文总阅读量<span id="busuanzi_value_page_pv"></span>次
```
*/

function hasBusuanzi() {
    var has = !!(
        document.getElementById('busuanzi_value_site_pv') ||
        document.getElementById('busuanzi_value_site_uv') ||
        document.getElementById('busuanzi_value_page_pv')
    );
	if (has) {
		console.info("不蒜子：已检测到标签")
	} else {
		console.info("不蒜子：未检测到标签")
	}
	return has;
}

function renderBusuanzi() {
    var script = document.createElement("script");
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    script.async = "async";

    var scripts = document.getElementsByTagName("script");
	console.info( scripts[0],  scripts[2])

    scripts[0].parentNode.insertBefore(script, scripts[0]);
    console.info("不蒜子：渲染结束")
}

function docsifyBusuanzi(hook, vm) {
	// 解析成 html 后调用。
    hook.afterEach(function(html, next) {

        next(html);

    });

	// 每次路由切换时数据全部加载完成后调用。
    hook.doneEach(function() {
        if (hasBusuanzi()) {
			renderBusuanzi()
        }
    });

	// 初始化并第一次加载完成数据后调用，只触发一次。
	hook.mounted(function() {
		
    });

}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyBusuanzi].concat(window.$docsify.plugins || []);
