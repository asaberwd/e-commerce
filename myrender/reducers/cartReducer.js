

 const cartReducer = (state = {items : []}, action)=>{
    switch(action.type){

        case 'INI_CART':
        if(action.payload === null) return state
        return  {
          ...state,
          items : action.payload.items}

        case 'ADD_CART_ITEM':
        let newstate = state.items
        if(newstate.length === 0) {
          return {
            ...state,
            items :[action.payload]
          }
        }
        let found = newstate.findIndex(item =>
          item.pro === action.payload.pro
        )

        if( found !== -1 ) {
          newstate[found].qua += action.payload.qua
          newstate[found].total = newstate[found].qua * newstate[found].price 
        return {
          items :[...newstate] }
        }else{
          return {
            items : [...state.items,
                    action.payload]
                }
        }

        case 'REMOVE_CART_ITEM':
        return {
          ...state,
          items : [...action.payload]
         }

         case 'ADD-ADDRESS':
         return {
           ...state,
           address : action.payload
         }

        default :
         return state
    }
  
  }

  export default cartReducer