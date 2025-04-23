import RegistrationPage from "./pages/authenticationPages/RegistrationPage";
import LandinPage from "./pages/LandinPage";
import LoginPage from "./pages/authenticationPages/LoginPage";

class CommonActions {
    visitHome() {
        cy.visit(Cypress.env('baseUrl'));
    }
    loadTestData(testDatafilePath) {
        return cy.fixture(testDatafilePath);
    }
    scrollToEndOfPage() {
        cy.scrollTo("bottom")
    }
    submitForm(){
        cy.get('form').submit()
    }
    clickOnElement(identifier) {
        cy.get(identifier).click();
    }

    register(firstName, lastName, email, password) {
        LandinPage.clickOnCreateAccount(landindPageData.createAccountButtonText);
        RegistrationPage.fillFirstNameInput(firstName);
        RegistrationPage.fillLastNameInput(lastName);
        RegistrationPage.fillEmailInput(email);
        RegistrationPage.fillPasswordInput(password);
        RegistrationPage.fillConfirmPasswordInput(password);
        this.clickOnElement(RegistrationPage.createAccountButton)
    }

    login(email, password) {
        cy.contains("Sign in").click();
        LoginPage.fillEmailInput(email);
        LoginPage.fillPasswordInput(password);
        this.clickOnElement(LoginPage.signInButtonIdentifier)
    }

}
export default new CommonActions;