/*
页脚 xhwsd@qq.com 2025-7-23

安装插件：
```
<script src='plugins/docsify-footer.js'></script>
```

插件配置：
```
window.$docsify = {
	footer: "\n---"
		+ "\n- 该文档更新于`{docsify-updated}`"
		+ "\n- © 2025 [快捷宏](https://kjh.wsd.cx) All Rights Reserved.",
},
```
*/

function docsifyFooter(hook, vm) {
	// 每次开始解析 Markdown 内容时调用，支持处理异步逻辑
	hook.beforeEach(function(content) {
		// 追加内容
		return content + (vm.config.footer || '');
	});
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyFooter].concat(window.$docsify.plugins || []);