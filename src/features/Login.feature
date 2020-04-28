@Login
Feature: Login
    To test the login functionality

    @HappyFlow
    Scenario Outline: Login Happy Path_<UserName>
        Given I launch the application
        Then I enter username
        Then I enter password
        Then I click on Login
        Then I verify user is logged in
        # Then I verify user is logged in

        Examples:
            | UserName | Password  |
            | xyz      | ******    |
            | abc      | *****     |
            | bjds     | uwroalkda |
            | cbsbjds  | skfjseke  |
            | fksejfs  | shdjjse   |

