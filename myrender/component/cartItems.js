import CartItem from './cartItem'
import { connect } from 'react-redux'

const cartItems = (props)=>{
        return props.cartState.items.map((pro , i)=>{
        return <CartItem pro={pro} key={i} /> 
        })
    
}

const mapStateToProps = (state)=>({
    cartState : state.cart
})

export default connect (mapStateToProps)(cartItems)