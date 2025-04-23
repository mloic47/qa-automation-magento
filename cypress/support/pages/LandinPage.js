class LandingPage {


    clickOnCreateAccount(createAccountTestData) {
        cy.contains(createAccountTestData).click()
    }
}

export default new LandingPage();
