import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
  }

  //There are life hooks examples:
  // constructor(){
  //   super();
  //   console.log("App-Constructor")
  // }
  // componentDidMount(){
  //   console.log("App-Mounted")
  // }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter=>counter.id !== counterId);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter=>{
        counter.value = 0;
        return counter;
    });
    this.setState({counters});
  };

  handleIncrement = counter =>{
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = {...counter};
   counters[index].value++;
   this.setState({counters});
  };

  handleDecrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
   };

  render() { 
    //Render hook example:
    // console.log("App-Rendered")

    return (
      <div className = "container justify-center" style={{position:'relative'}}>
        <Navbar 
          //We just need to pass the number of counter to navbar.
          totalCounters={this.state.counters.filter(c=>c.value>0).length}
        />
        <main className="countaner" style={{position:'absolute',top:'200px',left:'50%',transform:'translate(-50%,-50%)'}}>
          {/* Now the counters components is a controled components. Cause of its dont have any state there all controled by App. Its just simply 
          received data and method via props. */}
          <Counters
            //pass the data state to counters
            counters = {this.state.counters}
            // There are three evens rise by counters
            onReset = {this.handleReset}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement} 
            onDecrement = {this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}
 
export default App ;
