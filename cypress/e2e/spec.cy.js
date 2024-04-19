describe('Validate login functionality', () => {

  it('Validate login with valid credentials', ()=>{
 
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
     cy.get('.oxd-button').click();
  })
 
 
  
 })
 
 describe('Form submission', () => {
 
     it('validate form submission', ()=>{
    
         cy.visit('https://www.techlistic.com/p/selenium-practice-form.html');
         cy.get('[trbidi="on"] > :nth-child(2) > input').type('Ayush');
         cy.get(':nth-child(5) > inpu').type('Preenza');
         cy.get('#sex-0').click();
     
 
     })
    })
 
    describe('Website Navigation and Text Verification', () => {
     it('Visits the website and verifies text', () => {
       // Visit the website
       cy.visit('https://google.com');
 
       cy.get('.FPdoLc > center > .gNO89b').should('be.visible');
     });
   });