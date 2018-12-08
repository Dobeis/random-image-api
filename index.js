const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(express.static('img'))

const images = fs.readdirSync(
  path.join(__dirname, 'img')
)

const blurredImages = [
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/01.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/02.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/03.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/04.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/05.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/06.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/07.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/08.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/09.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/blurred/10.jpg'
]

app.get('/', (req, res) => {
  const image = images[Math.floor(Math.random() * images.length)]
  res.redirect(image)
})

app.get('/blurred', (req, res) => {
  const imageBlur = blurredImages[Math.floor(Math.random() * blurredImages.length)]
  res.redirect(imageBlur)
})

app.listen(3000, () => {
  console.log('api is running ..')
})
