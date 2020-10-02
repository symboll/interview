import express from 'express'
import { matchRoutes } from 'react-router-config'

import { render } from './util'
import { getStore } from '../store'
import routes from '@/routes'

const app = express()
app.use(express.static('public'))

app.get('*',function (req, res) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []
  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(req, store, routes))
  })
})

app.listen(3000)