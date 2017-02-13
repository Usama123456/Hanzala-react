class Navbar extends React.Component {
    render() {
        let  menu = ['Home','About','Services','Portfolio','Contact Us']

        return (
            <div>
            <center><h1>MH Projects</h1></center>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#" style={{color: 'white'}}>Menu</a>
                </div>
                <ul className="nav navbar-nav">
                    {menu.map((v,i) => {
                                return <Link key={i} label = {v}/>
                            })}
                </ul>
            </div>
            </nav>
            <br/>
            <br/>
            </div>
        )
    }
}
class Link  extends React.Component{
    render() {
        let url = '/'
         + this.props.label
         .toLowerCase().trim().replace(' ','-')

        return <li> <a href={url}>  {this.props.label}</a></li>
            
        
    }
}

ReactDOM.render(<Navbar /> , document.getElementById('container'))