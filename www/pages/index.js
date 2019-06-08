import Layout from '../components/layout'
import SubscribeAction from '../components/subscibe'
import Background from '../components/background'

export default () => {
  const adjustHeightClassName = 'adjust-laptop'
  return (
      <Layout>
        <div className={`main ${adjustHeightClassName}`}>
          <Background/>
          <div className="logo">
            <img src="/static/logo_min.png" alt="logo" height="60px"
                 width="200px"/>
          </div>
          <div className="root">
            <SubscribeAction/>
          </div>
        </div>
        <style jsx>{`
      .adjust-laptop {
        font-size: 16px;
      }
    
      .main {
        height: 100vh;
      }

      .root {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }

      .logo {
        position: absolute;
        top: 4em;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
   `}</style>
      </Layout>
  )
}
