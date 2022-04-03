# frozen_string_literal: true

require "rails_helper"

RSpec.describe Ships::AircraftCarrierComponent, type: :component do
  it "Renders aircraft component with correct " do
    render_inline(described_class.new(state: "state", ship_position: "" , ship_positionned_vertical: ""))

    expect(rendered_component).to have_css "ship-circle-default"
  end
end
