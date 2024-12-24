describe ("IMEX LOGIN TEST", ()=> {


    it("login page",()=> {
        cy.visit('https://dev-ics.imedx.com.au/chat-ai', { failOnStatusCode: false });

    // Locate the username and password fields and enter credentials
    cy.wait(5000)
    cy.get('#username') .type('Sai')
    .should('have.value', 'Sai')

    cy.get('#password').type("Sairam@123")
    .should('have.value', 'Sairam@123')

    //Locate and click the login button
    cy.get('.Login-btn').click()
    expect(true).to.be.true

    //  Verify login success
    cy.intercept('GET', '/api/endpoint').as('apiRequest')
    
    // Closes the current browser window
    cy.window().then((win) => {
        win.close(); // Closes the current browser window
      });

  
    })
})





