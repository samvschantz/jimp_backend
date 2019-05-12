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
    console.log(req.body);
    let fileName = 'assets/red_hat.jpg';
    let imageCaption = text;
    let loadedImage;
    Jimp.read(fileName)
      .then(function (image) {
          loadedImage = image;
          console.log(image);
          console.log(loadedImage);
          return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
      })
      .then(function (font) {
          loadedImage.print(font, 0, -100, {
                              text: imageCaption,
                              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                              alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                            }, 800, 800)
                      .write('assets/' + text + '.jpg');
      })
      .catch(function (err) {
          console.error(err);
      });
});
module.exports = router;