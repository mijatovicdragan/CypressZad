describe('login test', () => {
    it('login with valid credentials', () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("dragannmijatovic77@outlook.com");
        cy.get("#password").type("alfaromeo159");
        cy.get("button").click();
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
    });

    it("login with invalid email", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("dragannmijatovic77@");
        cy.get("#password").type("alfaromeo159");
        cy.get("button").click();
    })
});