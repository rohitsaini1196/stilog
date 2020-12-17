import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Topics from './Topics';
import Category from './Category';
import Blog from './Main-Page/Blog';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Layout() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={2}>
                        <Topics />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Blog />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Category />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Layout
