describe("movie search app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should have correct title", () => {
    cy.get("h2").contains("Movie");
    // cy.get("h2").should("contain.text", "Movie");
  });

  it("should contain the form", () => {
    cy.get("form").should("exist");
    cy.get("form input#searchText").should("exist");
    cy.get("form button#search").contains("Search");
  });

  it("should show movies", () => {
    cy.get("input#searchText").type("star");
    cy.get("button#search").click();

    cy.get("#search-result > div").should("have.length", 10);
  });

  it("should present a movie", () => {
    cy.intercept("http://omdbapi.com/*", {
      Search: [
        {
          Title: "The Matrix",
          Poster: "http://someimage.png",
        },
      ],
    });

    cy.get("input#searchText").type("star");
    cy.get("button#search").click();

    cy.get("#search-result > div").should("have.length", 1);
    cy.get("#search-result > div > h3").contains("The Matrix");
    cy.get("#search-result > div > img").should(
      "have.attr",
      "src",
      "http://someimage.png"
    );
  });

  it("should show no results if no movies", () => {
    cy.intercept("http://omdbapi.com/*", {
      Error: "No movies found!",
      Response: "False",
    });

    cy.get("input#searchText").type("harry");
    cy.get("button#search").click();

    cy.get("#search-result > p").contains("No movies found");
  });

  it("should not search if search text is less than 3 char", () => {
    cy.get("button#search").click();

    cy.get("#search-result > p").contains(
      "Write at least three characters before searching"
    );
  });
});
