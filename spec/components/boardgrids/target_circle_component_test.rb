# frozen_string_literal: true

require "rails_helper"

RSpec.describe Boardgrids::TargetCircleComponent, type: :component do
  it "Renders target circle component with correct classes and text" do
    render_inline(described_class.new(classname: "target-circle"))

    expect(rendered_component).to have_css ".target-circle"
  end
end
