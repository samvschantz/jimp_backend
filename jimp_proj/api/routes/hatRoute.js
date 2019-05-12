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
    console.log(req.body);
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