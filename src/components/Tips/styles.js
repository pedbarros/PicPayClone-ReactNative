import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  margin-top: 25px;
`

export const Options = styled.TouchableOpacity``;
export const Title = styled.Text``;
export const Img = styled.Image``;