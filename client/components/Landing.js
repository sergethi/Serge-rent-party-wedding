import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  box: {
    '@media (max-width: 600px)': {
      width: '50%',
      marginLeft: '30px',
      marginTop: '2px'
    }
  }
})

function Landing() {
  const classes = useStyles()

  return (
    <div className="landing-page">
      <div className="box1">
        <p className="landing-paragraph">
          The Party <br />
          Start Right Here
        </p>

        <Box mt={15} ml={11} fS={50} className={classes.box}>
          <Button
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
            disableElevation
            style={{
              backgroundColor: 'orange',
              fontSize: '28px',
              color: 'black'
            }}
            href="/home"
          >
            Learn more
          </Button>
        </Box>
      </div>

      <div className="box2" />
    </div>
  )
}

export default Landing
