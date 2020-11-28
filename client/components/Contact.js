import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import axios from 'axios'
import {FaMapMarkedAlt, FaEnvelopeOpenText, FaMobileAlt} from 'react-icons/fa'

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  area: {width: '50ch', marginBottom: '6ch'},
  name: {width: '37ch', marginBottom: '6ch'},
  email: {width: '37ch', marginBottom: '6ch'},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },
  cssLabel: {
    color: 'white'
  },

  button: {color: 'red', backgroundColor: 'black'},

  input: {
    color: 'white'
  }
})

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      message: '',
      sent: false
    }
    this.handleFullName = this.handleFullName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
  }

  //handle inputs
  handleFullName = event => {
    this.setState({fullname: event.target.value})
  }

  handleEmail = event => {
    this.setState({email: event.target.value})
  }

  handleMessage = event => {
    this.setState({message: event.target.value})
  }

  //handle submit

  handleSubmit = event => {
    event.preventDefault()

    let data = {
      fullname: this.state.fullname,
      email: this.state.email,
      message: this.state.message
    }
    console.log('state', this.state)

    axios
      .post('/api/form', data)
      // console.log("DATA", data)
      .then(res => {
        this.setState({sent: true}, this.resetForm)
      })
      .catch(() => {
        console.log('sorry, message failed to sent')
      })
  }

  //reset form input
  resetForm = () => {
    this.setState({
      fullname: '',
      email: '',
      message: ''
    })
    setTimeout(() => {
      this.setState({sent: false})
    }, 4000)
  }

  render() {
    const {classes} = this.props
    return (
      <section className="contact-main">
        <div className="hero">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-flex-container">
          <div className="left-container">
            <div className="form-address">
              <a>
                <FaMapMarkedAlt />
              </a>
              <h2>Address</h2>
              <br />
              <p>8381 Longbranch St.Hollis, NY 11423</p>
            </div>

            <div className="form-call">
              <a>
                <FaMobileAlt />
              </a>
              <h2>Call Us</h2>
              <br />
              <p>(887) 201-1375</p>
            </div>

            <div className="form-envelop">
              <a>
                <FaEnvelopeOpenText />
              </a>
              <h2>General Support</h2>
              <br />
              <p>mjewell@outlook.com</p>
            </div>
          </div>

          <form
            onSubmit={this.handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <TextField
              className={classes.name}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input,
                inputMode: 'numeric'
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel
                }
              }}
              value={this.state.fullname}
              onChange={this.handleFullName}
            />
            <br />
            <TextField
              className={classes.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input,
                inputMode: 'numeric'
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel
                }
              }}
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <br />
            <TextField
              className={classes.area}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,

                  notchedOutline: classes.notchedOutline
                },
                inputMode: 'numeric',
                className: classes.input
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel
                }
              }}
              value={this.state.message}
              onChange={this.handleMessage}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      </section>
    )
  }
}

export default withStyles(styles)(Contact)

{
  /* <h1>Contact Us </h1>
     <form  onSubmit={this.handleSubmit}  className={classes.root} noValidate autoComplete="off" 
      
     >
    
    
   </form> */
}
