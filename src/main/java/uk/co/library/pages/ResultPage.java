package uk.co.library.pages;

import org.testng.Assert;
import uk.co.library.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//div[@class='search-header']//h1")
    WebElement resultText;


    public void verifyTheResults(String excepted ) {
        Assert.assertEquals(getTextFromElement(resultText),excepted);
        log.info("Get search result : " + resultText.toString());

    }}
