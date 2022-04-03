# frozen_string_literal: true

require "rails_helper"

RSpec.describe Boardgrids::BoardgridComponent, type: :component do
  it "Renders boardgrid component with correct classes" do
    render_inline(described_class.new(ships_position: {}, classname: "board-grid-current-user", letters: ("A".."J").to_a, numbers: (1..10).to_a , game_state: {}))

    expect(rendered_component).to have_selector("div[data-xy='F6']")
    expect(rendered_component).to have_css(".board-grid-current-user")
  end
end
