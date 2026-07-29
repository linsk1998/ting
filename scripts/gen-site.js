const genSiteList = require('./gen-site-list');
const { initRenderer } = require('./gen-site-renderer');

(async function() {
	await initRenderer();
	await genSiteList('getting-started', [
		'template',
		'advanced'
	]);
	await genSiteList('layout', [
		'breakpoints',
		'container',
		'grid',
		'flex',
		'ratio',
		'align'
	]);
	await genSiteList('content', [
		'type',
		'link',
		'page-header',
		'button',
		'button-group',
		'table',
		'img',
		'media',
		'list',
		'card',
		'well',
		'callout',
		'badge',
		'tag',
		'alert',
		'jumbotron',
		'footer'
	]);
	await genSiteList('form', [
		'control',
		'form',
		'sizing',
		'validation',
		'static',
		'input-group',
		'input',
		'tags-input',
		'select',
		'textarea',
		'checkbox',
		'switch',
		'toggle-button'
	]);
	await genSiteList('helpers', [
		'float',
		'sr-only',
		'visibility',
		'line',
		'caret',
		'close',
		'loading',
		'icon',
		'animation'
	]);
	await genSiteList('components', [
		'breadcrumb',
		'nav',
		'tabs',
		'navbar',
		'pagination',
		'list-group',
		'dropdown',
		'progress',
		'carousel',
		// 'tree',
		// 'sidebar',
		// 'modal',
		// 'toast',
		// 'dialog',
		// 'msgbox',
		// 'window',
		'select-list',
		'panel'
	]);
	await genSiteList('utilities', [
		'color',
		'text',
		'font',
		'spacing'
	]);
})();
