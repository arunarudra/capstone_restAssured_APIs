package stepdefs;

import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class GetRequestprodlist {
	RequestSpecification request;
	Response resp;
	String product;
	
	@Given("The base uri is {string}")
	public void the_base_uri_is(String uri) {
		request = RestAssured.given().baseUri(uri);
	    
	}
	
	@When("I perform GET operation")
	public void i_perform_GET_operation() {
		resp=request.get();
		String resBody = resp.getBody().asString();
		JsonPath jpath= resp.jsonPath();
		System.out.println(jpath.prettyPrint());
		//System.out.println(resBody);
	}
	    
	@Then("Response code should be {int}")
	public void response_code_should_be(Integer respcode) {
	    respcode=resp.statusCode();
	    System.out.println(respcode);
	}
	

	
}
