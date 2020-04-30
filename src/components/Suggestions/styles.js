import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  background: #1e222b;
  height: 130px;
`;

export const Options = styled.TouchableOpacity``
export const Img = styled.Image``
export const Label = styled.Text``