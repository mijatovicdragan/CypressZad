describe('login test', () => {
    it.only('login with valid credentials', () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("vivify11@test.com");
        cy.get("#password").type("dragan123");
        cy.get("button").click();
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
    });

    it("login with invalid email", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("vivify11@");
        cy.get("#password").type("dragan123");
        cy.get("button").click();
    })
});