

class searchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            term : ''
        }

        this.onChange = this.onChange.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    onChange(e){
        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit(e){
        e.preventDefault()
        console.log(this.state.term)

        
        this.setState({
            term : ''
        })
    }

    render(){
        return(

                <div className="navbar navbar-light bg-warning">
                  <form className="form-inline" onSubmit={this.handelSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" name='term' aria-label="Search" 
                    value={this.state.term} onChange={this.onChange}/>
                    <button className="btn btn-basic my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>

        )
    }
}

export default searchBar