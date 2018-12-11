import Navbar from './navbar'
import Myhead from './head'
import details from './../../../details'
import Footer from './footer'


const layout = (props)=>{
    return(
        <div>
            <Myhead title={props.title} desc={props.desc} img={props.img} />
            <Navbar cartlen={props.cartlen} />
            <div className="container">
            <h1>{details.title}</h1>
		    <p>{details.describtion}</p>

            {props.children}

            </div>
            <Footer/>
        </div>
    );
}

export default layout