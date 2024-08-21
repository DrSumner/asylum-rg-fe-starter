import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from '../components/pages/Landing';

let getByText;

beforeEach(() => {
     ({ getByText } = render(
        <Router>
          <LandingPage />
        </Router>
      ));
});

describe('Loading pages Component', () => {
    
  test('[1]correct text', () => {
    
    const h1 = getByText(/Search Grant Rates By Nationality/i);
    expect(h1.textContent).toBe('Search Grant Rates By Nationality');
  });
  test('[2]correct text 2', () => {
    
    const h1 = getByText(/Systemic Disparity Insights/i);
    expect(h1.textContent).toBe('Systemic Disparity Insights');
  });
  test('[3]correct text 3', () => {
    
    const h1 = getByText(/The New York asylum office grant/i);
    expect(h1.textContent).toBe(
'The New York asylum office grant rate dropped to 6 percent in fiscal year 2020.'
);
  });
});