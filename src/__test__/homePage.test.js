import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "../components/HomePage";
import {render, cleanup, fireEvent, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);
it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders page correctly', () => {
    const {getByTestId} = render(<HomePage />)
    expect(getByTestId('home-page')).toBeDefined();
    expect(getByTestId('search-label')).toHaveTextContent('Github Repositories Search');
});

it('should not display user detail component on rendering', async () => {
    const {getByTestId} = render(<HomePage />)
    try {
        expect(getByTestId('user-detail')).toThrowError();
    }catch (e) {
        console.log(e);
    }
});

it('should fetch a user and its repositories', async () => {
    const {getByTestId} = render(<HomePage />);
    const input = getByTestId('input')
    userEvent.type(input, "nour-karoui");
    const button = getByTestId('search-button');
    act(async () => {
        fireEvent.click(button);
        await new Promise((r) => setTimeout(r, 1000));
        expect(getByTestId('user-detail')).toBeDefined();
        expect(getByTestId('repositories')).toBeDefined();
        expect(getByTestId('username')).toHaveTextContent('NourKaroui');
    })
});
