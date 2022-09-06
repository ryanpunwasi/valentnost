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

  it("should load periodic table", () => {
    cy.get(".table-grid").contains("Hydrogen");
    cy.get(".table-grid").contains("Helium");
  });

  it("should load selected component", () => {
    cy.get(".fa-flask");
  });
});
