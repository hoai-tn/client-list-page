import { expect } from "chai";
describe("Client Table", () => {
    const headFields = [
        {
            label: "Client Name",
        },
        {
            label: "Client Primary Contact",
        },
        {
            label: "Most Recent Project",
        },
        {
            label: "Project Status",
        },
        {
            label: "Account Manager",
        },
        {
            label: "Number of projects",
        },
        {
            label: "All-time Billed ($)",
        },
    ];
    beforeEach(() => {
        cy.visit(`${Cypress.env("STORYBOOK_PATH")}&id=client-table--primary`);
    })
    it("should display fields table", () => {
        headFields.forEach((item, index) => {
            cy.get(`table>thead>tr>:nth-child(${index + 1}) span`).contains(item.label)

        });
    });
    it("should have client list value", () => {
        cy.get('#text-area-test-data').invoke("val")
            .should((text) => {
                expect(text).to.equal('[{"id":"1","name":"Client Name 1","primaryContact":"Contact 1","mostRecentProject":"Project 1","projectStatus":"Project Status 1","accountManager":"Account Manager 1","numberOfProjects":2,"allTimeBilled":123.45},{"id":"2","name":"Client Name 2","primaryContact":"Contact 2","mostRecentProject":"Project 2","projectStatus":"Project Status 2","accountManager":"Account Manager 2","numberOfProjects":31,"allTimeBilled":13.55},{"id":"3","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 1","numberOfProjects":11,"allTimeBilled":20.55},{"id":"4","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":4,"allTimeBilled":20.55},{"id":"5","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 2","numberOfProjects":5,"allTimeBilled":20.55},{"id":"6","name":"Client Name 1","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 3","numberOfProjects":6,"allTimeBilled":20.55},{"id":"7","name":"Client Name 3","primaryContact":"Contact 3","mostRecentProject":"Project 3","projectStatus":"Project Status 3","accountManager":"Account Manager 3","numberOfProjects":8,"allTimeBilled":20.55}]');
            });
    })
});
