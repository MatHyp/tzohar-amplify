import Document, { Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar/Navbar";
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <html>
        <Head>
          <title>
            Tzohar – TZOHAR WINDOWS & DOORS is a US based company that maintains
            exclusive partnerships with European window and door manufacturers.
          </title>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
