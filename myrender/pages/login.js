import Layout from './../component/layout/layout'
import axios from 'axios'
import Router from 'next/router'


class login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password : '',
            error : ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()

        //create instance of axios to enable withCredentials
        //which allow cookie flow from server to client
        const instance = axios.create()
        instance.defaults.withCredentials = true

        instance.post('http://localhost:8080/api/userlogin', {
            email : this.state.email ,
            password : this.state.password
        })
        
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            Router.push('/cart.html')
        })

        .catch(err =>{
            this.setState({
                error : err.response.data
            })
            console.log(err.response.data)
        })

    }

    onChange(e){

        this.setState({
            [e.target.name]: e.target.value ,
            error : ''
        })
    }

    render(){
        return(
            <Layout>

                <div className="row justify-content-md-center">
                <form className="col col-lg-6" onSubmit={this.onSubmit}>
                {this.state.error}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"
                        value={this.state.password} onChange={this.onChange} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

            </Layout>
        )
    }
}

export default login