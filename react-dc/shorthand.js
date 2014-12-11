document.body.innerHTML =
  document.body.innerHTML.replace(
    /```(\w+)/g, function(match) {
        return '<code class="' + match + '">';
    }).replace(
    /(```\n)/g, function(match) {
        return '</code>';
    });
