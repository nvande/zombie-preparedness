import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './Page';

jest.mock("../Alert/Alert", () => ({ heading, content }) => (
  <div data-testid="alert">
    {heading}: {content}
  </div>
));
jest.mock("./Header", () => ({ projectTitle, logoImg, sections }) => (
  <div data-testid="header">
    Header - {projectTitle}
  </div>
));
jest.mock("./Footer", () => (props) => (
  <div data-testid="footer">Footer - {props.agencyName}</div>
));

describe('Page', () => {
  it('renders the Page with all its components', () => {
    render(
      <Page>
        <div>Test Children</div>
      </Page>
    );

    expect(screen.getByTestId('alert')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});
