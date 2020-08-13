
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';
import "./layout.css"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Document, Page } from 'react-pdf';

import file from './resume.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    
    paper: {
      padding: theme.spacing(2),
      height: '600px',

    },
  }));

  
const Resume= (props) => {
    const classes = useStyles();

   
    return (
    <div className={classes.root}>

        <Typography variant="h5" gutterBottom align ="center"   >
           <u>Resume</u> 
        </Typography>      
            <Document
        file={file}
        
      >
        <Page pageNumber={1}
        size="A4" style={{ backgroundColor: 'tomato' }} />
      </Document>

  
    </div>

    );
}

export default Resume
