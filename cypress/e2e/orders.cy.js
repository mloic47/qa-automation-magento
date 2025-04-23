import CommonActions from "../support/CommonActions";
import LandinPage from "../support/pages/LandinPage";
let landindPageData;


describe('Orders Placements', () => {
    before(() => {
        CommonActions.visitHome()
        LandinPage.clickOnCreateAccount(landindPageData.sigInButtonText);
        CommonActions.login(Cypress.env('email'),Cypress.env('password'))
    })
    it("Can Place 2 orders and calculate total price",()=> {
        cy.contains('Orders Place 2').click();

    })
})