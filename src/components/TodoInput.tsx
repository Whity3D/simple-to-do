import React, { useState } from "react";
import type { FC, FormEvent } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export const TodoInput: FC<TodoInputProps> = ({ onAdd }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            onAdd(text.trim())
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
            />
            <button type="submit">Add</button>
        </form>
    )
}