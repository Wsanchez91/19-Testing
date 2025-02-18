import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    it('renders the first question', () => {
        mount(<Quiz />);
        cy.contains("What is React?").should("exist");
    });

    it('allows answering a question and moves to the next one', () => {
        mount(<Quiz />);
        cy.contains("Library").click();
        cy.contains("What does JSX stand for?").should("exist");
    });

    it('displays final score after answering all questions', () => {
        mount(<Quiz />);
        cy.contains("Library").click();
        cy.contains("JavaScript XML").click();
        cy.contains("Your score:").should("exist");
    });
});
