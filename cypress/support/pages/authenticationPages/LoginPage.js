class LoginPage {
    emailInputIdentifier = '#email';
    passwordInputIdentifier = '#pass';
    signInButtonIdentifier = '#send2';

    clickOnSignInButton() {
        cy.get(this.signInButtonIdentifier).click();
    }
    fillEmailInput(emailData){
        cy.get(this.emailInputIdentifier).type(emailData);
    }
    fillPasswordInput(passwordData){
        cy.get(this.passwordInputIdentifier).type(passwordData);
    }
}

export default new LoginPage;