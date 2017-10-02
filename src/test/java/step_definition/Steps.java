package step_definition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testUtilities.Selenium_Helper;


public class Steps extends Selenium_Helper
{
public static String BaseUrl = "http://85.93.17.135:9000/";
	
	@Before
	public void setUp()
	{
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void tearDown()
	{
		delete_all_users("delete");
		driver.quit();
	}
	
	@Given("^(?:|I) open '(.*?)'$")
	public void open_url(String url)
	{
		navigate_to(url);
	}
	
	@And("^(?:|I) want to '(.*?)' all users$")
	public void delete_all_users(String method)
	{
		RestAssured.baseURI = BaseUrl;
		RequestSpecification httpRequest = RestAssured.given();
		if (method.toLowerCase().trim().equals("delete"))
		{
			Response response = httpRequest.request(Method.DELETE, "/user/all");
			String responseBody = response.getBody().asString();
			System.out.println("Response Body is =>  " + responseBody);
		}
		else if (method.toLowerCase().trim().equals("get"))
		{
			Response response = httpRequest.request(Method.GET, "/user/all/json");
			String responseBody = response.getBody().asString();
			System.out.println("Response Body is =>  " + responseBody);
		}
	}
	
	@Given("^(?:|I) create an account using the following details:")
	public void create_new_account(DataTable reg_values) throws InterruptedException
	{
		List<List<String>> data = reg_values.raw();
		int cells = data.get(0).size();
		for (int x = 0; x < cells; x=x+1)
		{
			String cell = data.get(0).get(x);
			String[] cell_values = cell.split(":");
			String field = cell_values[0]; 
			String value = cell_values[1];
			String testfield = field.trim();
			if (testfield.equals("Confirmation password"))
			{
				sendKey_to_id_element("confirmationPassword", value);
			}
			else
			{
				sendKey_to_id_element(field.trim().toLowerCase().replaceAll("\\s", ""), value);
			}
						
		}				
	}
	
	@When("^(?:|I) click on submit button$")
	public void click_submit()
	{
		click_xpath_element("//text()[.='Submit']/ancestor::button[1]");
	}
	
	@Then("^(?:|I) should see the user '(.*?)' is exist$")
	public void check_created_account(String userName)
	{
		if (driver.findElement(By.xpath("//td[text()='"+userName+"']")).isDisplayed())
		{
			Assert.assertTrue(true);
		}
		else
		{
			Assert.assertTrue(false);

		}
	}
	
	@Given("^(?:|I) want to enter name as '([^\"]*)'$")
	public void enter_name(String userName)
	{
		sendKey_to_id_element("name", userName);
	}
	
	@And("^(?:|I) want to enter email as '([^\"]*)'$")
	public void enter_email(String userEmail)
	{
		sendKey_to_id_element("email", userEmail);
	}
	
	@And("^(?:|I) want to enter password as '([^\"]*)'$")
	public void enter_password(String userPassword)
	{
		sendKey_to_id_element("password", userPassword);
	}
	
	@And("^(?:|I) want to enter confirmation password as '([^\"]*)'$")
	public void enter_confirmation_password(String userPassword2)
	{
		sendKey_to_id_element("confirmationPassword", userPassword2);
	}
	
	@Then("^(?:|I) should see the message '([^\"]*)'$")
	public void expected_error_message(String msg)
	{
		if (driver.findElement(By.xpath("//p[text()='"+msg+"']")).isDisplayed())
		{
			Assert.assertTrue(true);
		}
		else
		{
			Assert.assertTrue(false);

		}
	}
	
	
}
