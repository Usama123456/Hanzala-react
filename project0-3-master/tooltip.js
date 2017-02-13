class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const toolTipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: toolTipNode.offsetTop,
            left: toolTipNode.offsetLeft

        })
    }
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30,
            

        }

        return(
        <div style={{display: 'inline'}}>
            <span style = {{color:'blue', cursor: 'pointer'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
            {this.props.children}
            </span>
            <div className="tooltip bottom" style={style} role="tooltip">
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">
                {this.props.text}
                </div>
            </div>

        </div>                          
        )
    }
} 

ReactDOM.render(
    <div><h1>Tooltip</h1>
    The tooltip or infotip or a hint is a common <Tooltip text="Graphical User Interface">graphical user interface</Tooltip> element. 
    It is used in conjunction with a <Tooltip text="Cursor (Computers)">cursor</Tooltip>, usually a <Tooltip text="Pointer (Computers)">pointer</Tooltip>.
     The user hovers the pointer over an item, without clicking it, and a
     tooltip may appear—a small <Tooltip text="Hover Box">hover box</Tooltip> with information about the item being hovered over.Tooltips do not usually appear on 
            <Tooltip text="Mobile Operating Systems"> mobile operating systems</Tooltip>
     , because there is no <Tooltip text="Cursor (Computers)">cursor</Tooltip> (though tooltips may be displayed when using a mouse).
    <br/><br/><br/></div>,
document.getElementById('app'))