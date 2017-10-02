$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("new_user_can_be_created.feature");
formatter.feature({
  "line": 1,
  "name": "A new user can be created",
  "description": "",
  "id": "a-new-user-can-be-created",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2024319569,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open \u0027http://85.93.17.135:9000/\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want to \u0027delete\u0027 all users",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://85.93.17.135:9000/",
      "offset": 8
    }
  ],
  "location": "Steps.open_url(String)"
});
formatter.result({
  "duration": 1372237859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.delete_all_users(String)"
});
formatter.result({
  "duration": 686178335,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I would​ like​ to​ create new valid user account.",
  "description": "",
  "id": "a-new-user-can-be-created;i-would​-like​-to​-create-new-valid-user-account.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I create an account using the following details:",
  "rows": [
    {
      "cells": [
        "Name:CucumberUser",
        "Email:cucumberuseremail@gmail.com",
        "Password:123456",
        "Confirmation password:123456"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the user \u0027CucumberUser\u0027 is exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.filter_search_results(DataTable)"
});
formatter.result({
  "duration": 1413249036,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 28217,
  "status": "passed"
});
});