import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './server/Home'
const app = express()

app.get('/',function (req, res) {
  res.send(
    `<html>
      <head>
        <title>M</title>
      </head>
      <body>
        ${renderToString(<Home />)}
      </body>
     </html>
    `
  )
})

app.listen(3000)