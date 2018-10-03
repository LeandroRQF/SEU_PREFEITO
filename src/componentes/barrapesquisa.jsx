import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Layout from './layout.css';
import { Button } from '@material-ui/core';

const styles = theme => ({
    pesquisa: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#151515',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },

    pesquisaIcone: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },

    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

function BarraPesquisa(props) {
    const { classes } = props;

    return (
        <div className='root'>
            <div className='header_class_0' style={{ backgroundColor: '#151515', color: '#FF8000' }}>_</div>

            <AppBar position='static' style={{ backgroundColor: '#FF8000' }}>
                <Toolbar>
                    <div className='grow' />
                    
                    <div className={classes.pesquisa}>
                        <div className={classes.pesquisaIcone}>
                            <SearchIcon />                            
                        </div>                        

                        <Input
                            placeholder='Pesquisar...'
                            disableUnderline
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />                        
                    </div>

                    <Button>Entrar</Button>

                </Toolbar>                
            </AppBar>
        </div>
    );
}

//validacao
BarraPesquisa.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarraPesquisa);