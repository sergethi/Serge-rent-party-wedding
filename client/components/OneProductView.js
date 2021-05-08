import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import CardMedia from '@material-ui/core/CardMedia'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(120),
      height: theme.spacing(16)
    }
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  media: {
    height: 0,
    paddingTop: '86.25%' // 16:9
  },
  expansion: {
    marginBottom: '10px'
  }
}))

export default function OneProductView(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{marginBottom: '100px'}}>
        <Paper elevation={2}>
          <Grid container spacing={4} style={{marginTop: 20}}>
            <Grid item className={classes.grid} xs={5}>
              <CardMedia
                className={classes.media}
                image={props.product.imageURL}
                title="Paella dish"
              />
            </Grid>
            <Grid item className={classes.grid} xs={6}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {props.product.name}
              </Typography>
              <Typography
                variant="h5"
                color="textPrimary"
                gutterBottom
                style={{color: 'green'}}
              >
                ${props.product.price}
              </Typography>

              <ExpansionPanel className={classes.expansion}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Description
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>{props.product.description}</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <Tooltip title="ADD TO CART">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => this.handleClick(product)}
                >
                  ADD TO <AddShoppingCartIcon />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}
