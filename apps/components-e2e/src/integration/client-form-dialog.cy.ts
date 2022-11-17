import { expect } from "chai";
describe("Client Form Dialog", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=client-form-dialog--primary`);
    })

    it("should display client dialog", () => {
        cy.get('[data-testid="open-form"]').click();
        cy.get('[role=dialog]').should("be.visible");
    });
    it("Create Client can't submit without name", () => {
        cy.get('[data-testid="open-form"]').click();
        // cy.get('[data-testid="test-client-name"] input')
        //check Client Name validation 
        cy.get('.MuiBox-root > [type="submit"]').click()
        cy.get('[data-testid="test-client-name"] input:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        //check Primary Contact validation 
        cy.get('[data-testid="test-client-name"] input').type("Client Name 1")
        cy.get('.MuiBox-root > [type="submit"]').click()

        cy.get('[data-testid="select-contact-inner-text-field"] input:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        //check Account manager validation 
        cy.get('[data-testid="select-contact-inner-text-field"] input').type("Contact 1");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('.MuiBox-root > [type="submit"]').click()

        cy.get('[data-testid="select-account-manager-inner-text-field"] input:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')

    })
    it("Create Client can submit", () => {
        cy.get('[data-testid="open-form"]').click();

        cy.get('[data-testid="test-client-name"] input').type("Client Name 1")
        cy.get('[data-testid="select-contact-inner-text-field"] input').type("Contact 1");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid="select-account-manager-inner-text-field"] input').type("Account Manager 1")
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('.MuiBox-root > [type="submit"]').click()

        cy.get('#text-area-test-data').invoke("val")
            .should((text) => {
                expect(text).to.contain('"name":"Client Name 1","primaryContact":"Contact 1","accountManager":"Account Manager 1","mostRecentProject":"","projectStatus":"","numberOfProjects":0,"allTimeBilled":0');
            });
    })
    it("Should hidden Client Dialog when pressing 'Cancel' button", () => {
        cy.get('[data-testid="open-form"]').click();
        cy.get('.MuiBox-root > [type="button"]').click()
        cy.get('[role=dialog]').should("not.be.visible");

    })
});
