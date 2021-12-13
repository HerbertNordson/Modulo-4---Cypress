/// <reference types="cypress" />

describe("bet", () => {
  it("register", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[type="button"]').click();
    cy.get('[type="name"]').type("HNS");
    cy.get('[type="email"]').type("herbert@teste.com");
    cy.get('[type="password"]').type("12345678");

    cy.get("form > button").click();
  });
  it("login", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type("herbert_nordson@hotmail.com");
    cy.get("#id-password").type("admin123");

    cy.get("form > button").click();
  });
  it("recent", () => {
    cy.get(".newBet").click();
  });
  it("gameBet", () => {
    cy.get(".random").click();
    cy.get(".random").click();
  });
});
