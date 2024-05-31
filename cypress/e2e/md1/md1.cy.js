const { SelectablePage } = require("../../pageObjects/SelectablePage");

describe("MD1", () => { 
    context("Selectable Buttons", () => {
        it("Click ", () => {
            SelectablePage.visit();

            SelectablePage.clickGridButton.click();
            SelectablePage.clickButton.contains("Two").click();
            SelectablePage.clickButton.contains("Four").click();
            SelectablePage.clickButton.contains("Six").click();
            SelectablePage.clickButton.contains("Eight").click();

            SelectablePage.validateActiveButton.contains("Two");
            SelectablePage.validateActiveButton.contains("Four");
            SelectablePage.validateActiveButton.contains("Six");
            SelectablePage.validateActiveButton.contains("Eight");

            SelectablePage.validateNotActiveButton.contains("One");
            SelectablePage.validateNotActiveButton.contains("Three");
            SelectablePage.validateNotActiveButton.contains("Five");
            SelectablePage.validateNotActiveButton.contains("Seven");
            SelectablePage.validateNotActiveButton.contains("Nine");
            
            


        });

    });
});