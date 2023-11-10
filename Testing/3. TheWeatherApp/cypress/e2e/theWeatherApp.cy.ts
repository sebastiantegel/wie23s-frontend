describe("our cool weather app", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should have a button", () => {
    cy.get("button").contains("väder").should("exist");
  });

  it("should get the current weather", () => {
    cy.get("button").click();

    cy.get("section#weather").should("exist");
  });

  it("should present the current weather", () => {
    cy.intercept("https://api.openweathermap.org/data/2.5/weather*", {
      weather: [
        {
          main: "Det regnar köttbullar",
          description: "Det gör ont",
        },
      ],
      main: {
        temp: 25,
        feels_like: 40,
      },
      name: "Stockholm",
    });

    cy.get("button").click();

    cy.get("section#weather h3").contains("Stockholm");
    cy.get("section#weather p#main").contains("köttbullar");
    cy.get("section#weather p#description").contains("Det gör ont");
    cy.get("section#weather h5").contains("25");
    cy.get("section#weather h6").contains("40");
  });
});
