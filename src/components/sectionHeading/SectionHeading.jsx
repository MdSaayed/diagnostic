import React from 'react';

const SectionHeading = ({ heading, desc, textStyle }) => {
  const styles = {
    textAlign: textStyle ? textStyle : 'left',
  };

  return (
    <div style={styles}>
      <h2 className='text-4xl font-bold mb-3' dangerouslySetInnerHTML={{ __html: heading }} />
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export default SectionHeading;
