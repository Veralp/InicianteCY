Feature: image resgistration
  Scenario: Submitting an imagewith invalid inputs 
     Given I am on the image resgistration page
     When I enter "" in the titlefield
     Then I enter "" in the URL field
     Then I click thr submit button 
     Then i should see "Please type a title for the image" message above the title field
     And I should see "Please type a valid URL" message above the imageURL field
     And I shoulkd see an exclamation icon thetitle amd URL fields
