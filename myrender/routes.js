const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('pro', '/:slug.html')
.add('cart', '/cart.html')
.add('about', '/about.html')
.add('checkOut', '/checkout.html')
.add('contact', '/contact.html')




