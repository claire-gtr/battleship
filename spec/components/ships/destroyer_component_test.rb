# frozen_string_literal: true

require "rails_helper"

RSpec.describe Ships::DestroyerComponent, type: :component do
  it "renders component" do
    binding.pry
    render_inline(described_class.new(title: "my title")) { "Hello, World!" }

    expect(rendered_component).to have_css "span[title='my title']", text: "Hello, World!"
    # or, to just assert against the text
    expect(rendered_component).to have_text "Hello, World!"
  end
end
