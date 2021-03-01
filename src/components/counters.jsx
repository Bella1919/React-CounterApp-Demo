import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    //Cause of we need lifting counters's data and menthod up to parent App.
    // state = {
    //     counters:[
    //         {id:1, value:4},
    //         {id:2, value:0},
    //         {id:3, value:0},
    //         {id:4, value:0}
    //     ]
    // }
    // //We cannot change any state in child component.
    // //'counterId 'is kind of placeholder or mark to help react find which one to delete. Its to receive the data of child's counter.id
    // handleDelete = counterId => {
    //     const counters = this.state.counters.filter(counter=>counter.id !== counterId);
    //     //Cause the key and value (counters:counters) are same so can simple write as counters
    //     this.setState({ counters });
    // }
    // handleReset = () => {
    //     const counters = this.state.counters.map(counter=>{
    //         counter.value = 0;
    //         return counter;
    //     });
    //     //setState for update the state. cause of we cannot edit the state directly.
    //     this.setState({counters});
    // };

    // //The counter is argument of handleIncrement.
    // handleIncrement = counter =>{
    //    const counters = [...this.state.counters];
    //    //we dont clone the hole counters, we just need clone the counter's location. 
    //    //Then we can clone the counter as argument we received. And that one is a different one than the one in 'state'.
    //    const index = counters.indexOf(counter);
    //    counters[index] = {...counter};
    //    counters[index].value++;
    //    //setState can make a new state.
    //    this.setState({counters});
    // };

    render() { 
        //Render hooks example:
        // console.log("Counters-Rendered")

        //we can use destructuring argument {argument} to instead of this.props.argument.
        //Compair with arrow function we need clear it first.
         const  {onReset,onDelete,onIncrement,onDecrement,counters} = this.props;

        return (
        <div>
            <button
                //cause of the method lifting to the parent. So have to change from  method 'handleReset' to props onReset.
                onClick = {onReset} 
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {/* we want to keep the Counter as dynamic status. */}
            {/* cause of no state in counters. so have to change state to props */}
           {counters.map(counter=>(
                <Counter 
                   //This key attribute is internerly by react. We cannot assess in counter component.
                   //That's why we need pass 'id' to counter componet to read it.
                    key = {counter.id}
                    // onDelete to pass the props to child
                    onDelete = {onDelete} 
                    // value = {counter.value} //Its property of counter
                    // id ={counter.id}       //Its property of counter
                    //The point of using object is it can encapsulate the related values.
                    //Cause of the {counter} have all the props data, so we can pass couter to child derectly.
                    //Even we need some new props in future, but we dont need to come back to change the {counter}.
                    onIncrement = {onIncrement}
                    onDecrement = {onDecrement}
                    counter = {counter}
                />
                ))}
        </div>
        );
    }
}
 
export default Counters;