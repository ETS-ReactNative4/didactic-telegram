import styled from 'styled-components/native'

export const Image = styled.Image`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '250px')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const ProfileImage = styled(Image)`
  border-radius: 25px;
`
