import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type PayloadType = { selected: string; message: string };

interface Chat {
    editMode: boolean;
    messages: { id: string; message: string; author: string }[];
}

const initialState: Chat = {
    editMode: false,
    messages: [{ id: "1", message: "Lorem", author: "Destrox" }]
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setEditMode: (state, action: PayloadAction<boolean>) => {
            state.editMode = action.payload;
        },

        addMessage: (state, action: PayloadAction<string>) => {
            const number = Math.floor(Math.random() * 100) + 10;

            state.messages = [
                ...state.messages,
                {
                    id: number.toString(),
                    message: action.payload,
                    author: "degi_"
                }
            ];
        },

        updateMessage: (state, action: PayloadAction<PayloadType>) => {
            state.messages = state.messages.map((message) => {
                if (message.id === action.payload.selected) {
                    return {
                        ...message,
                        message: action.payload.message
                    };
                }
                return message;
            });
        },

        deleteMessage: (state, action: PayloadAction<string>) => {
            state.messages = state.messages.filter(
                ({ id }) => id !== action.payload
            );
        }
    }
});

export const { setEditMode, updateMessage, addMessage, deleteMessage } =
    chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;

export default chatSlice.reducer;
