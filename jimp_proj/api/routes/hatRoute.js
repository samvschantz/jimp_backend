var express = require('express');
var router = express.Router();
var Jimp = require('jimp');
console.log('really??')
router.get('/', function(req, res, next) {
    let fileName = 'assets/red_hat.jpg';
    let imageCaption = 'O SHIT IT WORK';
    let loadedImage;
    Jimp.read(fileName)
      .then(function (image) {
          loadedImage = image;
          console.log(image);
          console.log(loadedImage);
          return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
      })
      .then(function (font) {
          loadedImage.print(font, 10, 10, imageCaption)
                     .write(fileName);
      })
      .catch(function (err) {
          console.error(err);
      });
});
module.exports = router;