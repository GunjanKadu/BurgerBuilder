interface burgerState {
    ingredients: {
        [propName: string]: number,
        // salad: number,
        // bacon: number,
        // cheese: number,
        // meat: number
    },
    totalPrice: number,
    purchaseable: boolean
}

export default burgerState;