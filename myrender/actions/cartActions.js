

export const iniCart = (item)=>({
    type : 'INI_CART',
    payload : item
})

export const addNewItem = (item) =>({
    type : 'ADD_CART_ITEM',
    payload : item
})

export const removeItem = (item) =>({
    type : 'REMOVE_CART_ITEM',
    payload : item
})

export const addAddress = (address) =>({
    type : 'ADD-ADDRESS',
    payload : address
})