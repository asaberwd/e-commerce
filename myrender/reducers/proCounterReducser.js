
const proCounterReducer = (state = 1  , action)=>{

    switch(action.type){
        case 'ini-COUNTER':
        return 1
        case 'ADD-COUNTER':
        return state + 1
        case 'MIN-COUNTER':
        return state - 1
        default :
        return state
    }
}


export default proCounterReducer