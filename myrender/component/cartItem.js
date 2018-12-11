import { connect } from 'react-redux'
import {removeItem} from './../actions/cartActions'


class cartItem extends React.Component{
    constructor(props){
        super(props)


        this.onClick = this.onClick.bind(this)

    }

    onClick(e){
        e.preventDefault()
        let name = [e.target.name]
        let key = parseInt(name)
        let oldcart = this.props.cartState.items
        oldcart.splice( key, 1 )
        this.props.removeItem(oldcart)
        
    }

    render(){
        let pro = this.props.pro
        let i = this.props.i

    return(
        <div className="product-cart" key={i}>
        <div className="one-forth">
            <div className="product-img" style={{backgroundImage: `url(${pro.pic})`}}>
            </div>
            <div className="display-tc">
                <h3>{pro.pro}</h3>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <span className="price">${pro.price}</span>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <input type="text" id="quantity" className="form-control input-number text-center" 
                defaultValue={pro.qua} /*onChange={this.onChange}*/ />
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <span className="price">${(pro.price * pro.qua)}</span>
            </div>
        </div>
        <div className="one-eight text-center">
            <div className="display-tc">
                <a href="#" className="closed" name={i} onClick={this.onClick}></a>
            </div>
        </div>
    </div>
      )
    }
} 

const mapStateToProps = (state)=>({
	cartState : state.cart
})

const mapDispatchToProps =(dispatch)=>({
    removeItem : (item)=>(dispatch(removeItem(item)))
  })

export default connect (mapStateToProps, mapDispatchToProps)(cartItem)