import React from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, Value, Bold, EyeButton, Info, Actions, Action, ActionLabel} from './styles';

export default function Wallet () {
  return (
    <Wrapper>
      <Header colors={['#52E78B', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo Picpay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>
          
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={26} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
          </Actions>

        </HeaderContainer>
      </Header>
    </Wrapper>
  )
}

