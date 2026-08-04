const path = require('path');
const { initRenderer } = require('./gen-site-renderer');
const genSiteList = require('./gen-site-list');
const genSiteView = require('./gen-site-view');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');

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
		'progress',
		// 'tree',
		// 'sidebar',
		'carousel',
		'dropdown',
		'tooltip',
		'popover',
		'collapsible',
		'accordion',
		// 'modal',
		// 'toast',
		// 'dialog',
		// 'msgbox',
		// 'window',
		'select-list',
		'panel'
	]);
	['collapse'].map(async (name) => {
		const sectionDir = path.join(DOCS_DIR, 'components');
		const viewPath = path.join(sectionDir, `${name}-view.md`);
		await genSiteView(viewPath, name);
	});
	await genSiteList('utilities', [
		'color',
		'text',
		'font',
		'spacing'
	]);
})();
