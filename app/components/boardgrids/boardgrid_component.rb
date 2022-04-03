# frozen_string_literal: true

class Boardgrids::BoardgridComponent < ViewComponent::Base
  
  def initialize(classname:, letters:, numbers:, game_state:, ships_position:)
    @classname = classname
    @letters = letters
    @numbers = numbers
    @game_state = game_state
    @ships_position = ships_position
  end

end
