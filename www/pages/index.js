import Layout from '../components/layout'
import SubscribeAction from '../components/subscibe'

export default () => (
  <Layout>
    <div className="main">
        {/* <img src="/static/IMG_1135 2.jpg" alt="logo"/> */}
      <div className="logo">
        <img src="/static/logo_min.png" alt="logo" height="60px" width="200px"/>
      </div>
      <div className="root">
        <SubscribeAction />
      </div>
    </div>
    <style jsx>{`
      .main {
        height: 100vh;
        background:linear-gradient(0deg,rgba(0,0,15,0.3),rgba(0,0,0,0.3)),url('/static/background.png');
        background-repeat: no-repeat;
        background-size: auto;
      }

      .root {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }

      .logo {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        width: 100%;
        height: auto;
      }
   `}</style>
  </Layout>
)
