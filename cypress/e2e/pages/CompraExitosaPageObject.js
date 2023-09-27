class CompraExitosa{
    elements = {
       promocionesAnchor:()=>cy.get('nav a[href*="promociones"'),
       productoAnchor:()=>cy.get("div[id='gallery-layout-container'] div:nth-child(2) section:nth-child(1) a:nth-child(1)"),
       agregarButton:()=>cy.get('.vtex-flex-layout-0-x-flexColChild > .vtex-button'),
       spanBadge:()=>cy.get('.vtex-minicart-2-x-minicartQuantityBadge'),
       badgeButton:()=>cy.get('.pa4 > .vtex-button > .vtex-button__label'),
       miniCartContainer:()=>cy.get('.vtex-minicart-2-x-drawer'),
       miniCartButton:()=>cy.get('#proceed-to-checkout'),
       minicartContainer:()=>cy.get('.vtex-minicart-2-x-minicartContentContainer'),
       minicartEmptyContainer:()=>cy.get('.vtex-minicart-2-x-minicartEmptyStateContainer'),
       checkoutWrapper:()=>cy.get('.v-custom-product-item-wrap'),
       checkoutButton:()=>cy.get('.vtex-minicart-2-x-minicartContentContainer #proceed-to-checkout'),
       emailInput:()=>cy.get('#client-email'),
       firstNameInput:()=>cy.get('#client-first-name'),
       lastNameInput:()=>cy.get('#client-last-name'),
       phoneInput:()=>cy.get('#client-phone'),
       termsCheck:()=>cy.get('#terms-agreed'),
       goToShippingButton:()=>cy.get('#go-to-shipping'),
       procederPagoButton:()=>cy.get('#cart-to-orderform'),
       infoForm:()=>cy.get('.form-step'),
       loaderDiv:()=>cy.get('.loading-bg'),
       pClienteEmail:()=>cy.get('p[class="client-profile-email"]'),
       totalTd:()=>cy.get('.monetary'),
       miniCartProducts:()=>cy.get('.vtex-minicart-2-x-minicartProductListContainer')
    }

    clickPromociones(){
        this.elements.promocionesAnchor().click({force: true});
    }

    clickProducto(){
        this.elements.productoAnchor().click({force: true});
    }

    clickAgregar(){
        this.elements.agregarButton().click({force: true});
    }

    clickShoppingCart(){
        this.elements.badgeButton().click({force: true});
    }

    clickCheckout(){
        this.elements.checkoutButton().then(($checkoutButton)=>{
            cy.wrap($checkoutButton).click({force: true});
        })
        //this.elements.checkoutButton().click({force: true});
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    checkTerms(){
        this.elements.termsCheck().check();
    }

    clickGoShipping(){
        this.elements.goToShippingButton().click();
    }

    clickProcederPago(){
        this.elements.procederPagoButton().click();
    }

}
export default new CompraExitosa();