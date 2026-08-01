const escapeHtml = require('escape-html');
const SECTION_MAP = require('./SECTION_MAP.json');

/**
 * 生成导航条 HTML
 */
function navbar(currentSection) {
	let navbarHtml = '';
	for (const section in SECTION_MAP) {
		const active = section === currentSection ? ' active' : '';
		navbarHtml += `<li class="nav-item${active}"><a class="nav-link" href="../${escapeHtml(section)}/index.html">${escapeHtml(SECTION_MAP[section])}</a></li>`;
	}

	return `<div class="navbar navbar-top" role="navbar">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle fa icon-lg">&#xf0c9;</button>
						<a href="../index.html" class="navbar-brand"><img height="37" src="../images/logo.png"/><span class="line-middle">Ting Web UI</span></a>
					</div>
					<div class="navbar-collapse">
						<ul class="navbar-nav">
							${navbarHtml}
						</ul>
					</div>
				</div>
			</div>`;
}

/**
 * 生成页面头部（导航条 + jumbotron，不含 DOCTYPE/<head>/<body>）
 */
function header(currentSection) {
	return `<header>
			${navbar(currentSection)}
			<div class="jumbotron">
				<div class="container">
					<h1 class="h1">Ting Web UI</h1>
					<p>简洁、直观、强悍、跨浏览器的前端开发框架，让web开发更迅速、简单。</p>
				</div>
			</div>
		</header>`;
}

module.exports = header;
