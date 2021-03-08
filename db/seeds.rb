# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Article.destroy_all
User.destroy_all

@gabriel =
  User.create!(
    username: 'Gabe',
    first_name: 'Gabriel',
    last_name: 'Nassif',
    email: 'ben@ben.io',
    password: '123456',
  )
@bob =
  User.create!(
    username: 'SMan',
    first_name: 'Seth',
    last_name: 'Mansfield',
    email: 'bob@bob.io',
    password: '123456',
  )
@billy =
  User.create!(
    username: 'ReiderRabbit',
    first_name: 'Reid',
    last_name: 'Duke',
    email: 'billy@billy.io',
    password: '123456',
  )
@barbara =
  User.create!(
    username: 'Rich',
    first_name: 'Rich',
    last_name: 'Cali',
    email: 'barbara@barbara.io',
    password: '123456',
  )

puts "#{User.count} users created."

@standard = Category.create!(name: 'standard')
@modern = Category.create!(name: 'modern')
@pioneer = Category.create!(name: 'pioneer')
@vintage = Category.create!(name: 'vintage')
@pauper = Category.create!(name: 'pauper')
@commander = Category.create!(name: 'commander')
@budget = Category.create!(name: 'budget')
@miscellaneous = Category.create!(name: 'miscellaneous')

@format = [@standard, @modern, @pioneer, @vintage, @pauper, @commander]

puts "#{Category.count} categories created."

Article.create!(
  title: 'Gabriel Nassif Plays Modern Valakut Company',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    "Collected Company and Valakut are two staples of Modern, and incredibly powerful cards, so it's no wonder that they both appear in the same deck.",
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/gab2-1024x1024.jpg',
  user: @gabriel,
  categories: [@modern, @budget],
)

Article.create!(
  title: 'Deck Guide: Legacy GW Reclaimer',
  content:
    'With the Legacy metagame starting to shape up, we’re still seeing a lot of exciting decks find success that were struggling pre-ban. GW Reclaimer is one of those decks, and Magic Online player wara used the deck to take down a Challenge this past week. This is a really cool deck that started to show up a bit last year, but never really took off mostly as a result of a hostile metagame. Let’s take a look at the list and see what the deck is capable of. In many ways, this deck is a hybrid between Maverick and various Dark Depths decks. The primary plan is to create a Marit Lage with some level of consistency using cards like Elvish Reclaimer and Knight of the Reliquary. Cards like Mox Diamond speed up the strategy and Green Sun’s Zenith greatly increases the consistency of the deck. 
    Playing a variety of different creatures and lands gives this deck a toolbox feel, which means you’ll often be able to find the right card for the job. If you’re unable to make a Marit Lage, this deck has a natural back up plan of playing good creatures that can clock your opponent relatively quickly. This is the card that makes this deck play out so consistently. It’s extra copies of most of your best creatures and it increases access to the various toolbox cards the deck plays. While adding a mana to cards like Knight of the Reliquary is a cost, having access to 8 copies is a big deal and cards like Mox Diamond mitigate the drawback a fair amount. Just as Green Sun’s Zenith increases the consistency of the creature base, these cards greatly increase the consistency of the land base. These both make it relatively straightforward to assemble the Dark Depths/Thespian’s Stage combo while also providing access to a wide range of toolbox cards that can help out in a pinch. They’re also very solid creatures on rate, so they do a great job applying pressure to your opponents. Crop Rotation doesn’t apply the same pressure that the creatures do, but it’s one of the best cards in the game at assembling a fast Marit Lage, so it serves an excellent purpose here. One of the key differences between this deck and a deck like Turbo Depths is the access to removal. Instead of being a straightforward combo deck, this removal suite lets the deck play out like a midrange deck. Swords to Plowshares is just the most efficient removal spell of all time and it let’s you keep up with most creature decks. Skyclave Apparition has a ton of utility, exiling most cards you’ll care about and provides a nice 1.5 to two-for-one. It gives the deck the additional angle of playing out like a traditional Maverick deck, which is really meaningful in a format like Legacy that has really potent threats and answers. These make up the creature toolbox of the deck and both serve a great purpose. Sylvan Safekeeper not only protects Marit Lage very well, but works in tandem with Knight of the Reliquary, both protecting it and acting as a way to dump lands into your graveyard. Knight of Autumn is mostly in the deck as a way to answer problematic artifacts and enchantments, but can also gain some life in a pinch (or occasionally provide a relatively large body, when needed). In conjunction with Mox Diamond, Sylvan Library can generate a lot of card advantage and selection very early on. Some decks, like Miracles, are going to have a tough time dealing with it. Since this is a Marit Lage deck, the life loss is often mitigated by your opponents casting Swords to Plowshares on the big ol’ 20/20. Sylvan is slow against certain decks, like combo and Delver, but it can still have a potent effect on the game.',
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://227rsi2stdr53e3wto2skssd7xe-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/richreclaimerheader.jpg',
  user: @barbara,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/WebsiteSquareGenericThumb-mengu-1024x1024.jpg',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/vince4-1024x1024.jpg',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/wernegiantssite-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/WebsiteSquareGenericThumb-t5-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/levinefeldonsite-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample, @miscellaneous],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/hueybattleofwitssite-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/saintgradingsite-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/mengubantsite-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  summary:
    'This is a sample summary. Please read me because my information is very important!',
  img_url:
    'https://strategy.channelfireball.com/wp-content/uploads/2021/03/reid2-768x768.jpg',
  user: User.all.sample,
  categories: [@format.sample],
)

puts "#{Article.count} articles created."
