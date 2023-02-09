describe('register test', () => {
    it("register test with valid credentials", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#first-name").type("Test");
        cy.get("#last-name").type("Test");
        cy.get("#email").type("Test");
        cy.get("#password").type("Test12345");
        cy.get("#password-confirmation").type("Test12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    })

    it("register test without first name", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.get("#last-name").type("Test");
        cy.get("#email").type("Test");
        cy.get("#password").type("Test12345");
        cy.get("#password-confirmation").type("Test12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    })
});