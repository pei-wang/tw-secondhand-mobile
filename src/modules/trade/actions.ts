export const updateTrade = (name: string, price: string, desc: string) => {
    return {
        type: 'UPDATE_TRADE',
        payload: {name: name, price: price, description: desc},
    }
}