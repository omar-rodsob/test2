import CompraExitosa from '../pages/CompraExitosaPageObject';
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.viewport(1280, 720);
    /*cy.intercept('POST', 'https://www.vinoteca.com/_v/private/graphql/v1', (req) => {
      if (req.body.operationName === 'updateItems') {
        req.reply({
          statusCode: 200,
          body: cy.fixture('response.item')
        });
      }
    });*/
    cy.intercept('POST', 'https://www.vinoteca.com/_v/private/graphql/v1*').as('items');
  });

Given('un cliente con acceso a la plataforma "{word}"',()=>{
    cy.visit("/");        
});

When('seleccione los productos preferidos de la seccion "Promociones"',()=>{
    CompraExitosa.clickPromociones();
    cy.url().should('include','/promociones');

    CompraExitosa.clickProducto();
    cy.wait(5000); 

    CompraExitosa.clickAgregar();
    cy.wait('@items');
  
    cy.wait(4000);
    CompraExitosa.elements.spanBadge().should('be.visible').then(($badge)=>{
        cy.wrap($badge).should('have.text','1');
    });
    CompraExitosa.clickShoppingCart();
    
    CompraExitosa.elements.miniCartContainer().should('be.visible');
    cy.wait('@items');
    //CompraExitosa.elements.miniCartProducts().should('be.visible');
    cy.wait(2000);
    CompraExitosa.clickCheckout();
    cy.url().should('include','/checkout/#/cart');
    CompraExitosa.elements.loaderDiv().should('have.css','display').should('include','none');
    CompraExitosa.elements.totalTd().should('not.be.NaN');
    CompraExitosa.clickProcederPago();
})

Then('podra realizar el pago de manera exitosa',()=>{
    cy.url().should('include','/checkout/#/email');

    CompraExitosa.typeEmail('omar@omar.com');
    CompraExitosa.typeFirstName('omar');
    CompraExitosa.typeLastName('rodriguez');
    CompraExitosa.typePhone('2233445566');

    CompraExitosa.elements.goToShippingButton().should('be.disabled');
    CompraExitosa.checkTerms();
    CompraExitosa.elements.goToShippingButton().should('not.be.disabled');

    CompraExitosa.clickGoShipping();
    
    CompraExitosa.elements.pClienteEmail().should('be.visible');
})