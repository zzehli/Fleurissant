# README
Fleurissant is an online floral boutique. The shop is a rails app that supports admin and regular customer user types. As a shop owner, one can manage inventory (prducts, orders, stocks) through admin management interface. As a customer, one can shop and pay for the plants.

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
## Resources
* insert data to db:
    ```
    plants(dev)* (1..10).each do |i|
    plants(dev)*   category = Category.find_or_create_by(name: "Category #{i}")
    plants(dev)*   Product.create!(name: "Product #{i}", description: "test description", price: i, category: category)
    plants(dev)> end
    ```
    see: https://guides.rubyonrails.org/active_record_querying.html

* migrations: https://guides.rubyonrails.org/active_record_migrations.html#changing-existing-migrations
* Active Storage: for manage file uploads to cloud storage: https://guides.rubyonrails.org/active_storage_overview.html
* interact with db with Active Record query: https://guides.rubyonrails.org/active_record_querying.html
* routing (including `_path` helper): https://guides.rubyonrails.org/routing.html#path-and-url-helpers

## Backlog
- [ ] redo application page layout, move navbar to a new layer
- [x] admin/products/:id/edit "update" button routing
- [x] active storage setup:
- [x] crop images when upload
- [x] cart (stock and orders: models)
- [x] payment
- [ ] table display on admin side
