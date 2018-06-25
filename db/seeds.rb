100.times do
  App.create(name: Faker::App.name, description: Faker::TheFreshPrinceOfBelAir.quote, category: Faker::Demographic.race, price: Faker::Number.decimal(2), version: Faker::App.version, author: Faker::App.author, logo: Faker::LoremPixel.image("50x60") )
end