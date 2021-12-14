/// <reference types="cypress" />

describe("bet", () => {
  it("register", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[type="button"]').click();

    cy.get('[type="name"]').type("HN");
    cy.get('[type="email"]').type("herbert");
    cy.get('[type="password"]').type("123456");

    cy.get("form > button").click();

    cy.wait(500);

    cy.get('[type="name"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="password"]').clear();

    cy.wait(500);

    cy.get('[type="name"]').type("HNS");
    cy.get('[type="email"]').type("herbert@teste.com");
    cy.get('[type="password"]').type("12345678");

    cy.get("form > button").click();
    cy.get(".Toastify__close-button > svg").click();

    cy.wait(500);
  });

  it("login", () => {
    cy.get("#email").type("herbert@teste.com");
    cy.get("#id-password").type("12345678");

    cy.get("form > button").click();
  });

  it("recent", () => {
    cy.get(".newBet").click();
  });

  it("gameBet", () => {
    cy.get(".Mega-Sena").click();
    cy.get(".random").click();
    cy.get(".random").click();

    cy.get(".add").click();
    cy.get(".save").click();

    cy.get(".home").click();
  });
});
