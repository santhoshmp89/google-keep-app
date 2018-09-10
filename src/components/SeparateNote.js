import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {browserHistory} from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SeparateNote extends React.Component {
  constructor(props) {
    super(props)   
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <button onClick={this.goBack}>Back</button><br /><br />
            <Typography variant="headline" component="h2">
              {this.props.data[this.props.match.params.id].title}
            </Typography>
          
            <Typography component="p">
              {this.props.data[this.props.match.params.id].takeANote}   
            </Typography>

          </CardContent>        
        </Card>
      </div>
    );
  }
  
}

SeparateNote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeparateNote);