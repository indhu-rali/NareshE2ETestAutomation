import "cypress-real-events/support";

describe("IMEX TEST AUTOMATION", () => {
    
  it("E2E TEST AUTOMATION", () => {
    cy.visit("https://dev-ics.imedx.com.au/chat-ai", {
      failOnStatusCode: false,
    });

    // Locate the username and password fields and enter credentials
    cy.wait(5000);
    cy.get("#username").type("Sai").should("have.value", "Sai");

    cy.get("#password").type("Sairam@123").should("have.value", "Sairam@123");

    //Locate and click the login button
    cy.get(".Login-btn").click();
    expect(true).to.be.true;

    //  Verify login success
    cy.intercept("GET", "/api/endpoint").as("apiRequest");

    // Closes the current browser window
    cy.window().then((win) => {
      win.close(); // Closes the current browser window
    });

    cy.get(".landing-account-info > .landingpage-arrow-down").realHover(); // Realistic hover

    cy.get(".landing-account-info > .landingpage-arrow-down")
      .should("be.visible")
      .trigger("mouseover");

    // The 'Add Category' functionality is an essential part of the application,

    cy.xpath("//span[normalize-space(text())='Audit Rule Settings']").click();
    cy.get(".btn-add-category").click();

    cy.get("#formCategory").type("TESTING").should("have.value", "TESTING");

    cy.get("#formCategoryCode").type("12345").should("have.value", "12345");
    cy.get(".btn-secondary").click();
    expect(true).to.be.true;

    //Test Script: "Creating an Audit Rule"
    // This section of the test script is responsible for testing the process of creating an audit rule

    cy.get(".btn-create-audit-rule").click();

    cy.get("#formCategory").select("Look for Missing Prosthesis Charge"); // Handling dropdown

    cy.get("#formShortDescription")
      .type("testing purpose")
      .should("have.value", "testing purpose");

    cy.get("#formValueOfRule").type("1234");
    cy.get("#formNewDRG").type("nar").should("have.value", "nar");

    cy.get("#formLongDescription")
      .type("this is testing purpose")
      .should("have.value", "this is testing purpose");

    cy.get("#formUserMessage").type("testing").should("have.value", "testing");

    cy.get("#formDRGVersion").type("testing").should("have.value", "testing");

    cy.get(".btn-secondary").click();
    expect(true).to.be.true;

    //Handle and verify "feedback" functionality within the application

    cy.get(".landing-account-info > .landingpage-arrow-down").realHover(); // Realistic hover

    cy.get(".landing-account-info > .landingpage-arrow-down")
      .should("be.visible")
      .trigger("mouseover");

    cy.xpath("//span[@class='pb-2'][normalize-space()='Feedback']").click();
    cy.get("#email")
      .type("testcypress90@gmail.com")
      .should("have.value", "testcypress90@gmail.com");

    cy.get(".form-next-btn").click();
    expect(true).to.be.true;

    cy.get("#feedbackType").select("bug");
    cy.get("#feedbackDescription").type(
      "kjhjgjjkkjghkjjhhfhjfhjghjghjghjghjfhgfgfghfgfghfjfvfvhjfhjhgkggkjghkjkj"
    );

    cy.get('[data-index="4"]').click();
    cy.get(".form-next-btn").click();
    expect(true).to.be.true;
    cy.wait(6000);
    cy.get(".form-back-btn").click();
    cy.wait(6000);
    cy.get(".form-back-btn").click();

    cy.wait(6000);

    cy.xpath("//span[@class='slider round light']").click();
    cy.get(".sidebar-companion-toggle-btn > :nth-child(1) > div").click();
    cy.get(".view-dashboard-path").click();
    cy.wait(5000);
    cy.get(".sidebar-companion-toggle-btn > :nth-child(2) > div > a").click();

    cy.get("li.active > div > .active").click();
    cy.get(":nth-child(3) > div > a").click();
    cy.get(".coder-toggle-button > :nth-child(2)").click();
    cy.wait(5000);
    cy.get(":nth-child(4) > div > a").click();
    cy.get(":nth-child(3) > .d-flex > div > .switch > .slider").click();

    cy.get(".landing-account-info > .landingpage-arrow-down").realHover(); // Realistic hover

    cy.get(".landing-account-info > .landingpage-arrow-down")
      .should("be.visible")
      .trigger("mouseover");
  });
});
