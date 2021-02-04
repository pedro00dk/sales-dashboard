import '@babel/polyfill' // regeneratorRuntime
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Container } from './view/Container'

const root$ = document.getElementById('root')
ReactDom.render(<Container />, root$)
