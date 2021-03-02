// import React, ReactDOM, { createStore }, { Provider }, thunk

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' // Use "composeWithDevTools" instead of using -> window.__Redux_devtools
