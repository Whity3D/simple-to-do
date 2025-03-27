import React from "react";
import type { Todo } from "../types";
import type { FC } from "react";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)} />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    )
}