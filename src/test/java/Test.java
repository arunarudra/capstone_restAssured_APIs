import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Test {
	
	public static WebDriver driver;

	public static void main(String[] args) {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://localhost:8080/medicare/show/all/products");
		List<WebElement> trRows = driver.findElements(By.xpath("//table[@id='productListTable']//tr"));
		List<WebElement> tcColms = driver.findElements(By.xpath("//table[@id='productListTable']//th"));
		int nrows = trRows.size();
		int ncols= tcColms.size();
		System.out.println("rows :" +nrows);
		System.out.println("colms " +ncols);
		List<WebElement> tdata = driver.findElements(By.xpath("//table[@id='productListTable']//tr/td"));
		List<WebElement> tcdata = driver.findElements(By.xpath("//table[@id='productListTable']//th[3]/td"));
		
		
		for (WebElement coldata:tcdata) {
			System.out.println("entered into col loop");
			System.out.print(coldata.getText() + "  ");
			System.out.println(coldata.getSize());
		}
		
		for (WebElement rowdata:tdata) {
			System.out.print(rowdata.getText() + "  ");
		} 
		/*for (int i=1; i<=3;i++) {
			System.out.println("entered into loop i " + i);
			List<WebElement> tdata = driver.findElements(By.xpath("//table[@id='productListTable']//tr[i]/td"));
			List<WebElement> tcdata = driver.findElements(By.xpath("//table[@id='productListTable']//tr/td[1]"));
				System.out.print(tdata.get(i).getText());
			} */
		driver.close();
		}
		
		}
				

