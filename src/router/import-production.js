export default file => () => {
	return import(/* webpackChunkName: "[request]" */ `@/views/${file}`)
		.then(module => {
			return module.default;
		})
		.catch(e => {
			console.log('加载模块出错：', e);
			return ModuleMissing;
		});
};
