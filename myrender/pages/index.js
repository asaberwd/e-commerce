import fetch from 'isomorphic-unfetch'
import Layout from './../component/layout/layout'
import Products from './../component/products'

import withRedux from 'next-redux-wrapper';
import initializeStore from './../store.js';

import { connect } from 'react-redux'
import SearchBar from './../component/seachBar'

class Index extends React.Component{

    componentDidMount(){
        
    }
    

    static async getInitialProps(){
        const res = await fetch('http://localhost:8080/api/viewproducts')
        const data = await res.json()
        return { data }
    }


    render(){
        console.log(this.props)
        return(
            <Layout>
                <SearchBar />
        
            <Products data={this.props.data}/>
    
                
            </Layout>
        )
    }


}

const mapStateToProps = (state)=>({
    cartState : state.cart
})

 

export default connect(mapStateToProps)(Index)