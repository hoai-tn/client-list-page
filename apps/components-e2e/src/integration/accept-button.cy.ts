import { expect } from "chai";

describe("components", () => {
  it("should display Accept", () => {
    cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=simple-accept-button--basic`);
    cy.get('[data-testid="accept-btn"')
      .contains("something else")
      .click()
      .get("#button-clicked-div")
      .contains("Button Clicked");
  });
  it("should click button", () => {
    cy.visit(
      `${Cypress.env("STORYBOOK_PATH")}&id=simple-accept-button--primary`
    );
    // before click button
    cy.get("#click-btn-test-data")
      .invoke("val")
      .should((text) => {
        expect(text).to.equal("clickState: false");
      });
    // click button
    cy.get('[data-testid="accept-btn"').contains("Default").click();
    // after clicked button
    cy.get("#click-btn-test-data")
      .invoke("val")
      .should((text) => {
        expect(text).to.equal("clickState: true");
      });
  });
});
