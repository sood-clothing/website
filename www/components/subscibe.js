import {useState, Fragment} from 'react'
import Text from './text'
import {Button, Input, Icon} from 'antd'
import axios from 'axios'

const EmailSubmit = Input.Search;

function subscribe(email, onSubscribeResponse) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!reg.test(email)) {
    onSubscribeResponse('We accept email Ids only')
  }

  axios.post('/api/signup', {
    email
  },)
  .then(function (response) {
    onSubscribeResponse('Successful')
  })
  .catch(function (error) {
    onSubscribeResponse('Please try again!')
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
                          placeholder="Email goes here"
                          enterButton="Submit"
                          size="large"
                          onSearch={email => subscribe(email,
                              onSubscribeResponse)}
                      />
                }
              </Fragment>
              :
              <Fragment>
                <div style={{marginBottom: '15px'}}><Text>COMING SOON</Text>
                </div>
                <Button type="default" ghost size={'large'}
                        onClick={() => showEmailInput(true)}>SUBSCRIBE FOR
                  UPDATES</Button>
              </Fragment>
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