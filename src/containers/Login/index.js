import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { createForm } from 'rc-form'
import { Button, InputItem, WhiteSpace, Toast } from 'antd-mobile'
import { postLoginRequest } from '../../actions'
import { MyActivityIndicator } from '../../components'
import styles from './style.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      username: props.login.username,
      password: props.login.password
    }
    this.onUserNameChange = this.onUserNameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('输入错误')
    }
  }

  onUserNameChange(value) {
    this.setState({
      value
    })
  }

  onPasswordChange(value) {
    this.setState({
      value
    })
  }

  onSubmit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value)
    })

  }

  componentDidMount() {}

  render() {
    let errors
    const { login, navigateTo, postLogin } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div className={styles.content}>
        <MyActivityIndicator isFetching={login.isFetching} />
        <InputItem
          {...getFieldProps('username', {
            onChange: this.onUserNameChange,
            rules: [{ required: true }]
          })}
          placeholder="请输入用户名"
          value={this.state.user}
        >
          用户名
        </InputItem>
        <InputItem
          type="password"
          {...getFieldProps('password', {
            onChange: this.onPasswordChange,
            rules: [{ required: true }]
          })}
          placeholder="请输入密码"
          value={this.state.password}
        >
          密码
        </InputItem>
        <WhiteSpace />
        {(errors = getFieldError('username')) ? errors.join(',') : null}
        <WhiteSpace />
        <Button onClick={this.onSubmit} type="primary">
          登录
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.root.login
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postLogin: payload => {
      dispatch(postLoginRequest(payload))
    },
    navigateTo: location => {
      dispatch(push(location))
    }
  }
}

Login.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
