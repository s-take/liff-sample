import React from 'react'
import liff from '@line/liff'
import './App.css'

function App() {
  let isLoggedIn = false
  try {
    isLoggedIn = liff.isLoggedIn()
  } catch (e) {
    console.log(e)
  }
  const sendMessage = () => {
    liff
      .sendMessages([
        {
          // メッセージを送信する
          type: 'text',
          text: "You've successfully sent a message! Hooray!",
        },
      ])
      .then(function () {
        window.alert('Message sent')
      })
      .catch(function (error) {
        window.alert('Error sending message: ' + error)
      })
  }

  /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
    liff
      .getProfile() // ユーザ情報を取得する
      .then((profile) => {
        const userId: string = profile.userId
        const displayName: string = profile.displayName
        alert(`Name: ${displayName}, userId: ${userId}`)
      })
      .catch(function (error) {
        window.alert('Error sending message: ' + error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React LIFF Sample</p>
        {isLoggedIn ? (
          <>
            <button className="button" onClick={sendMessage}>
              send message
            </button>
            <button className="button" onClick={getUserInfo}>
              show user info
            </button>
          </>
        ) : (
          <p>please login</p>
        )}
      </header>
    </div>
  )
}

export default App
