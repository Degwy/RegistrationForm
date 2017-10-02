Feature: A new user can be created 

Background: 
	Given I open 'http://85.93.17.135:9000/' 
	And I want to 'delete' all users 
	
Scenario: I would​ like​ to​ create new valid user account. 
	Given I create an account using the following details: 
		|Name:CucumberUser|Email:cucumberuseremail@gmail.com|Password:123456|Confirmation password:123456|
	When I click on submit button 
	Then I should see the user 'CucumberUser' is exist 
	
	
Scenario Outline: 
	I want to make sure that user with invalid/incomplete data will not be created: 
	Given I want to enter name as '<Name>' 
	And I want to enter email as '<Email>' 
	And I want to enter password as '<Password>' 
	And I want to enter confirmation password as '<ConfirmationPassword>' 
	When I click on submit button 
	Then I should see the message '<ErrorMessage>' 
	Examples: 
		|Name|Email|Password|ConfirmationPassword|ErrorMessage|
		|CucumberUser|cucumberuseremail@gmail.com|123|123|Password must be at least 6 chars|
		||cucumberuseremail@gmail.com|123456|123456|Required|
		|CucumberUser||123456|123456|Required|
		|CucumberUser|cucumberuseremail@gmail.com||123456|Required|
		|CucumberUser|cucumberuseremail@gmail.com|123456||passwords are not the same|
		|CucumberUser|cucumberuseremail@gmail.com|123456|654321|passwords are not the same|
		|CucumberUser|cucumberuseremail@gmail|123456|123456|Invalid email address|
		|CucumberUser|cucumberuseremail|123456|123456|Invalid email address|
		
		
