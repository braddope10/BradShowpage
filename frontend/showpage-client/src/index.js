// Import React, ReactDOM, {createStore, applyMiddleware, compose }, { Provider }, thunk, { composeWithDevtools }, and App

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevtools } from 'redux-devtools-extension' // Use "composeWithDevTools" instead of using -> window.__Redux_devtools
import App from './components/App'






