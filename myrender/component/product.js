import {Link} from './../routes'


class Product extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cartItems : [],
            pro : {_id:props.pro._id, price : props.pro.unitPrice,
                pic : this.props.pro.pictures[0], qua : 1 , pro : this.props.pro.productName,
                total : (this.props.pro.unitPrice * 1) }
        }

        this.onClick = this.onClick.bind(this)
    }

 componentDidMount(){
    let pnu = JSON.parse( localStorage.getItem('cart') )
     
    if(pnu) {
        this.setState({
            cartItems : pnu
        })
    }
 }    


     //breif = this.props.pro.prodDescription.slice(0,120) 

     onClick(e){
        e.preventDefault()
        let incart = localStorage.getItem('cart')
        if(incart){
            let prst = this.state.cartItems
            prst.push(this.state.pro)
            this.setState({
                cart : prst
            })
            localStorage.setItem('cart', JSON.stringify(this.state.cartItems) )

            return 
        }

        localStorage.setItem('cart',JSON.stringify([this.state.pro]))
        let arr = localStorage.getItem('cart')
        this.setState({
            cart : arr
        })
     }



    render(){
        return(
            <div className="col-md-4 text-center">
            <Link route="pro" params={{ slug: this.props.pro.slug }}>
            <div className="product-entry">

                <div className="product-img" style={{ backgroundImage : `url(${this.props.pro.pictures[0]})`}}>
                    <p className="tag"><span className="new">{this.props.pro.category.catName}</span></p>
                    <div className="cart">
                        <p>
                            <span className="addtocart" ><a href="" onClick={this.onClick}><i className="icon-shopping-cart"></i></a></span> 
                            <span><a href="product-detail.html"><i className="icon-eye"></i></a></span> 
                            <span><a href="#"><i className="icon-heart3"></i></a></span>
                            <span><a href="add-to-wishlist.html"><i className="icon-bar-chart"></i></a></span>
                        </p>
                    </div>
                </div>

                <div className="desc">
                    <h3>{this.props.pro.productName}</h3>
                    <p className="price"><span>{this.props.pro.unitPrice}</span></p>
                </div>

            </div>
            </Link>
            </div>



        )
    }
}

export default Product