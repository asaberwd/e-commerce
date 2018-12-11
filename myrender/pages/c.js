import Layout from './../component/layout/layout.js'
import {Link} from './../routes'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import {addAddress} from './../actions/cartActions'
import { connect } from 'react-redux'
import axios from 'axios'



class checkout2 extends React.Component{

    constructor(props){
        super(props)

        this.k = jwt.decode(cookie.get('token'))

        this.state = {
            token : this.k
        }

        this.viewAddresses = this.viewAddresses.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onComplete = this.onComplete.bind(this)
    }

    onClick(e){
        e.preventDefault()
        let num = parseInt(e.target.name)
        this.props.newAddress(this.state.token.addresses[num])

    }

    onComplete(e){
        e.preventDefault()
        axios.post('http://localhost:8080/api/newOrder', {
            items : this.props.cartState.items,
            address : this.props.cartState.address,
            user : this.state.token.id
        })
        .then(res =>{
            console.log(res.data)
        })

        .catch(e =>{
            console.log(e)
        })
    }


    viewAddresses(){
        return this.state.token.addresses.map((address,i)=>{
            return (
                <div className="col-6" key={i}>
                    <p>country : {address.country}</p>
                    <p>city : {address.city}</p>
                    <p>full address : {address.fullAddress}</p>
                    <p>name : {address.name}</p>
                    <p>phone : {address.phone} </p>
                    <p>postalCode : {address.postalCode}</p>
                    <button type="submit" name={i} onClick={this.onClick}>ship to this address</button>
                </div>
            )
        })
    }

    render(){
        console.log(this.state.token)
        return(
            <Layout>
                <h4>hello {this.state.token.email}</h4>

                <div >
                <span className="btn btn-primary btn-addtocart" onClick={this.onComplete}>
                    <i className="icon-shopping-cart"></i>
                    Complete Order
                </span>
                </div>

                <div className="row">
                    {this.viewAddresses()}
                </div>
                

            </Layout>
        )
    }
}


const mapDispatchToProps =(dispatch)=>({
	newAddress : (address)=>(dispatch(addAddress(address)))
  })

  const mapStateToProps = (state)=>({
      cartState : state.cart
  })


export default connect (mapStateToProps, mapDispatchToProps)(checkout2)