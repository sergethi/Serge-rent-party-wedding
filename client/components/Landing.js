import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

function Landing() {
  return (
    <div className="landing-page">
      <div className="box1">
        <p className="landing-paragraph">
          The Party <br />
          <p>Start Right Here</p>{' '}
        </p>

        <Box mt={15} ml={11} fS={50}>
          <Button
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
