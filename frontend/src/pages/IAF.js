import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from '../styles/pages/IAF.module.css';
import { getLink } from '../utils/getLink';

const IAF = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    instance
      .get('main/navbar_suboptions?search=Internship Announcement Form')
      .then((res) => {
        setData(res.data[0]);
      })
      .then(setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Paper className={styles.heading} elevation={2}>
            <DescriptionIcon
              fontSize="inherit"
              style={{ margin: '0 0.3rem', padding: '0' }}
            />
            IAF
          </Paper>
          <Paper elevation={2} className={styles.iaf}>
            <div className={styles.download}>
              <a download href={getLink(data['file'])}>
                Click here to download the Internship Announcement Form{' '}
                <i className="fa fa-external-link-alt"></i>
              </a>
            </div>
            <div className={styles.iframe}>
              <iframe
                src={`https://docs.google.com/gview?url=${getLink(
                  data['file']
                )}&embedded=true#view=fitH`}
                title="Internship Announcement Form"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Paper>
        </>
      )}
    </div>
  );
};

export default IAF;
