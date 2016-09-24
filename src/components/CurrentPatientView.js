import React, { PropTypes } from 'react';

const CurrentPatientView = ({ data }) => {
  console.log('currentPatient data: ', data);
  if (data === null) {
    return <div>No data</div>;
  }
  return (
    <div className="col sm12 l9">
      <div><img className="avatar" src={data.Image} /></div>
      <div>{data.firstName} {data.lastName}</div>
    </div>
  );
};

CurrentPatientView.propTypes = {
  currentPatient: PropTypes.object,
};

export default CurrentPatientView;
