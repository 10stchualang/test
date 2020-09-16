import React, { Component } from "react"

let arrParent = []

for (let i = 0; i < 100; i++) {
  arrParent.push(`${i}/`)

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


class App extends Component {
  constructor (props) {
    super(props);
  }

  state = {
    arrOne: [],
    arrTwo: [],
    arrThree: [],
    arrParent
  }

  getIndexFromParent = (a) => {

    var i = this.state.arrParent.indexOf(`${a}/`);
    if (i != -1) {
      this.state.arrParent.splice(i, 1);
      this.setState({ arrParent })
    }
  }

  onClick = (e) => {
    const stateName = e.target.name
    let index = getRandomInt(99)
    const param = this.state.arrParent.find((e, i) => i === index)
    this.setState({ ...this.state, [stateName]: [...this.state[stateName], param] })
    const newArrParent = this.state.arrParent.filter((e, i) => i !== index)
    this.setState({ arrParent: newArrParent })
  }



  render() {
    return (<div>
      <p>{this.state.arrOne}</p>
      <button style={styles} name="arrOne" onClick={this.onClick} />

      <p>{this.state.arrTwo}</p>
      <button style={styles} name="arrTwo" onClick={this.onClick} />



      <p>{this.state.arrThree}</p>
      <button style={styles} name="arrThree" onClick={this.onClick} />



      <p>{this.state.arrParent}</p>


    </div>)
  }
}

export default App;
const styles = {
  width: 100,
  height: 50
}