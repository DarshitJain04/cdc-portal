import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Home from '../components/StudentDashboard/Home';
import UploadResume from '../components/StudentDashboard/UplaodResume';
import Offers from '../components/StudentDashboard/Offers';
import StudentLogin from './StudentLogin';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import instance from '../api/axios';
import {
  mainListItems,
  secondaryListItems,
} from '../components/StudentDashboard/MenuItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: '#f0f0f0',
    color: '#000',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [alert, setalert] = React.useState([]);
  const [show, setshow] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    instance
      .get('main/alerts/')
      .then((res) => {
        setalert(res.data.StudentDashboard);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={classes.root}>
      {show && alert.length !== 0 ? (
        <Grid container style={{ padding: '10px 100px', background: alert[1] }}>
          <CancelIcon onClick={() => setshow(false)} />
          <div style={{ margin: 'auto' }}>{alert[0]}</div>
        </Grid>
      ) : (
        <div />
      )}
      <CssBaseline />
      <Drawer
        variant={window.innerWidth >= 1350 ? 'permanent' : 'temporary'}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Router>
            <Switch>
              <Route path="/student-dashboard/" exact component={Home} />
              <Route
                path="/student-dashboard/profile"
                exact
                component={StudentLogin}
              />
              <Route
                path="/student-dashboard/UploadResume"
                exact
                component={UploadResume}
              />
              <Route
                path="/student-dashboard/offers"
                exact
                component={Offers}
              />
            </Switch>
          </Router>
        </Container>
      </main>
    </div>
  );
}
