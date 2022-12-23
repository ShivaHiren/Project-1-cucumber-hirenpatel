$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job search Test",
  "description": "As a user i want to search different jobs",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"\u003cJob Title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"\u003cDistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"\u003cMin Salary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"\u003cMax salary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"\u003cSalary Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"\u003cJob Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Location",
        "Distance",
        "Min Salary",
        "Max salary",
        "Salary Type",
        "Job Type",
        "Result"
      ],
      "line": 20,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 45 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;2"
    },
    {
      "cells": [
        "Manager",
        "London",
        "up to 10 miles",
        "20000",
        "30000",
        "Per month",
        "Permanent",
        "Permanent Manager jobs in London"
      ],
      "line": 22,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;3"
    },
    {
      "cells": [
        "Electrician",
        "Leicester",
        "up to 25 miles",
        "1000",
        "1500",
        "Per month",
        "Permanent",
        "Permanent Electrician jobs in Leicester"
      ],
      "line": 23,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;4"
    },
    {
      "cells": [
        "Cook",
        "Leeds",
        "up to 35 miles",
        "2500",
        "3600",
        "Per month",
        "Contract",
        "Contract Cook jobs in Leeds"
      ],
      "line": 24,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;5"
    },
    {
      "cells": [
        "Cashier",
        "Kettering",
        "up to 70 miles",
        "10",
        "14",
        "Per hour",
        "Temporary",
        "Temporary Cashier jobs in Kettering"
      ],
      "line": 25,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;6"
    },
    {
      "cells": [
        "Engineer",
        "Birmingham",
        "up to 15 miles",
        "30000",
        "35000",
        "Per Annum",
        "Permanent",
        "Permanent Engineer jobs in Birmingham"
      ],
      "line": 26,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4431031800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 45 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 63194300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1612335400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1590621300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 63523700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 45 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 46986700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 63349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 219029700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 88029100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 69347600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 59772800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 82908100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 16761712100,
  "status": "passed"
});
formatter.after({
  "duration": 866424200,
  "status": "passed"
});
formatter.before({
  "duration": 3861223600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"20000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"30000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Permanent Manager jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 146400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1655597200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1570589800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 59483600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 60022600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 58594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 185663200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 66450300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 58628300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 53084600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 96756200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Manager jobs in London",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 24574506300,
  "status": "passed"
});
formatter.after({
  "duration": 767867000,
  "status": "passed"
});
formatter.before({
  "duration": 3093077100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Electrician\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"Leicester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"1000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"1500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Permanent Electrician jobs in Leicester\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1589758800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrician",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1578925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leicester",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 72459800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 49037400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 59557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 189130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 69205500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 60926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 44459100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 94952700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Electrician jobs in Leicester",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 12558011600,
  "status": "passed"
});
formatter.after({
  "duration": 742797700,
  "status": "passed"
});
formatter.before({
  "duration": 2545999700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Cook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"Leeds\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"2500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"3600\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Contract Cook jobs in Leeds\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1601472300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cook",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1614291500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 63971400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 54684400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 65371900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 211602700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3600",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 68853800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 48470600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 44495100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 71910700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Cook jobs in Leeds",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 3839121400,
  "status": "passed"
});
formatter.after({
  "duration": 700525700,
  "status": "passed"
});
formatter.before({
  "duration": 2554751900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Cashier\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"Kettering\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 70 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"14\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Temporary Cashier jobs in Kettering\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1643662400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1570623400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kettering",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 68419400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 70 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 53499300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 57787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 202247600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 63330100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 55394800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 40138000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 71677700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Cashier jobs in Kettering",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 4731075500,
  "status": "passed"
});
formatter.after({
  "duration": 757011200,
  "status": "passed"
});
formatter.before({
  "duration": 2423971000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Accept alert",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter Job title \"Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Location \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Enter Min Salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter Max salary \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select Salary Type \"Per Annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see search result \"Permanent Engineer jobs in Birmingham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnAcceptAlert()"
});
formatter.result({
  "duration": 1585069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1579919500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 72420000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 52569800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iEnterOnMoreSearchOptions()"
});
formatter.result({
  "duration": 59136500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 202998300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 61415300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per Annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 53210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 44970800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 68859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Engineer jobs in Birmingham",
      "offset": 28
    }
  ],
  "location": "JobSearchSteps.iShouldSeeSearchResult(String)"
});
formatter.result({
  "duration": 3871471200,
  "status": "passed"
});
formatter.after({
  "duration": 694662600,
  "status": "passed"
});
});