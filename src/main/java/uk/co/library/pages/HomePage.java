package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "(//span[@class='mat-button-wrapper'])[3]")
    WebElement acceptAll;

    @CacheLookup
    @FindBy(xpath = "(//iframe)[4]")
    WebElement iframe;

    public void iFrame() {
        clickOnElement(iframe);
    }

    public void acceptAlert() throws InterruptedException {
        Thread.sleep(1500);
        driver.switchTo().frame(4);
        clickOnElement(acceptAll);
        log.info("Click on Accept All : " + acceptAll.toString());
    }

    public void enterJobTitle(String enterJobTitle) throws InterruptedException {
        Thread.sleep(1500);
        sendTextToElement(jobTitle, enterJobTitle);
        log.info("Enter job title : " + jobTitle.toString());
    }

    public void enterLocation(String EnterLocation) {
        sendTextToElement(location, EnterLocation);
        log.info("Enter location : " + location.toString());
    }

    public void selectDistance(String distance) {
        sendTextToElement(distanceDropDown, distance);
        log.info("Enter Distance : " + distanceDropDown.toString());
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
        log.info("Click on search option : " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minsalary) {
        sendTextToElement(salaryMin, minsalary);
        log.info("Click on the Electronic Tab : " + salaryMin.toString());
    }

    public void enterMaxSalary(String maxsalary) {
        sendTextToElement(salaryMax, maxsalary);
        log.info("Click on the Electronic Tab : " + salaryMax.toString());
    }

    public void selectSalaryType(String salarytype) {
        sendTextToElement(salaryTypeDropDown, salarytype);
        log.info("Click on the Electronic Tab : " + salaryTypeDropDown.toString());
    }

    public void selectJobType(String jobtype) {
        sendTextToElement(jobTypeDropDown, jobtype);
        log.info("Enter job type : " + jobTypeDropDown.toString());
    }

    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
        log.info("Click on the find job button : " + findJobsBtn.toString());
    }

}

