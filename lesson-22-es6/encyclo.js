let ajaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
let wrapper = document.getElementById('wrapper');
let articlesList = '';
let articles;
let articleID;


function getArticles() {
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: {f: 'READ', n: 'DOLGIH_ARTICLES_LIST'},
        success: readReady,
        error: errorHandler
    });

    function readReady(data) {
        if (data.error !== undefined) {
            alert(data.error);
        } else if (data.result !== "") {
            articles = JSON.parse(data.result).sort(sortTitle)
            console.log(articles);
            articlesList += `<ul id="menu">`;
            for (let article of articles) {
                articlesList += `<li><span id="${article.id}" onclick="switchToDescription()">${article.title}</span></li>`;
            }
            articlesList += `</ul>`;
            function sortTitle(a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            }
        }
    }
};
getArticles();

window.onhashchange = renderNewState;

function renderNewState() {
    const hash = window.location.hash;
    let state = decodeURIComponent(hash.substr(1));
    if (state !== "") {
        state = JSON.parse(state);
    } else {
        state = {page: 'main'};
    }
    let page = "";
    switch (state.page) {
        case 'main':
            page += `<h1 class="title" id="title">Энциклопедия "В мире животных"</h1>
                    <div><p class="contents" id="contents"  onclick="switchToContents()">Список статей</p></div>`;
            break;
        case 'content':
            page += `<h1 class="content"  id="content">Содержание</h1>`;
            page += articlesList;
            break;
        case `article`:
            page += `<ul id="menu" class="menu articles">`;
            for (let article of articles) {
            page += `<li><span id="${article.id}" onclick="switchToDescription()">${article.title}</span></li>`;
        }
            page += `</ul>`;
            $.ajax(`articles/${articleID}.html`,
                {type: 'GET', dataType: 'html', success: dataLoaded, error: errorHandler}
            );

        function dataLoaded(data) {
            let div = document.createElement('div');
            wrapper.appendChild(div);
            div.id = 'articleDescription';
            document.getElementById('articleDescription').innerHTML = data;
        }
            break;
    }
    wrapper.innerHTML = page;
}

function SwitchToState(state) {
    location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToContents() {
    SwitchToState({page: 'content'});
}

function switchToDescription() {
    let ul = document.getElementById('menu');
    ul.addEventListener('click', function (e) {
        articleID = e.target.id;
        SwitchToState({page: 'article', articleid: `${articleID}`})
    });
}

renderNewState();

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}