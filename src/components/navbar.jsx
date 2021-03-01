import React from 'react'

//Stateless Function Component (short for SFC) like this below:
//SFC need pass props as agrument to this function.
//Delete the props we can use counstructor object.
//Sometime we will use lots arguments in the function or class. We dont want to put all argument with props.
//So we can use the destructuring argument {totalCounters} instead of props
const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"  style={{margin:'auto'}}>
                Counter App{" "} 
                <span className="badge badge-pill badge-secondary">
                    {/* use SFC dont need this */}
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;

//Use class to write will be like this below:
// class Navbar extends Component {
//     state = {  }
//     render() { 
//         return (  
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar{" "} 
//                     <span className="badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
// export default Navbar;