# frozen_string_literal: true

require "rails_helper"

RSpec.describe Players::PlayerNameComponent, type: :component do
  it "renders component" do
    render_inline(described_class.new(classname: "btn-blue")) { "Your Fleet" }

    expect(rendered_component).to have_text "Your Fleet"
    expect(rendered_component).to have_css ".btn-blue"
  end
end
