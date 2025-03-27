export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export enum TodoListState {
    ALL = "ALL",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
}