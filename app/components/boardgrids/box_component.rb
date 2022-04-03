# frozen_string_literal: true

class Boardgrids::BoxComponent < ViewComponent::Base

  def initialize(classname:, target_state:, data_xy:, ship_position:, user:)
    @classname = classname
    @target_state = target_state
    @data_xy = data_xy
    @ship_position = ship_position
    @user = user
  end

end
