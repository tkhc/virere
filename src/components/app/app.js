import React, { Component } from "react"
import Order from "./order"
import Steps from "./steps"
import Navbar from "./Navbar"

import "./app.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: 0,
      summary: false
    }
  }

  handleCourse = (course = 0) => {
    this.setState({ course })
  }

  handleSummary = () => {
    this.setState({ summary: !this.state.summary })
  }

  render() {
    return (
      <main className="app">
        <Navbar></Navbar>
        <h1 className="title">
          {this.state.summary ? "Your order: " : "Select as many as courses you would like:"}
        </h1>
        <Steps
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
        />
        <Order
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
        />
      </main>
    )
  }
}
