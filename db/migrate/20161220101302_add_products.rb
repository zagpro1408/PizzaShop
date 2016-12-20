class AddProducts < ActiveRecord::Migration[5.0]
  def change

    Product.create :title => 'Hawaiian', :description => 'This is Hawaiian pizza', :price => 350, :size => 30, :is_spicy => false, :is_veg => false, :is_bets_offer => false, :path_to_image => '/images/Hawai.jpg'

    Product.create :title => 'Pepperoni', :description => 'Nice Pepperoni pizza', :price => 400, :size => 30, :is_spicy => false, :is_veg => false, :is_bets_offer => true, :path_to_image => '/images/Italian.jpg'

    Product.create :title => 'Mexican', :description => 'Amazing Mexican pizza', :price => 400, :size => 30, :is_spicy => true, :is_veg => false, :is_bets_offer => false, :path_to_image => '/images/Mexican.jpg'

  end

end
