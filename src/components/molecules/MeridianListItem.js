import React from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Row, Button, ListItem, ButtonText, EmptySpace } from '../atoms'

const MeridianListItemContainer = styled(Button)``

function MeridianListItemComponent({
  meridianID,
  title,
  points,
  goToPointsList,
  chinese,
  theme,
}) {
  const handlePress = () => {
    // navigation to Meridian Points, passing in the Meridian Name and the points
    // associated with the Meridian in an array form

    goToPointsList(title, points, `${title} ${chinese}`, meridianID)
  }

  return (
    <ThemeProvider theme={theme}>
      <MeridianListItemContainer onPress={handlePress}>
        <ListItem>
          <ButtonText mg="0 4px 0 0">{meridianID}:</ButtonText>
          <ButtonText>{title}</ButtonText>
          <EmptySpace />
          <ButtonText>{chinese}</ButtonText>
        </ListItem>
      </MeridianListItemContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)

MeridianListItemComponent.propTypes = {
  pointID: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
  chinese: PropTypes.string,
  goToPointsList: PropTypes.func,
}
