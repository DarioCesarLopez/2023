import React from 'react';

import { ImageList } from '../ImageList/ImageList';

const Content = ({title}) => {
  return (
    <main>
      <h1>{title}</h1>
      <p>This is the {title} page that show a list of photos.</p>
      <ImageList/>
    </main>
  )
}

export default Content