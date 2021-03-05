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

@ben = User.create!(username: 'ben', email: 'ben@ben.io', password: '123456')
@bob = User.create!(username: 'bob', email: 'bob@bob.io', password: '123456')
@billy =
  User.create!(username: 'billy', email: 'billy@billy.io', password: '123456')
@barbara =
  User.create!(
    username: 'barbara',
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
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @budget],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample, @miscellaneous],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample],
)

Article.create!(
  title: 'This is a title',
  content: Faker::Lorem.paragraphs(number: 4),
  img_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  categories: [@format.sample],
)

puts "#{Article.count} articles created."
