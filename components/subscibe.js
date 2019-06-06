import {useState, Fragment} from 'react'
import Text from './text'
import {Button, Input, Icon} from 'antd'

const EmailSubmit = Input.Search;

export default ({}) => {
  const [canEnterEmail, showEmailInput] = useState(false)
  return (
      <div className="root">
        {
          canEnterEmail ?
              <EmailSubmit
                  placeholder="Email goes here"
                  enterButton="Submit"
                  size="large"
                  onSearch={value => console.log(value)}
              />
              :
              <Fragment>
                <div style={{marginBottom: '15px'}}><Text>COMING SOON</Text>
                </div>
                <Button type="default" ghost size={'large'}
                        onClick={() => showEmailInput(true)}>SUBSCRIBE FOR
                  UPDATES</Button>
              </Fragment>
hh
        }
        <style jsx>{`
      .root {
        display: grid;
        justify-items: center;
      }
    `}</style>
      </div>
  )
}