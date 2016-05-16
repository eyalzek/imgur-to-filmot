changeLinks();

document.addEventListener('scroll', changeLinks);
document.addEventListener('click', changeLinks);

function changeLinks() {
    var list = document.querySelectorAll('[href*="imgur.com"]');
    for (var i = 0; i < list.length; i++) {
        var node = list.item(i);
        node.setAttribute('href', node.getAttribute('href')
            .replace('https://', 'http://'));
        node.setAttribute('href', node.getAttribute('href')
            .replace('imgur.com/a/', 'filmot.com/a/'));
        node.setAttribute('href', node.getAttribute('href')
            .replace('imgur.com', 'filmot.com'));
    }
    list = document.querySelectorAll('[src*="imgur.com"]');
    for (i = 0; i < list.length; i++) {
        var node = list.item(i);
        node.setAttribute('href', node.getAttribute('href')
            .replace('https://', 'http://'));
        node.setAttribute('src', node.getAttribute('src')
            .replace('imgur.com/a/', 'filmot.com/a/'));
        node.setAttribute('src', node.getAttribute('src')
            .replace('imgur.com', 'filmot.com'));
    }
    list = document.querySelectorAll('.expando[data-cachedhtml]');
    for (i = 0; i < list.length; i++) {
        var node = list.item(i);
        var cachedhtml = node.dataset.cachedhtml;
        if (cachedhtml.indexOf('imgur') !== -1) {
            var p = new DOMParser;
            var fixedUrl = p.parseFromString(cachedhtml, 'text/xml')
                .getElementsByTagName('a')[0].getAttribute('href')
                .replace('imgur.com', 'filmot.com');
            node.dataset.cachedhtml = cachedhtml
                .replace('imgur.com', 'filmot.com')
                .replace(/(src\=")(?:(?=(\\?))\2.)*?(?=")/, '$1' + fixedUrl + '$2');
        }
    }
}
