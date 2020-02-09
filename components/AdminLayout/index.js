import styled from 'styled-components'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Router from "next/router";
import nextCookie from "next-cookies";
import React from "react"
import Cookie from 'js-cookie'

const auth = (ctx = {}) => {
  const { adminToken } = nextCookie(ctx);

  if (ctx.req && !adminToken) {
    ctx.res.writeHead(302, { Location: "/admin/login" });
    ctx.res.end();
    return;
  }

  if (!adminToken) return Router.push('/admin/login')

  return adminToken;
};

const AdminLayout = WrappedComponent =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    componentDidMount() {
      auth();
    }

    render() {
      return (
        <div>
          <Navbar/>
          <Wrapper>
            <Sidebar/>
            <WrappedComponent {...this.props} />
          </Wrapper>
        </div>
      )
    }
  };

export const adminLogged = () => {
  const cookie = Cookie.get()

  if (!cookie) return false

  if (!cookie.adminToken) return false

  return true
}

const Wrapper = styled.div`
  display: flex;
`

export default AdminLayout