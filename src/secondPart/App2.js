import React from 'react';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';
import FaceBook from './FaceBook';

function App2() {
  return (
    <div>
      <LikeButton />
      <LikeButton />
      <hr />
      <ClickablePicture
        img="../img/persons/maxence.png"
        imgClicked="../img/persons/maxence-glasses.png"
      />
      <hr />
      <Dice />
      <hr />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <hr />
      <NumbersTable limit={12} />
      <hr />
      <FaceBook />
    </div>
  );
}

export default App2;