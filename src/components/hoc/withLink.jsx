import React from 'react';
import { Link } from 'react-router-dom';

const withLink = (WrappedComponent) => (props) => {
  const { video } = props;
  const newProps = {
    ...props,
    video: {
      ...video,
      title: (
        <Link to={{ pathname: `/${video.id}`, autoplay: true }}>
          {video.title}
        </Link>
      ),
    },
  };

  return <WrappedComponent {...newProps} />;
};

export default withLink;
