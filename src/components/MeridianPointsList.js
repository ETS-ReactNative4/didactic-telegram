import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { FlatList, SafeAreaView } from './atoms'
import { MeridianPointListItem } from './molecules'
import { ThemeProvider } from 'styled-components'

const MeridianPointsList = ({ theme, route, navigation }) => {
  const { meridianPointsArray } = route.params

  const handlePointItemPress = (pointID, headerName) => {
    navigation.navigate('Point Details', {
      pointID,
      headerName,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={meridianPointsArray}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
        renderItem={({ item }) => (
          // pass in a callback to navigate to ea MeridianPointsList page
          <MeridianPointListItem
            // TODO: this is where to customize the language for the whatever
            title={item.english}
            chinese={item.name}
            pointID={item.pointID}
            points={item.points || []}
            handlePointItemPress={handlePointItemPress}
          />
        )}
        keyExtractor={(item) => item.pointID}
      />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointsList)

MeridianPointsList.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

// {
//   "chinese": "手太阴肺经",
//   "english": "Lung",
//   "id": "LU",
//   "korean": "수태음폐경",
//   "points": [
//     {
//       "english": "Middle Palace",
//       "id": "LU-1",
//       "korean": "jung bu 중부",
//       "name": "中府",
//       "pinyin": "zhōng fǔ",
//       "romaji": "chū fu",
//       "transliteration": "Zhongfu",
//       "vietnamese": "Trung phủ"
//   ],
//   "title": "Lung",
//   "viet": "Thủ thái âm phế"
// }
