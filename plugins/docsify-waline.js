/*
Waline评论 树先生 xhwsd@qq.com 2025-7-23

参考文档：
https://waline.js.org/
https://github.com/daidi/docsify-valine
https://github.com/nopdan/docsify-waline/


安装插件：
```
<script src='https://cdn.jsdmirror.com/npm/@waline/client@v2/dist/waline.js'></script>
<link href='https://cdn.jsdmirror.com/npm/@waline/client@v2/dist/waline.css' rel='stylesheet' />
<script src='plugins/docsify-waline.js'></script>
```

插件配置：
```
Waline: {
	serverURL: 'https://waline-kjh.wsd.cx',	
	locale: {
		admin: '管理员',
		placeholder: '既然都滑到这里了，不妨留下你的评论~',
	},
},
```

安装容器：
```
<div id="docsify-waline" style="margin: 0px 20px 20px; max-width: 80% !important;"></div>
```
*/

function docsifyWaline(hook, vm) {
	// 每次路由切换时数据全部加载完成后调用，没有参数。
	hook.doneEach(function () {
		// 初始对象
		vm.config.waline = vm.config.waline || {}

		// 合并选项
		var options = Object.assign({
			el: '#docsify-waline',
			path: vm.config.waline.docPath === 'full' ? location.pathname + location.hash.replace(/\?.+/, "") : location.hash.replace(/\?.+/, ""),
		}, vm.config.waline)

		// 检验服务地址
		if (!options.serverURL) {
			console.warn('sorry, waline.serverURL must be required.');
			return
		}

		// 检验有无标识为 docsify-waline 元素
		if (document.getElementById('docsify-waline') && window.Waline) {
			Waline.init(options)
		}
	});
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyWaline].concat(window.$docsify.plugins || []);
