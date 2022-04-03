class PagesController < ApplicationController
  before_action :set_letters_numbers
  def home
    @state = "default"
    @ships_position = {}
    @game_state = {}
  end

  def demo
    @state = "silhouette"
    @ships_position = {
                        C2: {
                          ship: "Destroyer",
                          position: "ship-positionned"
                        },
                        C6: {
                          ship: "Submarine",
                          position: "ship-positionned"
                        },
                        F4: {
                          ship: "Cruiser",
                          position: "ship-positionned ship-positionned-vertical-cruiser"
                        },
                        I6: {
                          ship: "Battleship",
                          position: "ship-positionned ship-positionned-vertical-battleship"
                        },
                        G10: {
                          ship: "Aircraft",
                          position: "ship-positionned ship-positionned-vertical-aircraft"
                        }

                      }
    @game_state = { "board-grid-current-user": {
                              C4: "target-circle",
                              F6: "target-circle",
                              G5: "target-circle",
                              F8:"target-circle",
                              E10: "target-circle",
                              G10: "target-circle target-circle-hit",
                              G9: "target-circle target-circle-hit",
                              G8: "target-circle target-circle-hit",
                              G7: "target-circle target-circle-hit",
                              G6: "target-circle target-circle-hit"
                            },               
                    "board-grid-opponent": {
                                F3: "target-circle",
                                F5: "target-circle",
                                C6: "target-circle",
                                H6:"target-circle",
                                G7: "target-circle",
                                H9:"target-circle",
                                F4: "target-circle target-circle-hit",
                                G4: "target-circle target-circle-hit",
                                C7: "target-circle target-circle-hit",
                                D7: "target-circle target-circle-hit"
                              },
                }
  end

  private

  def set_letters_numbers
    @letters = ("A".."J").to_a
    @numbers = (1..10).to_a

  end
end
