import React from 'react';
// import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {  Container, Details, Title, Description, Img } from './styles'
import img13 from '../../images/13.png';


export default function Banner () {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças</Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}