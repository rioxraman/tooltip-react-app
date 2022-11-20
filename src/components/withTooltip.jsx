import React from 'react';

function withTooltip(Component) {

    return(
        class WithTooltip extends React.Component {
            state = {
                showTooltip:false
              } 

              handleMouseOut = () =>this.setState({showTooltip:false})
              handleMouseOver = () =>this.setState({showTooltip:true})
            render() { 
                return (
                    <>
                    <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
                        <Component showTooltip={this.state.showTooltip} />
                    </div>
                    </>
                );
            }
        }
         
        
    )
    
}
export default withTooltip;