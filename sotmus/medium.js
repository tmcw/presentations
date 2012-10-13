window.onload = function() {
    var s = document.getElementsByTagName('div'), cur = 0;
    if (!s) return;
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    function bgImage(i) {
        c.width = 3;
        c.height = i;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 1, i);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 1, 1);
        document.body.style.backgroundImage = 'url(' +
            c.toDataURL() + ')';
    }
    var cue = document.body.appendChild(document.createElement('span'));
    function go(n) {
        cur = n;
        var i = 1e3, e = s[n];
        for (var k = 0; k < s.length; k++) s[k].style.display = 'none';
        e.style.display = 'inline';
        e.style.fontSize = i + 'px';
        var bg = false;
        if (e.firstChild.nodeName === 'IMG') {
            document.body.style.backgroundImage = 'url(' + e.firstChild.src + ')';
            document.body.className = 'has-bg';
            e.firstChild.style.display = 'none';
            bg = true;
        } else {
            document.body.style.backgroundImage = '';
            document.body.className = '';
        }
        while (
            e.offsetWidth > window.innerWidth ||
            e.offsetHeight > window.innerHeight) {
            e.style.fontSize = (i -= 10) + 'px';
            e.style.lineHeight = (i) + 'px';
        }
        if (s[n + 1]) {
            cue.className = 'cue';
            cue.innerHTML = (s[n + 1].innerText || s[n + 1].textContent).slice(0, 25);
        }
        // if (!bg) bgImage(i);
        e.style.marginTop = ((window.innerHeight - e.offsetHeight) / 2) + 'px';
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
    };
    if (window.location.hash) cur = parse_hash() || cur;
    window.onhashchange = function() {
        var c = parse_hash();
        if (c !== cur) go(c);
    };

    go(cur);

    var i = 0;
    var names = document.getElementById('names').innerHTML.split(/\s+/).map(function(n) {
        var s = document.createElement('a');
        s.className = 'name-' + (i++ % 3);
        s.innerHTML = n + ' ';
        s.href = 'http://openstreetmap.org/user/' + n;
        return s;
    });
    document.getElementById('names').innerHTML = '';
    names.map(function(n) {
        document.getElementById('names').appendChild(n);
    });
};
