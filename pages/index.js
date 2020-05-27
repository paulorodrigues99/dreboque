import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Index() {
    const classes = useStyles();
    return (
        
        <Container maxWidth="xl">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title} color="secundary">
                        Danilo reboque
                    </Typography>
                    <Link href="/about" color="secondary">
                        Sobre
                    </Link>
                </Toolbar>
            </AppBar>
            <Box my={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={classes.paper} color="secundary">
                                Precisando de um reboque ? 
                            </Typography>
                            <Typography variant="h3" className={classes.paper} color="secundary">
                                Danilo Reboque!
                            </Typography>
                            <Button
                             href="https://api.whatsapp.com/send?1=pt_BR&phone=558188136496&text=Oi Danilo, to precisando de você"
                             color="default"
                            >
                            Enviar uma mensagem no whatsapp
                            </Button>

                            <Typography variant="h6" className={classes.paper} color="secundary">
                                Temos todo tipo de equipamentos pra qualquer serviços
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Copyright />
            </Box>
        </Container>
    );
}
