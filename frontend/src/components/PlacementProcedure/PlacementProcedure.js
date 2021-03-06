import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../Animation/FadeIn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 25,
      overflowX: 'hidden',
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
    textAlign: 'center',
  },
  card: {
    fontSize: '1rem',
    color: 'black',
  },
}));

const IconStyle = {
  background: '#1d1642',
  color: 'white',
  fontWeight: 800,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: 'x-large',
};

const PlacementProcedureComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '30px' }} item xs={12}>
            <FadeInWhenVisible>
              <Paper className={classes.paper}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 30 }}
                >
                  Placement Procedure
                </Typography>
              </Paper>
            </FadeInWhenVisible>
          </Grid>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={1}
            >
              <p className={classes.card}>
                CDC sends invitation to companies and organizations. companies
                can also send us a mail at{' '}
                <a
                  href={
                    'https://mail.google.com/mail/?view=cm&fs=1&to=placement@iitj.ac.in'
                  }
                >
                  placement@iitj.ac.in
                </a>{' '}
                for same.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={2}
            >
              <p className={classes.card}>
                Companies participating in Annual Placement Meet at IIT Jodhpur
                will be required to register at the Career Development Cell
                (CDC) website
                <span> </span>
                <a href="/">(https://osp.iitj.ac.in/)</a>.
              </p>
              <div style={{ marginTop: 10, marginRight: 5 }}>
                <Link to="/recruiter-login" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" size="medium" color="primary">
                    Register Now
                  </Button>
                </Link>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={IconStyle}
              icon={3}
            >
              <p className={classes.card}>
                Fill out the JAF (Job Announcement Form)/ IAF (Intern
                Announcement Form) and send a soft copy of the same to the
                Placement Team. The CDC will verify the information provided by
                the company, following which a login ID and a password for the
                online CDC Portal will be provided to the companies.
              </p>
              <div style={{ marginTop: 10 }}>
                <Link to="/jaf" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    style={{ marginInlineEnd: 10 }}
                  >
                    JAF
                  </Button>
                </Link>
                <Link to="/iaf" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    style={{ marginInlineEnd: 10 }}
                  >
                    IAF
                  </Button>
                </Link>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={4}
            >
              <p className={classes.card}>
                The dates of the Pre Placement Talks (PPT) will be decided with
                the mutual consent of CDC and the Organisation.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={5}
            >
              <p className={classes.card}>
                Based on the PPT and profile of the job, students will be asked
                to apply for the job.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={6}
            >
              <p className={classes.card}>
                Placement Session starts in the month of October. Early
                recruitment offers will be entertained based on the students'
                response for the same. A suitable date and time slot will be
                provided to the company based on criteria like: Student
                Preference, The Job Profile, Pay Package offered, The growth
                prospects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={IconStyle}
              icon={7}
            >
              <p className={classes.card}>
                The company/organisation is required to furnish the results by
                the end of the day of recruitment.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarsIcon />}
            ></VerticalTimelineElement>
          </VerticalTimeline>
        </Grid>
      </Container>
    </>
  );
};

export default PlacementProcedureComponent;
