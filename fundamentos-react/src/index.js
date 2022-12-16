import ReactDom from 'react-dom'
import React from 'react'

const tag = <h1>olá React!</h1>

ReactDom.render(
    <div>
        { tag }
    </div>
    ,document.getElementById('root')
)