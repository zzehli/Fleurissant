# README
Fleurissant is an online floral boutique. The shop is a rails app that supports admin and regular customer user types. As a shop owner, one can manage inventory (prducts, orders, stocks) through admin management interface. As a customer, one can shop and pay for the plants.

Live site: https://mysite-i60f.onrender.com/

And a video [demo](https://youtu.be/FxJsEk3_jPs)

## Techical details
* Dedicated admin interface to manage products, stocks and orders
* Authentication through devise gem
* Image managed by Active Storage, hosted on AWS S3
* Payment through Stripe
* UI with Tailwind and daisyUI
* Database using Postgres

## Dev Notes
- Run dev env with: `./bin/dev`
- Clear cache: `bin/rails tmp:clear`
- start postgres `sudo service postgresql start`
- install bundle: `bundle install`

## Backlog
- [ ] redo application page layout, move navbar to a new layer
- [x] admin/products/:id/edit "update" button routing
- [x] active storage setup:
- [x] crop images when upload
- [x] cart (stock and orders: models)
- [x] payment
- [ ] table display on admin side
