import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Logo from '../images/logo.jpg'

const useStyle = makeStyles({
  heading:{
    fontFamily: 'lobster',
    padding: 30
  }
})

export default function Navbar() {
  const classes = useStyle()
  return (
    <Container>
      <nav style={styles.navbar}>
        <Typography className={classes.heading}variant="h3">
          Catskill Mountain
        </Typography>
      </nav>
    </Container>
  )
}

const styles = {
  logo: {
    height: '40px',
    padding: '30px'
  },
  navbar:{
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'lobster',
    fontSize: '24px'
  }
}
