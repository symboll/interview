import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '@/Routes'

const app = express()
app.use(express.static('public'))

app.get('/',function (req, res) {
  const App = renderToString(
    <StaticRouter location={req.path} context={{}}>
      { Routes }
    </StaticRouter>
  )
  res.send(
    `<html>
      <head>
        <title>Next</title>
      </head>
      <body>
        <div id="root">${App}</div>    
      </body>
      <script src="/main.js"></script>
     </html>
    `
  )
})

app.listen(3000)