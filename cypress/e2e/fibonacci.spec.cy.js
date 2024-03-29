import { testCirleSelector } from "../../src/constants/constants";

describe("fibonacci page display correctly", function () {
  before(function () {
    cy.visit('/fibonacci');
  });
  it("Header should be correct", function (){
    cy.get('h3').should('include.text','Последовательность Фибоначчи')
  })
  it("should button disabled if input is empty", function () {
    cy.get("input").should("be.empty");
    cy.get("button").should("be.disabled");
  });

  it("should fibonacci numbers render correctly", function () {
    const numberForFibonacci = 5;
    const fibonacciArr = [1, 1, 2, 3, 5, 8];
    const color = "rgb(0, 50, 255)";

    cy.get("input").type(numberForFibonacci);
    cy.get("button").should("not.be.disabled");
    cy.get("button[type='submit']").click();

    fibonacciArr.forEach((_, index) => {
      cy.get(testCirleSelector).should('have.length', index + 1);
      cy.get(testCirleSelector).each(($el, numberIndex) => {
        cy.wrap($el).children().contains(fibonacciArr[numberIndex]);
        cy.get($el).should('have.css', 'border-color', color);
      });
    });
  });
});
