import Cookie from 'js-cookie'
import Router from 'next/router'

const loginService = () => {
  Cookie.set('adminToken', 'marcelolegal')

  Router.push('/admin/establishments')
}

export default loginService
