import React, { Component } from 'react';

class Counter extends Component {
    // Add a property state to store all the data the counter need.
    //Cause of the 'Counter component' controled by parent 'Counters'.
    //So the 'state' was deleted.
    // state = {
    //     //After check the props status, we change 'count' to 'value' to keep align with property. 
    //     value : this.props.counter.value,
    //     //this wed will automitic make the photo size in 200*200
    //     // imageUrl : 'https://picsum.photos/200'
    //     // tags:[]//this tags just for render list
    // };

    // styles = {
    //     fontSize:10,
    //     fontWeight:'bold'
    // }

    // renderTags(){
    //     if(this.state.tags.length===0) return <p>There are no tags!</p>;
    //     return <ul>{ this.state.tags.map(tag => <li key = {tag} >{ tag }</li>)}</ul>;
    // }
    //This constructor just for bind this to handleIncrement
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //Cause of deleted the state. Its controled and handle data by parents.It was deleted.
    // handleIncrement=(product)=>{
    //     // console.log(product);
    //     // //This react cannot make sense
    //     // this.state.count++;  
    //     //this.setState will tell react it will be change
    //     this.setState({value:this.state.value +1});
    // };
    
    //These are life hooks example:
    // componentDidUpdate(prevProps,prevState){
    //     console.log("prevProps",prevProps);
    //     console.log("prevState",prevState);
    //     if(prevProps.counter.value !== this.props.counter.value){
    //         //Ajax call and get new data from the server
    //     }
    // }
    // componentWillUnmount(){
    //     console.log("Counter - Unmount");
    // }

    render() { 
        //Render hook example:
        // console.log("Counter-Rendered")

        //We can use console 'props' to look the data posation.
        // console.log('props',this.props)
        //React.creatElement('div')
        //use 右键 refactor and choose the method in Counter it will automitic creat this below method:
        // let classes = this.getBadgeClasses();

        //we can use destructuring argument {argument} to instead of this.props.argument.
        //Compair with arrow function we need clear it first.
        const  {onIncrement,onDecrement,counter} = this.props;

        return( 
            // React.Fragmen can instead of 'div '
            <div className="row">
                

                
                {/* (1)and (2)They are same. They all can make same result.
                    {this.props.children}    (1)
                <h4>{this.props.id}</h4> (2) */}
                {/* dynimic photo set like this: */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* To render dynimicly use'{}', can use any js value expression between it  */}
                {/* Inline style like this style={{fontSize:30}} */}
                <div className="col-1 mr-2">
                    <span className={this.getBadgeClasses()} >
                        {this.formatCount()}
                    </span>
                </div>
                {/* For the handleIncrement just reference donot call that function, so without'()' */}
                <div className="col ml-3">
                <button 
                    //There are two ways to reference the event (1)and (2).They are same.
                    //(1)pass a parameter to the event arrow function.
                    // onClick={()=>this.handleIncrement(product)} //(1)
                    // onClick={this.handleIncrement} //(2)
                    //we just use destructuring argument to onIncrement.
                    onClick={()=>onIncrement(counter)}
                    className="btn btn-secondary btn-sm"
                    >
                    +
                </button>
                <button 
                    onClick={()=>onDecrement(counter)}
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 0 ? "disable":""}
                    >
                    -
                </button>
                {/* {this.state.tags.length===0 && 'Please create a new tag!'}
                {this.renderTags()} */}
                {/* <ul>{ this.state.tags.map(tag => <li key = {tag} >{ tag }</li>)}</ul> */}
                <button 
                    //This'this.props.id' or 'this.props.counter.id' equal to the counterID in Counters. 
                    //Its a parameter for arrow handleDelete function in Counters.
                    onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
                </div>
            </div>
        );
    }
    //This for control the color of 'span'
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        //Repalce this.state. to this.props.counter Cause of the state no longer use.
        //Now received date from counters parent.
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    //This for control the number of 'span'
    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
}
 
export default Counter;
