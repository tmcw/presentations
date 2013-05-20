window.onload = function() {
    var w = window, d = document, cur = 0,
        style =
        d.head.appendChild(d.createElement('style'));
    function go(n) { w.scrollTo(0, w.innerHeight * (cur = n)); }
    function set() {
        style.innerHTML = '.slide {display:block;' +
            'width:' + window.innerWidth + 'px;' +
            'height:' + window.innerHeight + 'px;';
    }
    w.onresize = set;
    w.onscroll = function update() {
        cur = Math.floor(w.scrollY / w.innerHeight);
        if (w.location.hash !== cur) w.location.hash = cur;
    };
    d.onclick = function() { go(++cur); };
    d.onkeydown = function(e) {
        (e.which === 39) && go(Math.min(++cur));
        (e.which === 37) && go(Math.max(0, --cur));
    };
    function hash() {
        return Math.max(parseInt(window.location.hash.substring(1), 10), 0);
    }
    if (window.location.hash) cur = hash() || cur;
    window.onhashchange = function() { if (hash() !== cur) go(hash()); };
    set(); go(cur);
};
