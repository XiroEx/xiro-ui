import { Backdrop, Button, Main, Nav, Sidebar, Modal, useIsPWA, Input, LoadingWheel, Toast } from 'xiro-ui'
import { useEffect, useState } from 'react'
import './App.css'
import chats from './samples/chats.json'


function App() {

  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [text, setText] = useState('')
  const [toast, setToast] = useState('')
  const isApp = useIsPWA()

  const chatArray = JSON.parse(JSON.stringify(chats.chats[1].messages)).reverse()
  console.log(chatArray[0])

  const changeText = (e: any) => {
    setText(e.target.value)
  }

  const showToast = () => {
    if (text == toast) setToast('')
      setTimeout(() => setToast(text), 0)
  }


  return (
    <>

      <Nav styles={{boxShadow: undefined, borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
        <div style={{display: 'flex', width: '100%', alignItems: 'center', padding: '0 1rem'}}>
            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-start'}}>
              <button 
                onClick={() => setShow(!show)}
              >Menu Icon</button>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <h1>MyApp</h1>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
              <button>Profile Icon</button>
            </div>
        </div>
      </Nav>

      <Sidebar mobile right show={show} toggle={() => setShow(!show)}>
        <div style={{display: 'flex', flexDirection: 'column', padding: '1rem'}}>
          <button>Home</button>
          <button>Search</button>
          <button>Profile</button>
        </div>
      </Sidebar>

      <Main>
        <span style={{overflow: 'auto', display: 'flex', flexDirection: 'column-reverse', padding: '1rem',}}>
          
          {chatArray.map((message: any, index: number) => (
            <div key={index} style={{display: 'flex', flexDirection: message.user === 'me' ? 'row-reverse' : 'row', alignItems: 'center', margin: '0.5rem'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: message.user === 'me' ? 'flex-end' : 'flex-start'}}>
                <small>{message.user}</small>
                <p style={{backgroundColor: message.user === 'me' ? 'lightblue' : 'lightgreen', padding: '0.5rem', borderRadius: '0.5rem', margin: '0.25rem'}}>
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </span>
      </Main>

      <Nav bottom pwa={1}>
        <div style={{display: 'flex', width: '100%', alignItems: 'center', padding: `0 1rem`}}>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button>Home</Button>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button>Search</Button>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button>Profile</Button>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button>Search</Button>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button onClick={()=>setIsVisible(!isVisible)}>Profile</Button>
            </div>
        </div>
      </Nav>


      <Modal show={isVisible} onClose={() => {setIsVisible(!isVisible); setText('')}} 
        styles={{width: '300px', height: '300px', backgroundColor: 'lightblue'}}>
          <Input onChange={changeText} value={text}></Input>
        <Button onClick={showToast}>
          Click Me
        </Button>
      </Modal>

      <Toast message={toast} anchor="bottom" styles={{backgroundColor: 'lightblue'}} />

    </>
  )
}

export default App
