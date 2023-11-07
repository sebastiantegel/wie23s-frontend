describe("My todo list", () => {
  it("should show todos", () => {
    // 1. Surfa
    cy.visit("http://localhost:5173");

    // 2. Hitta element
    const theLis = cy.get("ul#theList li");

    // 3. Verifiera
    theLis.should("have.length", 3);
  });
});
