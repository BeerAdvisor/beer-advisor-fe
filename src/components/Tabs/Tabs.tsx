import React, { ChangeEvent } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  root: {
    // display: 'flex',
    color: theme.palette.primary.light,
    minWidth: 300,
    maxWidth: 500,
  },
});

interface FullWidthTabsProps {
  classes: any;
  children: any;
}

class FullWidthTabs extends React.Component<FullWidthTabsProps> {
  state = {
    value: 0,
  };

  handleChange = (event: ChangeEvent<{}>, value: string) => {
    this.setState({ value });
  };

  handleChangeIndex = (index: string) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            fullWidth={true}
          >
            <Tab label="Find a beer" />
            <Tab label="Find a bar" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
         {children}
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs);