import {useState, Fragment} from 'react'
import Text from './text'
import {Button, Input, Icon} from 'antd'
import axios from 'axios'
import "../assets/style.less";

const EmailSubmit = Input.Search;

function SuccessText() {
  return (
      <div>
        <Text>
          Thanks for subscribing!
        </Text>
        <br/>
        <Text>
          We'll reach out once we're ready to launch
        </Text>

        <style jsx>{`
          div {
            text-align: center;
          }
        `}</style>
      </div>
  )
}

function ErrorText() {
  return (
      <div>
        <Text>
          Something went wrong!
        </Text>
        <br/>
        <Text>
           Please try again
        </Text>

        <style jsx>{`
          div {
            
          }
        `}</style>
      </div>
  )
}

function SubmitResponseText(response) {
  return (
      response === 'error' ? <ErrorText/> : <SuccessText/>
  )
}

function subscribe(email, onSubscribeResponse) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) {
    onSubscribeResponse('Please enter a valid email')
    return;
  }

  axios.post('/api/signup', {
    email
  },)
  .then(function (response) {
    onSubscribeResponse(`success`)
  })
  .catch(function (error) {
    onSubscribeResponse('error')
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
                      <SubmitResponseText response={subscribeResponse}/>
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
    `}</style>
      </div>
  )
}