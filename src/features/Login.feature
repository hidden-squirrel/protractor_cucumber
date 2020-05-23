@Login
Feature: Login
    To test the login functionality

    @HappyFlow
    Scenario Outline: Login Happy Path_<UserName>
        Given I launch the application
        Then I enter "<UserName>" in "email"
        Then I enter password
        Then I click on Login
        Then I verify user is logged in for "<TC_Name>"

        Examples:
            | UserName | Password | TC_Name |
            | xyz      | ******   | TC01     |
# | abc      | *****     |
# | bjds     | uwroalkda |
# | cbsbjds  | skfjseke  |
# | fksejfs  | shdjjse   |

