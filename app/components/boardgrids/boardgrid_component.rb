# frozen_string_literal: true

class Boardgrids::BoardgridComponent < ViewComponent::Base
  
  def initialize(classname:, letters:, numbers:)
    @classname = classname
    @letters = letters
    @numbers = numbers
  end

end
