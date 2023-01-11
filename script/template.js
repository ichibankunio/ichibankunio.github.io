window.addEventListener('DOMContentLoaded', () => {
    // var header = document.getElementById("header");
    var header = document.getElementsByTagName("header");
	header[0].insertAdjacentHTML("afterbegin", "<ul class=\"header-list\"><li class=\"header-list-item\"><a lang=\"en\" href=\"https://ichibankunio.github.io/index.html#\">Home</a><a lang=\"ja\" href=\"https://ichibankunio.github.io/index.html#\">ホーム</a></li><li class=\"header-list-item\"><a lang=\"en\" href=\"https://ichibankunio.github.io/index.html#works\">Works</a><a lang=\"ja\" href=\"https://ichibankunio.github.io/index.html#works\">作ったゲーム</a></li><li class=\"header-list-item\"><a lang=\"en\" href=\"https://ichibankunio.github.io/index.html#news\">News</a><a lang=\"ja\" href=\"https://ichibankunio.github.io/index.html#news\">最新情報</a></li><li class=\"header-list-item\" id=\"selectItem\"><select id=\"langSelect\"><option value=\"en\">English</option><option value=\"ja\">日本語</option></select></li></ul>")

	let lang = getLanguage();
    updateLanguage(lang);
    
});

// function header() {
// 	var header = document.getElementById("header");
// 	header.insertAdjacentHTML("afterbegin", "<p>Hello</p>")
// }