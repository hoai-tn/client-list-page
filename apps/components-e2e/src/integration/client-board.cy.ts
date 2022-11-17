import { expect } from "chai";

describe("Client Board", () => {
    const clientFields = {
        name: "Client Name 4",
        contact: "Contact 2",
        accountManager: "Account Manager 2"
    }
    beforeEach(() => {
        cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=client-board--primary`);
    })
    it("Create Client form can submit if complete", () => {
        cy.get('[data-testid="AddIcon"]').click();
        cy.get('[role=dialog]').should("be.visible");
        cy.get('[role=dialog] h2').should("contain", "Create Client")

        //submit form client
        cy.get('[data-testid="test-client-name"] input').type(clientFields.name)
        cy.get('[data-testid="select-contact-inner-text-field"] input').type(clientFields.contact);
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid="select-account-manager-inner-text-field"] input').type(clientFields.accountManager)
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('.MuiBox-root > [type="submit"]').click()
        // check client value submit on client table 
        cy.get(`table>tbody>:last`)
            .should('contain', clientFields.name)
            .and("contain", clientFields.contact)
            .and("contain", clientFields.accountManager);
    });
    it("Update Client action", () => {
        cy.get(`table>tbody>:first-child [data-testid="MoreVertIcon"]`).click();
        cy.get('[data-testid="EditIcon"]').click();
        cy.get('[role=dialog]').should("be.visible");
        // Update data row first
        cy.get('[role=dialog] h2').should("contain", "Update Client Name 1")
        cy.get('[data-testid="test-client-name"] input').invoke("val")
            .should((text) => {
                expect(text).to.equal('Client Name 1');
            });
        cy.get('[data-testid="select-contact-inner-text-field"] input').invoke("val")
            .should((text) => {
                expect(text).to.equal('Contact 1');
            });
        cy.get('[data-testid="select-account-manager-inner-text-field"] input').invoke("val")
            .should((text) => {
                expect(text).to.equal('Account Manager 1');
            });
        // Modify client form and submit
        cy.get('[data-testid="test-client-name"] input').clear().type(clientFields.name)
        cy.get('[data-testid="select-contact-inner-text-field"] input').type(clientFields.contact);
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('[data-testid="select-account-manager-inner-text-field"] input').type(clientFields.accountManager)
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('.MuiBox-root > [type="submit"]').click()
        // check client list after submit 
        cy.get('#text-area-test-data').invoke("val")
            .should((text) => {
                expect(text).to.equal('[{"id":"1","name":"Client Name 4","primaryContact":"Contact 2","mostRecentProject":"Project 1","projectStatus":"Project Status 1","accountManager":"Account Manager 2","numberOfProjects":2,"allTimeBilled":123.45},{"id":"2","name":"Client Name 2","primaryContact":"Contact 2","mostRecentProject":"Project 2","projectStatus":"Project Status 2","accountManager":"Account Manager 2","numberOfProjects":31,"allTimeBilled":13.55},{"id":"3","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 1","numberOfProjects":11,"allTimeBilled":20.55},{"id":"4","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":4,"allTimeBilled":20.55},{"id":"5","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":5,"allTimeBilled":20.55},{"id":"6","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 3","numberOfProjects":6,"allTimeBilled":20.55},{"id":"7","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 3","numberOfProjects":8,"allTimeBilled":20.55}]');
            });
    })
    it("Client Name filter on Client Board can subset list of clients", () => {
        cy.get('[data-testid="ExpandMoreIcon"]').click();
     
        cy.get('[data-testid="client-name-select-test-inner-text-field"] input').type("Client Name 1");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        // check client list after filter by client name 
        cy.get('#text-area-test-data').invoke("val")
            .should((text) => {
                expect(text).to.equal('[{"id":"1","name":"Client Name 1","primaryContact":"Contact 1","mostRecentProject":"Project 1","projectStatus":"Project Status 1","accountManager":"Account Manager 1","numberOfProjects":2,"allTimeBilled":123.45},{"id":"4","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":4,"allTimeBilled":20.55},{"id":"6","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 3","numberOfProjects":6,"allTimeBilled":20.55}]');
            });
    })
    it("Account Manager filter on Client Board can subset list of clients", () => {
        cy.get('[data-testid="ExpandMoreIcon"]').click();
    
        cy.get('[data-testid="account-manager-select-test-inner-text-field"] input').type("Account Manager 2");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('#text-area-test-data').invoke("val")
        .should((text) => {
            expect(text).to.equal('[{"id":"2","name":"Client Name 2","primaryContact":"Contact 2","mostRecentProject":"Project 2","projectStatus":"Project Status 2","accountManager":"Account Manager 2","numberOfProjects":31,"allTimeBilled":13.55},{"id":"4","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":4,"allTimeBilled":20.55},{"id":"5","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":5,"allTimeBilled":20.55}]');
        });
    })

    it("Client Name and Account Manager filter filter on Client Board can subset list of clients", () => {
        cy.get('[data-testid="ExpandMoreIcon"]').click();
        
        cy.get('[data-testid="client-name-select-test-inner-text-field"] input').type("Client Name 1");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('[data-testid="account-manager-select-test-inner-text-field"] input').type("Account Manager 2");
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('#text-area-test-data').invoke("val")
        .should((text) => {
            expect(text).to.equal('[{"id":"4","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":4,"allTimeBilled":20.55}]');
        }); 
    })
});
