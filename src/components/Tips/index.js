import React from 'react';

import { Container, Options, Title, Img } from './styles';

import img8 from '../../images/08.png';

export default function Tips() {
  return (
    <Container>
      <Options>
        <Title>Pague suas contas sem sair de casa</Title>

        <Img source={img8} />
      </Options>
    </Container>
  );
}