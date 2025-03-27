import React from "react";
import type { FC } from "react";
import { TodoListState } from "../types";

interface BottomContainerProps {
    total: number
    listState: TodoListState
    onFilterPress: (state: TodoListState) => void;
    onClearPress: () => void;
}

export const BottomContainer: FC<BottomContainerProps> = (
    {
        onFilterPress,
        onClearPress,
        total, listState
    }
) => {
    const handleAll = () => { onFilterPress(TodoListState.ALL) }
    const handleActive = () => { onFilterPress(TodoListState.ACTIVE) }
    const handleCompleted = () => { onFilterPress(TodoListState.COMPLETED) }

    return (
        <div className="bottom-container">
            <span>{total} items left</span>
            <div>
                <button
                    className={`filter-btn ${listState === TodoListState.ALL ? 'active' : ''}`}
                    onClick={handleAll}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${listState === TodoListState.ACTIVE ? 'active' : ''}`}
                    onClick={handleActive}
                >
                    Active
                </button>
                <button
                    className={`filter-btn ${listState === TodoListState.COMPLETED ? 'active' : ''}`}
                    onClick={handleCompleted}
                >
                    Completed
                </button>
            </div>
            <button
                className="filter-btn"
                onClick={onClearPress}
            >
                Clear completed
            </button>
        </div >
    )
}