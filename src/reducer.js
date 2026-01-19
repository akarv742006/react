// Helper to load state from Local Storage (Simulating DB Fetch)
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return { basket: [], user: null };
        }
        const loadedState = JSON.parse(serializedState);
        // Force sanitization
        return {
            basket: Array.isArray(loadedState.basket) ? loadedState.basket : [],
            user: loadedState.user || null
        };
    } catch (err) {
        return { basket: [], user: null };
    }
};

// Helper to save state to Local Storage (Simulating DB Update)
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState);
    } catch {
        // ignore write errors
    }
}

export const initialState = loadState();

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case "ADD_TO_BASKET":
            newState = {
                ...state,
                basket: [...state.basket, action.item],
            };
            saveState(newState); // Persist
            return newState;

        case "EMPTY_BASKET":
            newState = {
                ...state,
                basket: []
            }
            saveState(newState);
            return newState;

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }

            newState = {
                ...state,
                basket: newBasket,
            };
            saveState(newState);
            return newState;

        case "SET_USER":
            newState = {
                ...state,
                user: action.user
            }
            saveState(newState);
            return newState;

        default:
            return state;
    }
};

export default reducer;
