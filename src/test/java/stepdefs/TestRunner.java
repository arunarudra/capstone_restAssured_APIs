package stepdefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions
(
    	features = {"src/test/java/features"},
    	//tags= {"@sanity"},
    	glue = {"stepdefs"},
    	monochrome = true,
    	plugin = {"pretty","html:test-output"}
    	
    		
		)

public class TestRunner {

}
