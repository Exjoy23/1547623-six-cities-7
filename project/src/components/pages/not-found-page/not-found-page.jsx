import React from 'react';

import Header from '../../header/header';

function NotFoundPage() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default NotFoundPage;
