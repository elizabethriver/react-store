import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = ({title, description, descriptionContent}) => (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name={description} content={descriptionContent} />
      </Helmet>
    </div>
  );

export default HelmetComponent;
