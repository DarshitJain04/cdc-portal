import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import instance from '../../api/axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
  },
  av: {
    padding: theme.spacing(1),
  },
}));

function getDate(date) {
  date = new Date(date);
  return date.toDateString();
}

function ViewAdvertisement(props) {
  const classes = useStyles();
  const [data, setdata] = React.useState('');
  const id = props.match.params.id;

  React.useEffect(() => {
    function getdata() {
      instance
        .get('student/get_ad/' + id)
        .then((res) => {
          console.log(res.data);
          let adt = res.data;
          adt.name = adt.company.name;
          adt.url = adt.company.url;
          let p = '';
          adt.eligible_program_branch.forEach((program) => {
            p = p + ' ' + program.name;
          });
          adt.program = p;
          setdata(adt);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response);
            if (error.response.status === 400) {
              window.alert('Offer Doesnot Exist');
            }
          }
        });
    }
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={2}>
      <Paper className={classes.paper}>
        <React.Fragment>
          <Typography
            component="h1"
            variant="h5"
            color="primary"
            style={{ margin: 'auto' }}
          >
            {data.type} Offer
          </Typography>
          <Typography
            style={{ margin: '20px', fontSize: '1rem', color: 'red' }}
          >
            Expires on : {getDate(data.expiry)}
          </Typography>
        </React.Fragment>
      </Paper>
      <Grid item xs={12} sm={7}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6} style={{ paddingLeft: '10%' }}>
                <div className={classes.av}>Company</div>
                <div className={classes.av}>Designation</div>
                <div className={classes.av}>Description</div>
                <div className={classes.av}>Joining Date</div>
                <div className={classes.av}>Job Location</div>
                <br />
              </Grid>
              <Grid item sm={6}>
                <div className={classes.av}>: {data.name}</div>
                <div className={classes.av}>: {data.designation}</div>
                <div className={classes.av}>: {data.description}</div>
                <div className={classes.av}>
                  : {getDate(data.tentative_join_date)}
                </div>
                <div className={classes.av}>
                  : {data.tentative_job_location}
                </div>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Package Detials
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6} style={{ paddingLeft: '10%' }}>
                <div className={classes.av}>CTC</div>
                <div className={classes.av}>Gross Salary</div>
                <div className={classes.av}>Bonus</div>
                <div className={classes.av}>Bond</div>
                <div className={classes.av}>Bond Details</div>
                <br />
              </Grid>
              <Grid item sm={6}>
                <div className={classes.av}>: {data.ctc}</div>
                <div className={classes.av}>: {data.gross_salary}</div>
                <div className={classes.av}>: {data.bonus}</div>
                <div className={classes.av}>
                  : {data.bond ? 'Applicable' : 'Not Applicable'}
                </div>
                <div className={classes.av}>: {data.bond_details}</div>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Eligibility
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6} style={{ paddingLeft: '2%' }}>
                <div className={classes.av}>Eligible Programs and Branches</div>
                <div className={classes.av}>Minimum CGPA</div>
                <br />
              </Grid>
              <Grid item sm={6}>
                <div className={classes.av}>: {data.program}</div>
                <div className={classes.av}>: {data.min_gpa}</div>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Selection Process
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6} style={{ paddingLeft: '2%' }}>
                <div className={classes.av}>Resume</div>
                <div className={classes.av}>Resume Shortlist Criteria</div>
                <div className={classes.av}>Aptitude Test</div>
                <div className={classes.av}>Group Discussion</div>
                <div className={classes.av}>Number of Technical Rounds</div>
                <div className={classes.av}>Number of Technical Interviews</div>
                <div className={classes.av}>Number of HR Rounds</div>
                <div className={classes.av}>Medical Test</div>
                <br />
              </Grid>
              <Grid item sm={6}>
                <div className={classes.av}>
                  : {data.resume_required ? 'Required' : 'Not Required'}
                </div>
                <div className={classes.av}>
                  : {data.resume_shortlist_criteria}
                </div>
                <div className={classes.av}>
                  : {data.aptitude_test_required ? 'Present' : 'Not Present'}
                </div>
                <div className={classes.av}>
                  : {data.group_discussion_required ? 'Present' : 'Not Present'}
                </div>
                <div className={classes.av}>
                  : {data.number_of_technical_tests}
                </div>
                <div className={classes.av}>
                  : {data.number_of_technical_interviews}
                </div>
                <div className={classes.av}>: {data.number_of_hr_rounds}</div>
                <div className={classes.av}>
                  : {data.medical_test_required ? 'Required' : 'Not Required'}
                </div>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ViewAdvertisement;
