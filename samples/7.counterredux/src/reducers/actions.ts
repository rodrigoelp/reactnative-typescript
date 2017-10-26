
const INCREMENT = "Increment";
const DECREMENT = "Decrement";

const IncrementActionCreator = (step: number) => {
    return { type: INCREMENT, payload: step };
};

const DecrementActionCreator = (step: number) => {
    return { type: DECREMENT, payload: step };
};

export { IncrementActionCreator, INCREMENT, DecrementActionCreator, DECREMENT };
