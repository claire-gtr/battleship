class PagesController < ApplicationController
  def home
    @letters = ("A".."J").to_a
    @numbers = (1..10).to_a
  end
end
