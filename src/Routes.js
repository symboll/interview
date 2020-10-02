// import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './common/Home'
import Login from './common/Login'


export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home',
    // routes: [
    //   {
    //     path: '/ttt',
    //     component: Login,
    //     exact: true,
    //     key: 'ttt'
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]
// export default (
//   <div>
//     <Route path="/" exact  component={Home}/>
//     <Route path="/login" exact component={Login}/>
//   </div>
// )