import {useState, Fragment} from 'react'
import Text from './text'
import {Button, Input, Icon} from 'antd'
import axios from 'axios'

const EmailSubmit = Input.Search;

function subscribe(email, onSubscribeResponse) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!reg.test(email)) {
    onSubscribeResponse('Please enter a valid email')
    return;
  }

  axios.post('/api/signup', {
    email
  },)
  .then(function (response) {
    onSubscribeResponse(`Thanks for subscribing! We'll reach out you once we launch`)
  })
  .catch(function (error) {
    onSubscribeResponse('Something went wrong! Please try again')
  });
}

export default ({}) => {
  const [canEnterEmail, showEmailInput] = useState(false)
  const [subscribeResponse, onSubscribeResponse] = useState('')
  return (
      <div className="root">
        {
          canEnterEmail ?
              <Fragment>
                {
                  subscribeResponse ?
                      <Text>{subscribeResponse}</Text>
                      :
                      <EmailSubmit
                          placeholder="Email"
                          enterButton="SUBMIT"
                          size="large"
                          onSearch={email => subscribe(email,
                              onSubscribeResponse)}
                      />
                }
              </Fragment>
              :
              <Fragment>
                <div style={{marginBottom: '15px'}}><Text>COMING SOON!</Text>
                </div>
                <Button ghost size={'large'}
                        onClick={() => showEmailInput(true)}>SUBSCRIBE FOR
                  UPDATES</Button>
              </Fragment>
        }
        <style jsx>{`
      .root {
        display: grid;
        justify-items: center;
      }
      
      .ant-btn:hover {
        border-color: red
      }
    `}</style>
      </div>
  )
}