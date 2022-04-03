# frozen_string_literal: true

class Ships::CruiserComponent < ViewComponent::Base

  def initialize(state:, ship_position:)
    @state = state
    @ship_position = ship_position
  end

end
