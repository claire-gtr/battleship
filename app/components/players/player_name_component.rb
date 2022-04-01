# frozen_string_literal: true

class Players::PlayerNameComponent < ViewComponent::Base

  def initialize(classname:)
    @classname = classname
  end

end
