import React from 'react'
import { BrowerRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"

export class App extends React.Component {
    render() {
        return <>
            <BrowerRouter>
                <Nav />
                <Landing />
            </BrowerRouter>
        </>
    }
}

export default connect()(App)
