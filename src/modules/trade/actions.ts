export const updateTrade = (name: string, price: number, desc: string) => {
    return {
        type: 'UPDATE_TRADE',
        payload: {name: name, price: price, desc: desc},
    }
}