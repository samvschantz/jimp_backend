let express = require('express');
let router = express.Router();
let Jimp = require('jimp');
let bodyParser = require('body-parser')

console.log('really??')

router.get('/', function(req, res, next){
  console.log('was this messing it up?');
})
router.post('/', function(req, res, next) {
  console.log('why cant post?');
    let text = req.body.text;
    let fileName = 'public/images/red_hat.jpg';
    let imageCaption = text;
    let loadedImage;
    let newPath = 'public/images/' + text.toLowerCase().replace(/ /g, "_") + '.jpg'
    Jimp.read(fileName)
      .then(function (image) {
          loadedImage = image;
          return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      })
      .then(function (font) {
          loadedImage.print(font, 200, -100, {
                              text: imageCaption,
                              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                              alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                            }, 400, 800)
                     .write(newPath);
      })
      .then(function(){
        res.send(newPath);
      })
      .catch(function (err) {
          console.error(err);
      });
});
module.exports = router;