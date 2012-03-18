window.onload = function() {
    var s = document.getElementsByTagName('div'), cur = 0;
    if (!s) return;
    var bgc = document.createElement('canvas');
    var bgctx = bgc.getContext('2d');
    bgc.width = 2;
    bgc.height = 150;
    bgctx.fillStyle = '#555';
    bgctx.fillRect(0, 0, 1, 1);
    console.log(bgc.toDataURL());
    document.body.style.backgroundImage = 'url(' + bgc.toDataURL() + ')';

    function go(n) {
        cur = n;
        var i = 1e3, e = s[n];
        for (var k = 0; k < s.length; k++) s[k].style.display = 'none';
        e.style.display = 'inline';
        if (e.firstChild.nodeName === 'IMG') {
            document.body.style.backgroundImage = 'url(' + e.firstChild.src + ')';
            e.firstChild.style.display = 'none';
        } else {
            document.body.style.backgroundImage = 'url(' + bgc.toDataURL() + ')';
        }
        if (window.location.hash !== n) window.location.hash = n;
        document.title = e.textContent || e.innerText;
    }
    document.onclick = function() {
        go(++cur % (s.length));
    };
    document.onkeydown = function(e) {
        (e.which === 39) && go(Math.min(s.length - 1, ++cur));
        (e.which === 37) && go(Math.max(0, --cur));
    };
    function parse_hash() {
        return Math.max(Math.min(
            s.length - 1,
            parseInt(window.location.hash.substring(1), 10)), 0);
    }
    if (window.location.hash) cur = parse_hash() || cur;
    window.onhashchange = function() {
        var c = parse_hash();
        if (c !== cur) go(c);
    };

    go(cur);
};
