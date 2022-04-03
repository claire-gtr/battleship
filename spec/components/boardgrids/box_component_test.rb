# frozen_string_literal: true

require "rails_helper"

RSpec.describe Boardgrids::BoxComponent, type: :component do
  it "Renders box component with correct classes and text" do
    render_inline(described_class.new(classname: "box box-empty", data_xy: "F6", target_state: "target-circle", ship_position: {}, user: "board-grid-current-user"))

    expect(rendered_component).to have_selector("div[data-xy='F6']")
  end
end
