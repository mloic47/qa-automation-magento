

class RegistrationPage {

firstNameInputidentifier = '#firstname';
lastNameInputidentifier = '#lastname';
emailInputidentifier = '#email_address';
passwordInputidentifier = '#password';
confirmPasswordInputIdentifier = '#password-confirmation';
//bad practice but this is the only way as there is no id on button
createAccountButton = '#form-validate > .actions-toolbar > div.primary > .action';

fillFirstNameInput(firstNamaData){
    cy.get(this.firstNameInputidentifier).type(firstNamaData);
}
fillLastNameInput(lastNamaData){
    cy.get(this.lastNameInputidentifier).type(lastNamaData);
}
fillEmailInput(emailData){
    cy.get(this.emailInputidentifier).type(emailData);
}
fillPasswordInput(emailData){
    cy.get(this.passwordInputidentifier).type(emailData);
}
fillConfirmPasswordInput(emailData){
    cy.get(this.confirmPasswordInputIdentifier).type(emailData);
}


}
export default new RegistrationPage();