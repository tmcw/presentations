function reqFrame(fn) {
    (window.requestAnimationFrame || window.setTimeout)(fn, 0);
}

function scrollPercent() {
    return document.body.scrollTop /
        (document.documentElement.scrollHeight - window.innerHeight);
}

function barChart(elem, options) {
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
            });
        });
    });
}

var scrollChart = {
    barChart: barChart
};
