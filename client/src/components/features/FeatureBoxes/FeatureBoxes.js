import React from 'react';
import PropTypes from 'prop-types';
import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 col-xl-3 mb-3 mb-sm-2 mb-xl-0'>
          <FeatureBox className={styles.featureBox} icon={faTruck}>
            <h5>Free shipping</h5>
            <p>All orders</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-xl-3 mb-3 mb-sm-2 mb-xl-0'>
          <FeatureBox className={styles.featureBox} icon={faHeadphones}>
            <h5>24/7 customer</h5>
            <p>support</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-xl-3'>
          <FeatureBox className={styles.featureBox} icon={faReplyAll}>
            <h5>Money back</h5>
            <p>guarantee</p>
          </FeatureBox>
        </div>
        <div className='col-6 col-xl-3'>
          <FeatureBox className={styles.featureBox} icon={faBullhorn}>
            <h5>Member discount</h5>
            <p>First order</p>
          </FeatureBox>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
