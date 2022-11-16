import { expect } from "chai";
describe("Client Filters", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=client-filters--primary`);
    })

    it("should display filters fields", () => {
        cy.get('[data-testid="client-name-select-test"]').contains("Clients")
        cy.get('[data-testid="account-manager-select-test"]').contains("Account Manager")
    });
    it("should have values on filters fields", () => {
        cy.get('[data-testid="client-name-select-test"] input').type('Client Name 2')
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid="account-manager-select-test"]').type('Account Manager 1')
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('#text-area-test-data').invoke("val")
            .should((text) => {
                expect(text).to.equal('{"clientName":"Client Name 2","accountManager":"Account Manager 1"}');
            });

    });
});
