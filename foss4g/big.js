window.onload = function() {
    var t = document.getElementById('t'),
        i = 10;

    t.style.fontSize = ++i;

    do {
        t.style.fontSize = (i += 0.5);
    } while (
        t.offsetWidth < window.innerWidth &&
        t.offsetHeight < (window.innerHeight - 10));

    window.onkeydown = function(e) {
        if (e.which === 39 || e.which == 37) {
            window.location = window.location.href.replace(/(\d+)\.html$/, function(d) {
                var n = parseInt(d);
                return ((e.which == 39) ? ++n : --n) + '.html';
            });
        }
    };
};
