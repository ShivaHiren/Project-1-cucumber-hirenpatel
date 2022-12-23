package uk.co.library.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {


    @Given("^I am on homepage$")
    public void iAmOnHomepage() throws InterruptedException {
    }

    @When("^I click on Accept alert$")
    public void iClickOnAcceptAlert() throws InterruptedException {
        new HomePage().acceptAlert();

    }

    @And("^I Enter Job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String enterJobTitle) throws InterruptedException {
        new HomePage().enterJobTitle(enterJobTitle);
    }


    @And("^I Enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location) {
        new HomePage().enterLocation(location);
    }

    @And("^I enter on more search options$")
    public void iEnterOnMoreSearchOptions() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I Select Distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) {
        new HomePage().selectDistance(distance);

    }

    @And("^I Enter Min Salary \"([^\"]*)\"$")
    public void iEnterMinSalary(String minSalary) {
        new HomePage().enterMinSalary(minSalary);

    }

    @And("^I Enter Max salary \"([^\"]*)\"$")
    public void iEnterMaxSalary(String maxSalary) {
        new HomePage().enterMaxSalary(maxSalary);

    }

    @And("^I Select Salary Type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType) {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I Select Job Type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType) {
        new HomePage().selectJobType(jobType);


    }

    @And("^I Click on find jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I should see search result \"([^\"]*)\"$")
    public void iShouldSeeSearchResult(String result) {
        new ResultPage().verifyTheResults(result);

    }

}
