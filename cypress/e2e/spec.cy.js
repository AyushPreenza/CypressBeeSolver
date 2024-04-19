describe('Validate login functionality', () => {

  it('Validate login with valid credentials', ()=>{
 
    //visit website and enter username and password and click login
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
     cy.get('.oxd-button').click();
  })
 })
 
 describe('Form submission', () => {
 
     it('Form submission', ()=>{
    
      //visit website and enter first name and last name and select gender
         cy.visit('https://www.techlistic.com/p/selenium-practice-form.html');
         cy.get('[trbidi="on"] > :nth-child(2) > input').type('Ayush');
         cy.get(':nth-child(5) > input').type('Preenza');
         cy.get('#sex-0').click();
     
 
     })
    })
 
    describe('Website Navigation and Text Verification', () => {
     it('Visits the website and verifies text', () => {
       // Visit the website
       cy.visit('https://google.com');
      //verify google search button
       cy.get('.FPdoLc > center > .gNO89b').should('be.visible');
       //veriy=fy title
       cy.title().should('eq', 'Google');
     });
   });

describe('Select dropdown', function () {
  
  it('Select option', function (){
     // test step to launch a URL
     cy.visit("https://register.rediff.com/register/register.php")
     //select option India with value then verify with assertion
     cy.get('select[id="country"]').select('99').should('have.value', '99')
  })
})