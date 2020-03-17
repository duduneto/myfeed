// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';

// import Internal Components
import { UseLink, useStyle } from '.';

// ------------------------------
// #endregion

const formatData = (data, numColumns) => {
  // #region [useMorfos]
  // ------------------------------

  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;

  // #endregion
  // ------------------------------
};

const numColumns = 3;

export default function UseGallery(props) {
  // #region [useMorfos]
  // ------------------------------

  let renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[useStyle.item, useStyle.itemInvisible]} />;
    }
    return (
      <View style={useStyle.item}>
        <UseLink to={props.linkTo}>
          <TouchableOpacity onPress={() => props.function(item.key)}>
            <Image
              style={props.styleImg}
              resizeMode={'cover'}
              source={{
                uri: item.key
              }}
            />
          </TouchableOpacity>
        </UseLink>
      </View>
    );
  };

  return (
    <FlatList
      data={formatData(props.data, numColumns)}
      style={useStyle.container}
      renderItem={renderItem}
      numColumns={numColumns}
    />
  );

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  import { UseGallery } from './useMorfos';

  // #region [setLogic]
  // ------------------------------


  // Called when component render
    <UseGallery
        linkTo={'myprofile'}
        styleImg={useStyle.galleryImg}
        function={changeImg}
        data={screenContent.imgs}
    />

  // ------------------------------
  #endregion

*/
