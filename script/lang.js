function getLanguage() {
    const threeToTwo = {
        'eng': 'en',
        'jpn': 'ja',
    };
    const lang = navigator.language.match(/^[a-zA-Z]{2,3}/)[0];
    if (lang.length === 3) {
        lang = threeToTwo[lang];
    }
    if (new Set(['en', 'ja']).has(lang)) {
        return lang;
    }
    return 'en';
}

function updateLanguage(lang) {
    for (const e of document.querySelectorAll('*[lang]:not(html)')) {
        if (e.lang === lang) {
            e.style = "display: ;";
        } else {
            e.style = "display: none;";

        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let lang = getLanguage();
    updateLanguage(lang);

    var select = document.getElementById("langSelect");
    select.value = lang;
    select.onchange = function() {
        updateLanguage(this.value);
    }
    
});
