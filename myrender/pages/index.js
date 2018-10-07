import fetch from 'isomorphic-unfetch'
import Layout from './../component/layout/layout.js'
import details from './../../details'
import Product from './../component/product'


 const Index =  (props)=> (
    <div>
        <Layout>

            <div className="container">
        <h1>{details.title}</h1>
        <p>{details.describtion}</p>

        <div className="row">
       { props.data.map((pro, key)=>{
                  return <Product key={key} pro={pro} />
                  }) }
        </div>

            </div>

        </Layout>
    </div>
)



Index.getInitialProps = async function(){
    const res = await fetch('http://localhost:8080/api/products')
    const data = await res.json()

    return { data }
}


export default Index