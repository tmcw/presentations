var reqFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.setTimeout;

function scrollPercent() {
    return (document.body.scrollTop || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight - window.innerHeight);
}

function bar(elem, options) {
    window.addEventListener('load', function() {
        var ctx = elem.getContext('2d');
        var w = ctx.canvas.offsetWidth,
            h = ctx.canvas.offsetHeight;
        ctx.canvas.width = ctx.canvas.offsetWidth;
        ctx.canvas.height = ctx.canvas.offsetHeight;
        options = options || {};
        options.bg = options.bg || '#fff';
        options.fg = options.fg || '#fae';
        window.addEventListener('scroll', function() {
            var p = scrollPercent();
            reqFrame(function() {
                ctx.fillStyle = options.bg;
                ctx.fillRect(0, 0, w, h);
                ctx.fillStyle = options.fg;
                ctx.fillRect(0, 0, w * p, h);
            }, 0);
        });
    });
}

function pie(elem, options) {
    window.addEventListener('load', function() {
        var ctx = elem.getContext('2d');
        var w = ctx.canvas.offsetWidth,
            h = ctx.canvas.offsetHeight;
        ctx.canvas.width = ctx.canvas.offsetWidth;
        ctx.canvas.height = ctx.canvas.offsetHeight;
        options = options || {};
        options.bg = options.bg || '#fff';
        options.face = options.face || '#eee';
        options.fg = options.fg || '#fae';
        window.addEventListener('scroll', function() {
            var p = scrollPercent();
            reqFrame(function() {
                ctx.fillStyle = options.bg;
                ctx.fillRect(0, 0, w, h);

                ctx.fillStyle = options.face;
                ctx.beginPath();
                ctx.arc(
                    w / 2,
                    h / 2,
                    w / 2,
                    0, Math.PI * 2, false);
                ctx.fill();

                ctx.fillStyle = options.fg;
                ctx.beginPath();
                ctx.moveTo(w / 2, h / 2);
                ctx.arc(w / 2, h / 2,
                    w / 2,
                    Math.PI * (- 0.5 + 2 * 0),
                    Math.PI * (- 0.5 + 2 * p), false);
                ctx.lineTo(w / 2, h / 2);
                ctx.closePath();
                ctx.fill();
            }, 0);
        });
    });
}

var scrollChart = {
    bar: bar,
    pie: pie
};
