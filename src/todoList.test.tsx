import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todolist from './todolist';

describe('renders learn react link', () => {
  it("when add button is clicked new id should add on document", () => {
    const { getByTestId, getByRole } = render(<Todolist />);
    const addBtn = getByRole("button", { name: "Add" });
    const inputTxt = getByTestId("inputTxt");

    fireEvent.change(inputTxt, { target: { value: 'input' } });
    fireEvent.click(addBtn);

    expect(getByTestId('6')).toBeDefined();

    expect(getByTestId('title6')).toHaveTextContent('input');
  });

  it("when add button is clicked new title should add on document", () => {
    const { getByTestId, getByRole } = render(<Todolist />);
    const addBtn = getByRole("button", { name: "Add" });
    const inputTxt = getByTestId("inputTxt");

    fireEvent.change(inputTxt, { target: { value: 'input' } });
    fireEvent.click(addBtn);

    const checkbox = getByTestId("checkbox6");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();//check

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();//uncheck
  });
});
