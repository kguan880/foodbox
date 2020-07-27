import React from 'react'
import { BrowerRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"
import About from './About'

export class App extends React.Component {
    render() {
        return <>
            <BrowerRouter>
                <Nav />
                <Landing />
                <About />
            </BrowerRouter>
        </>
    }
}

export default connect()(App)
