import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const fetchMessages = createAsyncThunk("fetchMessages", async () => {
    const response = await fetch(`https://dummyjson.com/comments`);
    return await response.json();
});

type PayloadType = { selected: string; message: string };

interface Chat {
    messages: { id: string; message: string; author: string }[];
}

const initialState: Chat = {
    messages: [{ id: "1", message: "Lorem", author: "Destrox" }]
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            state.messages = action.payload.comments.map(
                (comment: {
                    id: string;
                    body: string;
                    user: { username: string };
                }) => {
                    return {
                        id: comment.id,
                        message: comment.body,
                        author: comment.user.username
                    };
                }
            );
        });
    }
});

export const { updateMessage, addMessage, deleteMessage } = chatSlice.actions;

export const selectChat = (state: RootState) => state.chat;

export { fetchMessages };

export default chatSlice.reducer;
