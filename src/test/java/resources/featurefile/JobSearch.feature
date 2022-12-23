Feature: Job search Test
  As a user I want to search different jobs

  @Smoke @Regression

  Scenario Outline: Verify Job Search Result Using Different DataSet
    Given I am on homepage
    When I click on Accept alert
    And  I Enter Job title "<Job Title>"
    And  I Enter Location "<Location>"
    And  I Select Distance "<Distance>"
    And I enter on more search options
    And  I Enter Min Salary "<Min Salary>"
    And  I Enter Max salary "<Max salary>"
    And  I Select Salary Type "<Salary Type>"
    And  I Select Job Type "<Job Type>"
    And I Click on find jobs button
    Then I should see search result "<Result>"

    Examples:
      | Job Title   | Location   | Distance       | Min Salary | Max salary | Salary Type | Job Type  | Result                                      |
      | Tester      | Harrow     | up to 45 miles | 30000      | 50000      | Per annum   | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Manager     | London     | up to 10 miles | 20000      | 30000      | Per month   | Permanent | Permanent Manager jobs in London            |
      | Electrician | Leicester  | up to 25 miles | 1000       | 1500       | Per month   | Permanent | Permanent Electrician jobs in Leicester     |
      | Cook        | Leeds      | up to 35 miles | 2500       | 3600       | Per month   | Contract  | Contract Cook jobs in Leeds                 |
      | Cashier     | Kettering  | up to 70 miles | 10         | 14         | Per hour    | Temporary | Temporary Cashier jobs in Kettering         |
      | Engineer    | Birmingham | up to 15 miles | 30000      | 35000      | Per Annum   | Permanent | Permanent Engineer jobs in Birmingham       |


