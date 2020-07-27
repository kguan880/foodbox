import React from 'react'
import {BrowerRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from "./Nav"
import Landing from "./Landing"

export default function App() {
    return <>
    <BrowerRouter>
    <Nav />
    <Landing />
    </BrowerRouter>
    </>
}
