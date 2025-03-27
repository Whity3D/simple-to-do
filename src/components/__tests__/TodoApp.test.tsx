import '@testing-library/jest-dom'
import { TodoApp } from "../TodoApp"
import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"

describe('TodoApp', () => {
    test('adds new todo', () => {
        render(<TodoApp />)

        const input = screen.getByPlaceholderText('What needs to be done?')
        const button = screen.getByText('Add')

        fireEvent.change(input, { target: { value: 'Test todo' } })
        fireEvent.click(button)

        expect(screen.getByText('Test todo')).toBeInTheDocument()
    })

    test('toggles todo complete', () => {
        render(<TodoApp />)

        const input = screen.getByPlaceholderText('What needs to be done?')
        const button = screen.getByText('Add')
        fireEvent.change(input, { target: { value: 'Test todo' } })
        fireEvent.click(button)

        const checkbox = screen.getByRole('checkbox')
        fireEvent.click(checkbox)

        expect(screen.getByText('Test todo')).toHaveStyle('text-decoration: line-through;')
    })
})