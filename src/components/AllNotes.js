import React, { Component, Fragment} from 'react';
import Header from './Header';
import NoteForm from './NoteForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Note from './Note';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import SeparateNote from './SeparateNote';
import Notes from './Notes';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class AllNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            takeANote: '',
            cardLists: [],
            showTitle: false
        }
    }

    handleTitle = (val) => {
        this.setState({
            title: val
        })
    }

    handleNote = (val) => {
        this.setState({
            takeANote: val
        })
    }

    handleShowTitle = () => {
        this.setState({
            showTitle: !this.state.showTitle
        })
    }

    handleSubmit = (e) => { 
        if(e.keyCode == 13) {
            this.setState({
                cardLists: [...this.state.cardLists, {title: this.state.title, takeANote: this.state.takeANote}],
                title: '',
                takeANote: '',
                showTitle: false
            })
        }        
    }

    render() {
        const { classes } = this.props;
        return(
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <br />
                    <br /> 
                    <Route path='/' exact render={(props) => {
                        return <Notes {...props} 
                            title={this.state.title}
                            takeANote={this.state.takeANote}
                            showTitle={this.state.showTitle}
                            cardLists={this.state.cardLists}
                            handleTitle={this.handleTitle}
                            handleNote={this.handleNote}
                            handleSubmit={this.handleSubmit}
                            handleShowTitle={this.handleShowTitle}
                            classes={classes}
                            />
                    }} />
                    <Route path='/card/:id' render={(props) => {
                        return <SeparateNote {...props} data={this.state.cardLists} />
                    }} />
                
                </Fragment>
            </BrowserRouter>    
        )
    }
}

AllNotes.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AllNotes);