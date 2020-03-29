import React from 'react'
import ReactDOM from 'react-dom'

import Root from './root'

const renderFunction = window.__STATE__
    ? ReactDOM.hydrate
    : ReactDOM.render

renderFunction(<Root />, document.getElementById('root'))
