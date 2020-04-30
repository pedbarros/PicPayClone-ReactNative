import React from 'react';
import { Container, Options, Img, Label } from './styles';

import img1 from '../../images/01.png';

export default function Suggestions() {
  return (
    <Container horizontal>
      <Options>
        <Img source={img1} />
        <Label>Doações</Label>
      </Options>
    </Container>
  );
}