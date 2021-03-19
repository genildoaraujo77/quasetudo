import App from 'next/app';
import '../public/static/styles.css';

class Principal extends App {
  static async getInitialProps({ Component, ctx }){
      return {
          pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
      }
  }

  render(){
      const { Component, pageProps } = this.props;
      return(
          
                  <Component {...pageProps} />
          
      );
  }
}

export default Principal;