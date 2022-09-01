describe("Load form inputs", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load radio buttons", () => {
    cy.contains("Nonmetals");
    cy.contains("Actinides");
  });

  it("should load toggle switch", () => {
    cy.get(".toggle-switch");
  });

  it("should load start and reset buttons", () => {
    cy.contains("START");
    cy.contains("RESET");
  });
});
