class PagesController < ApplicationController
  before_action :set_letters_numbers
  def home;end

  def demo; end

  private

  def set_letters_numbers
    @letters = ("A".."J").to_a
    @numbers = (1..10).to_a
  end
end
