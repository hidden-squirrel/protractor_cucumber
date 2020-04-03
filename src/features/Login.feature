Feature: Login
    To test the login functionality

    Scenario Outline: Login Happy Path
        Given I launch the application
        Then I enter username
        Then I enter password
        Then I click on Login

        Examples:
            | UserName | Password |
            | Value 1  | Value 2  |
