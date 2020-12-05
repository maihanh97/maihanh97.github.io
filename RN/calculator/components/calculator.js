export const initialState = {
    currentValue: '0',
    operator: null,
    previousValue: null,
    resultValue: '0'
};

export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
        return { currentValue: `${value}` };
    }
    return {
        currentValue:`${state.currentValue}${value}`
    };
};

export const handleEqual = (state) => {
    const { currentValue, previousValue, operator, resultValue } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const result = parseFloat(resultValue);

    if (operator === "/") {
        return {
            currentValue: previous / current
        };
    }

    if (operator === "*") {
        return {
            currentValue: previous * current
        };
    }

    if (operator === "+") {
        return {
            currentValue: previous + current,
        };
    }

    if (operator === "-") {
        return {
            currentValue: previous - current
        };
    }
    return {
        state
    };
};
const calculator = (type, value, state) => {
    switch (type) {
        case "number":
            return handleNumber(value, state);
        case "operator":
            return {
                operator: value,
                previousValue: state.currentValue,
                currentValue: state.result
            };
        case "equal":
            return handleEqual(state)
        case "clear":
            return initialState;
        case "excep":
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
            };
        case "percentage":
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return state;
    }
};

export default calculator;
