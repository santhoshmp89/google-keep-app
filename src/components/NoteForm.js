import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const NoteForm = (props) => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
       
            <Typography variant="headline" component="h4">
                {props.showTitle && <Input
                    placeholder="Title"
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    value={props.title}
                    onChange={e => props.handleTitle(e.target.value)}
                /> }
            </Typography>
            <Typography component="p">
                <Input
                    placeholder="Take a note ..."
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    value={props.takeANote}
                    onChange={e => props.handleNote(e.target.value)}
                    onClick={props.handleShowTitle}
                    onKeyDown={e => props.handleSubmit(e)}
                />
            </Typography>
        
      </Paper>
    </div>
  );
}

NoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoteForm);