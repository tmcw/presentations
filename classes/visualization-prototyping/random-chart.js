var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200,200)
  , ctx = canvas.getContext('2d');

fs.readFile(__dirname + 'graph-paper.jpg', function(err, graph){
  if (err) throw err;
  img = new Image;
  img.src = graph;
  ctx.drawImage(img, 0, 0);
});
