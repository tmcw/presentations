window.onload = function() {
    var s = document.getElementsByTagName('div'), cur = 0;
    if (!s) return;
    function go(n) {
        cur = n;
        var i = 1e3, e = s[n];
        for (var k = 0; k < s.length; k++) s[k].style.display = 'none';
        e.style.display = 'inline';
        e.style.fontSize = i + 'px';
        if (e.firstChild.nodeName === 'IMG') {
            document.body.style.backgroundImage = 'url(' + e.firstChild.src + ')';
            e.firstChild.style.display = 'none';
        } else {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundColor = e.style.backgroundColor;
        }
        while (
            e.offsetWidth > window.innerWidth ||
            e.offsetHeight > window.innerHeight) {
            e.style.fontSize = (i -= 10) + 'px';
            if (i < 0) break;
        }
        e.style.marginTop = ((window.innerHeight - e.offsetHeight) / 2) + 'px';
        if (window.location.hash !== n) window.location.hash = n;
        document.title = e.textContent || e.innerText;
    }
    document.onclick = function() {
        if (editing) return;
        go(++cur % (s.length));
    };
    var editing = false;
    function goeditable() {
        for (var k = 0; k < s.length; k++) s[k].setAttribute('contenteditable', 'true');
        editing = true;
    }
    function stopedit(e) {
        editing = false;
        for (var k = 0; k < s.length; k++) s[k].removeAttribute('contenteditable');
        e.preventDefault();
    }
    document.onkeydown = function(e) {
        (e.keyCode == 73) && goeditable();
        (e.keyCode == 27) && stopedit(e);
        if (editing) return;
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
