import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_TEXT = 'Something went wrong. Please try again later!';

function Alert({ text = DEFAULT_TEXT }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {visible && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#4481c3',
            textAlign: 'center',
            verticalAlign: 'center',
            color: 'white',
            zIndex: 1000,
          }}
        >
          <div style={{ padding: 5 }}>{text}</div>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
};

export default Alert;
