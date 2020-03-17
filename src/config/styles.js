import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

//FUNÇÕES P/ CAPTURAR TAMANHO EM DP DA TELA
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/* ********************************
 **************************** COLORS
 ******************************** */

const primaryColor = '#2A576B';
const secondaryColor = '#113646';
const tertiaryColor = '#C0FF00';
const inverseColor = '#eee';
const lightGray = '#f6f6f6';
const mediumGray = '#ebebeb';
const gray = '#888';

/* *********************************
 ******* SIZES / MARGINS / POSITIONS
 ******************************** */
const posRelative = {
  position: 'relative'
};
// PADDINGS & MARGINS
const pad10 = {
  padding: 10
};
const pad20 = {
  padding: 20
};
const noMg = {
  margin: 0
};
const mgB20 = {
  marginBottom: 20
};
const mgL5 = {
  marginLeft: 5
};
// FLEXBOX
const flexRow = {
  flexDirection: 'row',
  alignItems: 'center'
};

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
};

const flexBetween = {
  alignItems: 'center',
  justifyContent: 'space-between'
};

const flexStart = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start'
};
const flexEnd = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-end'
};

const flexWrap = {
  flexWrap: 'wrap'
};

const flex1 = {
  flex: 1
};
const flex2 = {
  flex: 2
};
const flex3 = {
  flex: 3
};
const flex4 = {
  flex: 4
};

// STYLES AND FX
const linkNone = {
  textDecoration: 'none'
};
const shadowLess = {
  // web shadow
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 1 },
  // android shadow
  elevation: 4
};
const shadowMore = {
  // web shadow
  shadowColor: '#000',
  shadowOpacity: 0.4,
  shadowRadius: 14,
  shadowOffset: { width: 3, height: 6 },
  // android shadow
  elevation: 14
};
const radiusLess = {
  borderRadius: 8
};
const radiusMore = {
  borderRadius: 14
};
const btn = {
  ...shadowLess,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center'
};

// TEXT AND FONTS STYLES
const txBase = {
  fontSize: 16
};
const txTitleCard = {
  fontSize: 18,
  color: '#444'
};
const txSubTitleCard = {
  fontSize: 13,
  color: gray
};
const txTitleProfile = {
  fontSize: 16,
  fontWeight: 'bold',
  color: primaryColor
};
const txTitleScreen = {
  color: inverseColor,
  fontSize: 20
};

const txCenter = {
  textAlign: 'center'
};

/* ********************************
 **************** SCREEN COMPONENTS
 **********************************/
const Styles = StyleSheet.create({
  posRelative,
  btn,
  flex1,
  flex2,
  flex3,
  flex4,
  pad10,
  pad20,
  noMg,
  mgB20,
  mgL5,
  flexRow,
  flexStart,
  flexCenter,
  flexBetween,
  flexEnd,
  txBase,
  txTitleCard,
  txSubTitleCard,
  radiusLess,
  radiusMore,
  txTitleScreen,
  txTitleProfile,
  flexWrap,
  linkNone,
  txCenter,

  flexMaster: {
    flex: 1,
    overflow: 'hidden'
  },
  navbarView: {
    backgroundColor: primaryColor,
    height: 60,
    ...flexRow,
    ...flexBetween,
    ...shadowMore
  },
  longBar: {
    backgroundColor: primaryColor,
    position: 'absolute',
    ...shadowMore,
    width: '100%',
    height: 60,
    left: 0,
    top: 0
  },
  searchBar: {
    backgroundColor: lightGray,
    height: 60,
    ...flexRow,
    ...flexBetween,
    ...shadowMore
  },
  titlePageLeft: {
    width: '100%',
    ...txTitleScreen,
    textAlign: 'left',
    color: '#000',
    marginLeft: 10
  },
  leftBox: {
    flex: 1,
    ...flexCenter,
    height: 50
  },

  centerBox: {
    flex: 8,
    ...flexCenter,
    height: 50
  },

  rightBox: {
    flex: 1,
    ...flexCenter,
    height: 50
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusLess,
    ...shadowLess,
    ...pad20
  },
  cardMask: {
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    ...radiusLess,
    ...shadowLess
  },
  dialogueBox: {
    marginBottom: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    ...shadowMore
  },
  colView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...flex1
  },

  // BTN PRIMARY
  btnPrimary: {
    backgroundColor: primaryColor,
    ...btn
  },
  txInverseColor: {
    color: inverseColor,
    ...txBase
  },
  bgInverseColor: {
    backgroundColor: inverseColor
  },

  // BTN SECONDARY
  btnSecondary: {
    backgroundColor: secondaryColor,
    ...btn
  },
  txBtnSecondary: {
    ...txBase,
    ...btn
  },

  // BTN SIZES
  btnXSmall: {
    width: 60,
    height: 20
  },
  btnSmall: {
    width: 100,
    height: 30
  },
  btnMedium: {
    width: 150,
    height: 40
  },
  btnLarge: {
    width: 200,
    height: 50
  },

  // INPUTS / RADIOS / CHECKS
  input: {
    borderWidth: 2,
    ...radiusLess,
    borderColor: mediumGray,
    padding: 8
  },
  picker: {
    // maxWidth: widthPercentageToDP('80%'),
    borderWidth: 2,
    borderColor: mediumGray,
    ...radiusLess,
    height: 40,
    padding: 0,
    margin: 0
  },
  line: {
    backgroundColor: mediumGray,
    marginLeft: 5,
    height: 1,
    flex: 1
  },
  check: {},
  itemList: {
    ...flexRow,
    ...flexBetween,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },
  itemAccordion: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },
  badge: {
    borderWidth: 1,
    ...radiusLess,
    borderColor: '#ccc',
    backgroundColor: mediumGray,
    ...pad10
  },

  // FOOTER
  tabFooter: {
    ...flexRow,
    ...flexBetween,
    backgroundColor: lightGray,
    paddingHorizontal: 20,
    height: 60
  },
  iconCenter: {
    ...flexCenter,
    flex: 1
  },
  // REVISAR
  logo: {
    width: 255,
    height: 70,
    marginBottom: 10
  },
  brandBox: {
    flex: 3,
    ...flexCenter
  },
  logoBar: {
    height: 34,
    width: 125
  }
});
export default Styles;
