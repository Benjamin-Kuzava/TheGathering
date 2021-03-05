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
@billy = User.create!(username: 'billy', email: 'billy@billy.io', password: '123456')
@barbara = User.create!(username: 'barbara', email: 'barbara@barbara.io', password: '123456')


puts "#{User.count} users created."
