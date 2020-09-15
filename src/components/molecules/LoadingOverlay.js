import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Text, OverLay, LoadingCircle } from '../atoms'

function LoadingOverlayComponent({ theme, loadingMessage }) {
  return (
    <ThemeProvider theme={theme}>
      <OverLay>
        <LoadingCircle size="large" color={theme.LOADING_CIRCLE_COLOR} />
        {loadingMessage ? <Text>{loadingMessage}</Text> : null}
      </OverLay>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const LoadingOverlay = connect(mapStateToProps)(LoadingOverlayComponent)

LoadingOverlayComponent.propTypes = {
  loadingMessage: PropTypes.string,
}
