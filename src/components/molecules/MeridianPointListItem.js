import React from 'react'
import { CodeText, Text, Button, ListItem, Row } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const MeridianPointListItemContainer = styled(Button)``

export function MeridianPointListItem({ id, title, chinese }) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <MeridianPointListItemContainer>
      <ListItem>
        <Row>
          <CodeText>{id}:</CodeText>
          <Text>{title}</Text>
        </Row>
        <Text>{chinese}</Text>
      </ListItem>
    </MeridianPointListItemContainer>
  )
}

MeridianPointListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  chinese: PropTypes.string,
}
