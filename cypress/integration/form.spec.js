describe("Form elements change visual state on click", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should toggle the active class to elements when radio button is clicked", () => {
    cy.get("label.noble-gases").click({ force: true });
    cy.get("button.noble-gases-label").should("have.class", "active");

    cy.get("label.halogens").click({ force: true });
    cy.get("button.halogens-label").should("have.class", "active");

    cy.get("button.noble-gases-label").should("not.have.class", "active");
  });

  it("should change the state of the toggle switch on click", () => {
    cy.get("span.toggle-switch").click({ force: true });
    cy.get("p.symbol-selected").contains("Symbol");

    cy.get("span.toggle-switch").click({ force: true });
    cy.get("p.name-selected").contains("Name");
  });

  it("should show an error message whent he start button is clicked and no chemical group is selected", () => {
    cy.get(".submit-button").click({ force: true });
    cy.contains("Please select a group");
  });

  it("should load a practice session when a chemical group is selected and the start button is clicked", () => {
    cy.get("label.actinides").click({ force: true });
    cy.get(".submit-button").click({ force: true });

    cy.contains("END SESSION");
  });

  it("should show element details in the selected component when an element is clicked", () => {
    cy.get("button:contains('Hydrogen')").click({ force: true });
    cy.get(".selected-symbol").contains("H");
  });

  it("should reset form when reset button is clicked", () => {
    cy.get("label.actinides").click({ force: true });
    cy.get("button:contains('Hydrogen')").click({ force: true });
    cy.get("span.toggle-switch").click({ force: true });

    cy.get("button:contains('RESET')").click({ force: true });

    cy.get("button.noble-gases-label").should("not.have.class", "active");
    cy.get(".fa-flask");
    cy.get("p.name-selected");
  });
});
