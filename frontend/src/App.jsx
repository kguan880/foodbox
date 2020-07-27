import React from 'react'
import {BrowerRouter, Switch, Route} from 'react-router-dom'
import Nav from "./components/Nav"

export default function App() {
    return <>
    <BrowerRouter>
    <Nav />
    </BrowerRouter>
    </>
}
