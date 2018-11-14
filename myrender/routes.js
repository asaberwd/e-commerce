const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('cart', '/cart.html')
.add('about', '/about.html')
.add('privacy', '/privacy.html')
.add('login', '/login.html')
.add('register', '/register.html')
.add('checkOut', '/checkout.html')
.add('c', '/c.html')
.add('contact', '/contact.html')
.add('singleProduct', '/:slug.html')






