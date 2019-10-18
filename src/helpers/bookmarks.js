/**
 * Created by moblimic on 24/10/2015.
 */

(function () {

    chrome.bookmarks.getTree(function (bookmarks) {
        var bookmarkList = document.getElementById('bookmarkList');
        var list = document.createDocumentFragment();

        bookmarks[0].children[0].children.forEach(function (val) {
            var li = document.createElement('li');
            li.className = 'linkListItem';
            var link = document.createElement('a');
            link.href = val.url;
            link.textContent = val.title;
            li.appendChild(link);

            list.insertBefore(li, list.firstChild);
        });

        bookmarkList.appendChild(list);
    });

    chrome.topSites.get(function (sites) {
        var recentList = document.getElementById('recentList');
        var list = document.createDocumentFragment();

        sites.forEach(function (val) {
            var li = document.createElement('li');
            li.className = 'linkListItem';
            var link = document.createElement('a');
            link.href = val.url;
            link.textContent = val.title;

            //var img = document.createElement('img');
            //img.src = 'http:/placehold.it/50/50';

            //link.appendChild(img);

            li.appendChild(link);

            list.appendChild(li);
        });

        recentList.appendChild(list);
    });

    //chrome.notifications.create({
    //    'message': 'hello',
    //    'title': 'hello title',
    //    'iconUrl': '../../icons/icon48.png',
    //    'type': 'basic'
    //});

})();
