import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Header = ({ login }) => {
  return <Fragment>
    <Link to="/">首页</Link>
    
    { login ? <>
      <button>翻译列表</button>
      <button>退出</button>
    </> : <Link to="/login">登录</Link>}
  </Fragment>
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Header)