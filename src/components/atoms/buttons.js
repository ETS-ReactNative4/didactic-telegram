import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => (props.pd ? props.pd : '4px 6px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const MeridianSquare = styled(Button)`
  border-radius: 18px;
  elevation: 4;
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
`

export const TransparentButton = styled(Button)`
  background-color: transparent;
`

export const DisabledButton = styled(Button)`
  background-color: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.LIGHT_GREY};
`

export const ListItemButton = styled(Button)`
  width: 97.5%;
  margin: 6px;
  padding: 16px 12px;
`
