import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { color } from '@material-ui/core/colors';

import Login from './login';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Menu extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position='static' style={{ backgroundColor: '#045FB4', color: '#FFFFFF' }}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label='Institucional' />
                        <Tab label='Serviços' />
                        <Tab label='Acompanhe sua solicitação' />
                        <Tab label='Login' />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer>Institucional</TabContainer>}
                {value === 1 && <TabContainer>Serviços</TabContainer>}
                {value === 2 && <TabContainer>Acompanhe sua solicitação</TabContainer>}
                {value === 3 && <TabContainer><Login /></TabContainer>}
            </div>
        );
    }
}

//validacao
Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);