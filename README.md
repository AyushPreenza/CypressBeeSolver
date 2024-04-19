TO RUN THIS PROJECT LOCALLY

1 . Download and Install NodeJS 
2 . Download and install Visual Studio Code(Visual Studio Code is the most used IDE. However, testers can use any IDE.)
3 . Git clone the repository in your local machine
4.  Open the project in your IDE
5.  Run the following command
     npx cypress run (It will run all the test present in spec.cy.js file)
     
        OR

     npx cypress open(To open cypress window and run spec file manually)  


UNDERSTANDING GITHUB ACTION PIPELINE

1. Added cypress.yml file in .github/workflows folder
2. added all the required jobs for pipeline
3. When we push the code to repo pipeline will run automatically
4. In case of success it will notify user and also in case of failure

SCRIPTS ARE CREATED IN SPEC.CY.JS
