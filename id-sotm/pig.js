window.addEventListener('load', function() {
    var w = window, d = document, cur = 0,
        style = d.head.appendChild(d.createElement('style'));
    function go(n) { w.scrollTo(0, w.innerHeight * (cur = n) + 1); }
    function set() {
        style.innerHTML = '.slide {display:block;' +
            'width:' + window.innerWidth + 'px;' +
            'height:' + window.innerHeight + 'px;}';
    }
    w.addEventListener('resize', set);
    w.addEventListener('scroll', function update() {
        cur = Math.floor(w.scrollY / w.innerHeight);
        if (w.location.hash !== cur) w.location.hash = cur;
    });
    d.addEventListener('click', function() { go(++cur); });
    d.addEventListener('keydown', function(e) {
        if (e.which === 39) go(Math.min(++cur));
        if (e.which === 37) go(Math.max(0, --cur));
    });
    function hash() {
        return Math.max(parseInt(window.location.hash.substring(1), 10), 0);
    }
    if (window.location.hash) cur = hash() || cur;
    window.onhashchange = function() { if (hash() !== cur) go(hash()); };
    set();
    go(cur);
});
