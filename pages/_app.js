
// import Font Awesome CSS
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Layout from "../layout/Layout";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

const App = ({ Component, pageProps }) => {
  return (


  <Layout>
   <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800"/>
  </Head>
  <Component {...pageProps} />
  </Layout>

  
  )
};

export default App;