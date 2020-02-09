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

export const adminAuth = WrappedComponent =>
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
      return <WrappedComponent {...this.props} />;
    }
  };

export const adminLogged = () => {
  const cookie = Cookie.get()

  if (!cookie) return false

  if (!cookie.adminToken) return false

  return true
}
