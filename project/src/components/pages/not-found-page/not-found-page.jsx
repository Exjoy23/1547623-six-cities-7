import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';

function NotFoundPage() {
  return (
    <>
      <h1
        style={{
          fontSize: '50px',
          textAlign: 'center',
          borderBottom: '5px solid #383838',
          margin: '0',
          marginBottom: '20px',
          padding: '30px',
        }}
      >
        404 Not Found
      </h1>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          width: '300px',
          fontSize: '30px',
          fontWeight: '700',
          padding: '30px',
          margin: '0 auto',
        }}
        to={AppRoute.MAIN}
      >
        Main Page
      </Link>
    </>
  );
}

export default NotFoundPage;
