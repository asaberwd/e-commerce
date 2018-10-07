import fetch from 'isomorphic-unfetch'
import Layout from './../component/layout/layout.js'
import details from './../../details'


class Mypost extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cart :[],
            qua : 1,           
        }

        this.onClick = this.onClick.bind(this)

        this.rr = {_id:props.data._id, price : props.data.unitPrice,
            pic : this.props.data.pictures[0], qua : this.state.qua , pro : this.props.data.productName,
            total : (this.props.data.unitPrice * 1) }

    }



    static getInitialProps = async function({query}){
        const res = await fetch(`http://localhost:8080/api/products/${query.slug}`)
        const data = await res.json()
    
        return { data }
    }

    componentDidMount(){
        let pnu = JSON.parse( localStorage.getItem('cart') )
     
         if(pnu) {
             this.setState({
                 cart : pnu
             })
         }
         
     
      }    

    onClick(e){
        e.preventDefault()
        let incart = localStorage.getItem('cart')
        if(incart){
            let prst = this.state.cart
            prst.push(this.rr)
            this.setState({
                cart : prst
            })
            localStorage.setItem('cart', JSON.stringify(this.state.cart) )

            return 
        }

        localStorage.setItem('cart',JSON.stringify([this.rr]))
        let arr = localStorage.getItem('cart')
        this.setState({
            cart : arr
        })
    }

    getcounter(){

    }
  

    render(){
    return(
            <Layout title={this.props.data.productName} desc={this.props.data.prodDescription} img={this.props.data.pictures[0]} 
            cartlen={this.state.cart.length} >
            <div className="container">
            <h1>{details.title}</h1>        

            <p>{details.describtion}</p>

<div className="row row-pb-lg">
<div className="col-md-10 col-md-offset-1">
    <div className="product-detail-wrap">
        <div className="row">
                <div className="col-md-5">
                <div className="product-entry">
                    <div className="product-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}>
                        <p className="tag"><span className="sale">Sale</span></p>
                    </div>
                    <div className="thumb-nail">
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                        <a href="#" className="thumb-img" style={{backgroundImage: `url(${this.props.data.pictures[0]})`}}></a>
                    </div>
                </div>
            </div>

            <div className="col-md-7">
                <div className="desc">
                    <h3>{this.props.data.productName}</h3>
                    <p className="price">
                        <span>{this.props.data.unitPrice} $</span> 
                        <span className="rate text-right">
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-full"></i>
                            <i className="icon-star-half"></i>
                            (74 Rating)
                        </span>
                    </p>
                    <p> {this.props.data.prodDescription} </p>
                    <div className="color-wrap">
                        <p className="color-desc">
                            Color: 
                            <a href="#" className="color color-1"></a>
                            <a href="#" className="color color-2"></a>
                            <a href="#" className="color color-3"></a>
                            <a href="#" className="color color-4"></a>
                            <a href="#" className="color color-5"></a>
                        </p>
                    </div>
                    <div className="size-wrap">
                        <p className="size-desc">
                            Size: 
                            <a href="#" className="size size-1">xs</a>
                            <a href="#" className="size size-2">s</a>
                            <a href="#" className="size size-3">m</a>
                            <a href="#" className="size size-4">l</a>
                            <a href="#" className="size size-5">xl</a>
                            <a href="#" className="size size-5">xxl</a>
                        </p>
                    </div>                   

<Counter  co={this.getcounter}/>                  
                </div>

                
                <div >
                <span className="btn btn-primary btn-addtocart" onClick={this.onClick}>
                    <i className="icon-shopping-cart"></i> Add to Cart
                </span>
                </div>
                
            </div>


        </div>
    </div>
</div>
</div>

<ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#description">Description</a></li>
                <li><a data-toggle="tab" href="#manufacturer">Manufacturer</a></li>
                <li><a data-toggle="tab" href="#review">Reviews</a></li>
            </ul>

            <div id="description" className="tab-pane fade in active">
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    <ul>
                        <li>The Big Oxmox advised her not to do so</li>
                        <li>Because there were thousands of bad Commas</li>
                        <li>Wild Question Marks and devious Semikoli</li>
                        <li>She packed her seven versalia</li>
                        <li>tial into the belt and made herself on the way.</li>
                    </ul>
             </div>

             <div id="manufacturer" className="tab-pane fade">
                 <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                  
               </div>

            </div>
            </Layout>
    )
    }
}



export default Mypost



class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            counter : 1
        }

        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)

    }

    inc(e){
        e.preventDefault()
        let co = this.state.counter

            this.setState({
                counter : co + 1
            })
            


    }

    dec(e){
        e.preventDefault()
        let de = this.state.counter
        if(de === 1) return 0
        this.setState({
            counter : de - 1
        })

    }

    render(){
        return(
            <div className="row row-pb-sm">
                    <div className="col-md-4">
                        <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="quantity-left-minus btn" name="minus"  data-type="minus" data-field=""
                             onClick={this.dec}>
                            <i className="icon-minus2"></i>
                            </button>
                        </span>

                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.state.counter} 
                           min="1" max="100" readOnly />

                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn" name="plus" data-type="plus" data-field=""
                            onClick={this.inc}>
                            <i className="icon-plus2"></i>
                            </button>
                        </span>
                         </div>
                    </div>
                    </div>
        )
    }
}