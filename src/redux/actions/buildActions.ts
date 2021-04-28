import { CHANGE_BACKGROUND } from "./actions-types";

export function changeButtonBackground(color: string) {
    return { 
        type: CHANGE_BACKGROUND,
        color
    }
}