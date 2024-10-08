class Product < ApplicationRecord
  has_one_attached :image do |attachable|
    attachable.variant :card, resize_and_pad: [ 500, 600 ]
  end

  has_many :stocks
  has_many :order_products
end
