$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("new_user_can_be_created.feature");
formatter.feature({
  "line": 1,
  "name": "A new user can be created",
  "description": "",
  "id": "a-new-user-can-be-created",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2043409871,
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
  "duration": 13387985448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 1939706957,
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
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the user \u0027CucumberUser\u0027 is exist",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.create_new_account(DataTable)"
});
formatter.result({
  "duration": 1306087581,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 6366928267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 23
    }
  ],
  "location": "Steps.check_created_account(String)"
});
formatter.result({
  "duration": 94782267,
  "status": "passed"
});
formatter.after({
  "duration": 742486162,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027\u003cName\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027\u003cEmail\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027\u003cPassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027\u003cConfirmationPassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027\u003cErrorMessage\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "a-new-user-can-be-created;;",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Password",
        "ConfirmationPassword",
        "ErrorMessage"
      ],
      "line": 23,
      "id": "a-new-user-can-be-created;;;1"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail@gmail.com",
        "123",
        "123",
        "Password must be at least 6 chars"
      ],
      "line": 24,
      "id": "a-new-user-can-be-created;;;2"
    },
    {
      "cells": [
        "",
        "cucumberuseremail@gmail.com",
        "123456",
        "123456",
        "Required"
      ],
      "line": 25,
      "id": "a-new-user-can-be-created;;;3"
    },
    {
      "cells": [
        "CucumberUser",
        "",
        "123456",
        "123456",
        "Required"
      ],
      "line": 26,
      "id": "a-new-user-can-be-created;;;4"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail@gmail.com",
        "",
        "123456",
        "Required"
      ],
      "line": 27,
      "id": "a-new-user-can-be-created;;;5"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail@gmail.com",
        "123456",
        "",
        "passwords are not the same"
      ],
      "line": 28,
      "id": "a-new-user-can-be-created;;;6"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail@gmail.com",
        "123456",
        "654321",
        "passwords are not the same"
      ],
      "line": 29,
      "id": "a-new-user-can-be-created;;;7"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail@gmail",
        "123456",
        "123456",
        "Invalid email address"
      ],
      "line": 30,
      "id": "a-new-user-can-be-created;;;8"
    },
    {
      "cells": [
        "CucumberUser",
        "cucumberuseremail",
        "123456",
        "123456",
        "Invalid email address"
      ],
      "line": 31,
      "id": "a-new-user-can-be-created;;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1057737332,
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
  "duration": 2969235119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 713081994,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail.com\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Password must be at least 6 chars\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 180835112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 287888760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 128278237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 124215668,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 1428965649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password must be at least 6 chars",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 30028013795,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat step_definition.Steps.expected_error_message(Steps.java:138)\n\tat ✽.Then I should see the message \u0027Password must be at least 6 chars\u0027(new_user_can_be_created.feature:21)\n",
  "status": "failed"
});
formatter.after({
  "duration": 1867587671,
  "status": "passed"
});
formatter.before({
  "duration": 1088448073,
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
  "duration": 3070904599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 673651724,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail.com\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123456\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Required\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 116318016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 278399970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 146952288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 140962892,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 2223085134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Required",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 75226038,
  "status": "passed"
});
formatter.after({
  "duration": 473645913,
  "status": "passed"
});
formatter.before({
  "duration": 1273967755,
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
  "duration": 6777943290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 723210381,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123456\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Required\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 172855444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 120569010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 143464085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 150128019,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 2567339457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Required",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 68164436,
  "status": "passed"
});
formatter.after({
  "duration": 824846637,
  "status": "passed"
});
formatter.before({
  "duration": 917779688,
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
  "duration": 9794819411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 430941000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail.com\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123456\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Required\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 185532846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 302911806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 135924461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 145296803,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 1290630271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Required",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 79218073,
  "status": "passed"
});
formatter.after({
  "duration": 2116964539,
  "status": "passed"
});
formatter.before({
  "duration": 1035138385,
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
  "duration": 3397586026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 394432433,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail.com\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027passwords are not the same\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 171889127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 331691998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 153109458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 128621698,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 2606373999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwords are not the same",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 72537904,
  "status": "passed"
});
formatter.after({
  "duration": 1028750764,
  "status": "passed"
});
formatter.before({
  "duration": 998802236,
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
  "duration": 11149402574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 292281521,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail.com\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027654321\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027passwords are not the same\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 195667974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 292484930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 165210983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "654321",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 153866674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 976140775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passwords are not the same",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 78723713,
  "status": "passed"
});
formatter.after({
  "duration": 662074351,
  "status": "passed"
});
formatter.before({
  "duration": 1009622274,
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
  "duration": 16788325219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 211480374,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail@gmail\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123456\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Invalid email address\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 182097398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail@gmail",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 210317527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 145076905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 130077022,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 914392600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 127684992,
  "status": "passed"
});
formatter.after({
  "duration": 993343479,
  "status": "passed"
});
formatter.before({
  "duration": 1045694019,
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
  "duration": 25981902953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 11
    }
  ],
  "location": "Steps.display_or_delete_all_users(String)"
});
formatter.result({
  "duration": 221494306,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "I want to make sure that user with invalid/incomplete data will not be created:",
  "id": "a-new-user-can-be-created;;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I want to enter name as \u0027CucumberUser\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I want to enter email as \u0027cucumberuseremail\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I want to enter password as \u0027123456\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I want to enter confirmation password as \u0027123456\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the message \u0027Invalid email address\u0027",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberUser",
      "offset": 25
    }
  ],
  "location": "Steps.enter_name(String)"
});
formatter.result({
  "duration": 181775248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberuseremail",
      "offset": 26
    }
  ],
  "location": "Steps.enter_email(String)"
});
formatter.result({
  "duration": 190241045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "Steps.enter_password(String)"
});
formatter.result({
  "duration": 136559475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "Steps.enter_confirmation_password(String)"
});
formatter.result({
  "duration": 139889071,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_submit()"
});
formatter.result({
  "duration": 152312154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address",
      "offset": 26
    }
  ],
  "location": "Steps.expected_error_message(String)"
});
formatter.result({
  "duration": 494891451,
  "status": "passed"
});
formatter.after({
  "duration": 265660637,
  "status": "passed"
});
});