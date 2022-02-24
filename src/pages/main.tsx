import React from 'react'
import { Container, Button, Grid } from '@mui/material'
import liff from '@line/liff'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'

export default function Main() {
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<MessageIcon />}
            onClick={() => {
              sendMessage()
            }}>
            send message
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<PersonIcon />}
            onClick={() => {
              getUserInfo()
            }}>
            show user info
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
