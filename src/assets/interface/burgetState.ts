interface burgerState {
    ingredients: {
        [propName: string]: number,
        // salad: number,
        // bacon: number,
        // cheese: number,
        // meat: number
    },
    totalPrice: number
}

export default burgerState;