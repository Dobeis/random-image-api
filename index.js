const express = require('express')
const app = express()

const images = [
  'https://s3.amazonaws.com/picknoffice-home-images/Coworking-1-Copia.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/IMA-EKKO-GOLF-COWORKING-R03.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/brainstorm-business-colleagues-company-conference-corporate-1451427-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/building-vehicle-workspace-office-business-room-912886-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/cafe-restaurant-bar-office-property-business-987325-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/coworking-porto-alegre-flowork117.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/coworking-space-colony-common-ground-f6.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/desk-light-wood-house-floor-home-790669-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/desk-light-wood-meeting-ceiling-decoration-790647-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/disruptcre-coworking.001.jpeg',
  'https://s3.amazonaws.com/picknoffice-home-images/floor-seating-interior-home-ceiling-office-1393880-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/group-2606784_1920.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/laptop-desk-notebook-computer-smartphone-work-816640-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/laptop-desk-notebook-smartphone-mac-writing-763746-pxhere.com.jpg',
  'https://s3.amazonaws.com/picknoffice-home-images/laptop-notebook-computer-macbook-mac-work-592444-pxhere.com.jpg'
]

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

app.use('/', (req, res) => {
  const image = images[Math.floor(Math.random() * images.length)]
  res.redirect(image)
})

app.use('/blurred', (req, res) => {
  const image = blurredImages[Math.floor(Math.random() * blurredImages.length)]
  res.redirect(image)
})

app.listen(3000, () => {
  console.log('api is running ..')
})
