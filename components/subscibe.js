import {useState, Fragment} from 'react'
import Text from './text'
import {Button, Input, Icon} from 'antd'
import axios from 'axios'

const EmailSubmit = Input.Search;

function subscribe(email, onSuccess) {
  onSuccess(true)
  axios.post('/signup', {
    email
  },)
  .then(function (response) {
    console.log(response);
    onSuccess(true)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default ({}) => {
  const [canEnterEmail, showEmailInput] = useState(false)
  const [subscribeSuccessful, onSubscribeSuccesfull] = useState(false)
  return (
      <div className="root">
        {
          canEnterEmail ?
              <Fragment>
                {
                  subscribeSuccessful ?
                      <Text>SUCCESSFUL!</Text>
                      :
                      <EmailSubmit
                          placeholder="Email goes here"
                          enterButton="Submit"
                          size="large"
                          onSearch={email => subscribe(email,
                              onSubscribeSuccesfull)}
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