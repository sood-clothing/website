// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, {Head, Main, NextScript} from 'next/document';
// We wrap our scripts below in Fragment to avoid unnecessary mark up
import {Fragment} from 'react';
import {GTAG_UA} from "../helpers";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return {...initialProps, isProduction};
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GTAG_UA}');
      `
    };
  }

  render() {
    const {isProduction} = this.props;
    return (
        <html>
        <Head>
          <NextScript/>
        </Head>
        <body>
        <Main/>
        {/* We only want to add the scripts if in production */}
        {isProduction && (
            <Fragment>
              <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_UA}`}
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()}/>
            </Fragment>
        )}
        </body>
        </html>
    );
  }
}