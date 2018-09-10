import React, { Component, Fragment} from 'react';
import NoteForm from './NoteForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Note from './Note';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import SeparateNote from './SeparateNote';

export default class Notes extends Component {
    render(){
        return(
            <div className={this.props.classes.root}>
                                  
                    <Grid container spacing={12} justify="center">                    
                        <Grid item xs={6}>
                            <NoteForm 
                                title={this.props.title}
                                takeANote={this.props.takeANote}
                                showTitle={this.props.showTitle}
                                handleTitle={this.props.handleTitle}
                                handleNote={this.props.handleNote}
                                handleSubmit={this.props.handleSubmit}
                                handleShowTitle={this.props.handleShowTitle}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={16} justify="center">
                        {
                            this.props.cardLists.map((card, index) => {
                            return (<Grid item xs={3}>
                                    <NavLink to={`/card/${index}`}><Note
                                        title={card.title}
                                        takeANote={card.takeANote}
                                    /></NavLink>
                                </Grid>)
                            })
                        }     
                    </Grid>

                </div>
        )
    }
}

