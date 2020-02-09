import Cookie from 'js-cookie'
import Router from 'next/router'

const logoutService = () => {
  Cookie.remove('adminToken')
  Cookie.remove('user')

  Router.push('/admin/login')
}

export default logoutService
