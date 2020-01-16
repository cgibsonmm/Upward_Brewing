import React from 'react'
import NavBar from '../components/Navbar'
import Map from '../components/GoogleMap'
import Background from '../images/background.jpg'
import Back from '../images/back2.jpg'

export default function Home() {
  return (
    <div style={styles.background}>
      <NavBar/>
      <ul style={styles.list}>
        <li style={styles.heading}>
        TAPROOM and KITCHEN
        </li>
        <li>MONDAY - THURSDAY - 5PM - 9PM</li>
        <li>
        FRIDAY - 4PM - 10PM
        </li>
        <li>
          SATURDAY - 1PM - 10PM
        </li>
        <li>
          SUNDAY - 1PM - 8PM
        </li>
        <li>
          (KITCHEN CLOSED ON WEDNESDAY)
        </li>
      </ul>
      <Map/>
    </div>
  )
}

const styles = {
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontWeight: 'bold'
  },
  background: {
    height: '100vh',
    background: `url(${Background}) center center fixed`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}
