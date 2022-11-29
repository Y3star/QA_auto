Feature: webdriver.io

  Scenario: As a user, can type in input

    Given I am on webdriverio page 
    When I click on search
    Then I type text to search
