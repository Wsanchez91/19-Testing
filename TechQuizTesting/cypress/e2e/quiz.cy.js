describe('Quiz End-to-End Test', () => {
    it('should start the quiz and complete it', () => {
        cy.visit('http://localhost:3000');
        cy.contains('What is React?').should('exist');
        cy.contains('Library').click();
        cy.contains('What does JSX stand for?').should('exist');
        cy.contains('JavaScript XML').click();
        cy.contains('Your score:').should('exist');
    });
});
