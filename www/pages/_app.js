import App, {Container} from 'next/app';
import React from 'react';
import Router from 'next/router';
import {trackPageView} from '../helpers';

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      console.log("GA enabled")
      trackPageView(url);
    };
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
        <Container>
          <Component {...pageProps} />
        </Container>
    );
  }
}
