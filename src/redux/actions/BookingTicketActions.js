
export const bookingAction = (id) => {
    return {
        type: "DAT_GHE",
        id
    }
}

export const cancelSeat = (seat) => {
    return {
        type: "HUY_GHE",
        seat
    }
}
