/*
页面标题 xhwsd@qq.com 2025-7-26

参考文档：
https://github.com/Sujaykumarh/docsify-plugin-title

安装插件：
```
<script src='plugins/docsify-page-title.js'></script>
```

插件配置：
```
window.$docsify = {
	// 页面标题
	pageTitle: {
		// 前缀
		prefix: '快捷宏',
		// 后缀
		suffix: '', 
		// 分隔符
		separator: '-',
	},
}
```
*/

function docsifyPageTitle(hook, vm) {
	// 每次路由切换时数据全部加载完成后调用
    hook.doneEach(function () {
		// 仅处理页面标题，初始首页通过`<title>`设置
		if (vm.route.path != '/') {
			vm.config.pageTitle = vm.config.pageTitle || {};
			var options = Object.assign({
				prefix: false,
				suffix: false,
				separator: '|',
			}, vm.config.pageTitle);

			var _title = document.title;
			if (options.prefix != '' || options.prefix != false) {
				_title = options.prefix + " " + options.separator + " " + _title;
			}

			if (options.suffix != '' || options.suffix != false) {
				_title = _title + " " + options.separator + " " + options.suffix;
			}

			document.title = _title;
		}
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyPageTitle].concat(window.$docsify.plugins || []);