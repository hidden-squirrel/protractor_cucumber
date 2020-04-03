Feature: Login
    To test the login functionality

    Scenario Outline: Login Happy Path
        
        Given I launch the application
        Then I login with <UserName>
        Then I enter <Password>
        Then I click on Login

        Examples:
            | UserName | Password |
            | Value 1  | Value 2  |
