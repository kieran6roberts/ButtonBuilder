export function changeButtonBackground(color: { color: string}) {
    return { 
        type: "CHANGE_BACKGROUND",
        color
    }
}