/// <reference types="Cypress" />
import { Character } from '../../../src/features/characters/characterSlice';

describe('Characters list test', () => {
    it('should load and render an empty character list', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/character*',
            },
            {
                statusCode: 200,
                body: {
                    results: [],
                    info: [],
                },
            },
        ).as('get-characters');

        cy.visit('http://localhost:3000/personagens');

        cy.contains('Nenhum personagem encontrado.');
    });

    it('should get error and render a error message', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/character*',
            },
            {
                statusCode: 404,
            },
        ).as('get-characters');

        cy.visit('http://localhost:3000/personagens');

        cy.contains('Error 404');
    });

    it('should load and render character list', () => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/character*',
            },
        ).as('get-characters');

        cy.visit('http://localhost:3000/personagens');

        cy.wait('@get-characters').then(({ response }) => {
            const results = response.body.results as AllPropertiesRequired<Character>[];

            results.forEach(index => {
                // check if renders response content
                if (index.name) {
                    cy.contains(index.name);
                }
            });
        });
    });
});