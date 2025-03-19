export const cartInitialState = []
export const cartReducer = (state,action)=>{
    //reducir -transformar
    const {type:actionType,payload:actionPayload} = action
    switch(actionType){  
              
        case 'ADD_TO_CART':{  
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item=>item.id === id)

            // revisa si el árticulo ya esta en el carrito
            // si esta, se agrega +1
            if (productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart[productInCartIndex].quantity += 1
                return newCart
            }

            return [
                ...state,
                {
                    ...actionPayload, //product
                    quantity:1
                }
            ]
        }
        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            return state.filter(item=>item.id!==id)
        }
        case 'CLEAN_CART':{
            return cartInitialState
        }
    }
    return state
}