// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useFbUpdateData,
  UseRedirect,
  useReducer
} from './useMorfos';

// ------------------------------
// #endregion

// #region [allStyles]
// ------------------------------

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

// CARD + TEXTS
let stlCard = [useStyle.card, useStyle.flex1];
let stlImg = {
  marginTop: 40,
  width: '100%',
  height: 200,
  opacity: 0.8
};
let stlTitle = [
  useStyle.noPostsTxt,
  { fontSize: 25, marginTop: 24, padding: 0 }
];
let stlDesc = [useStyle.noPostsTxt, { marginTop: 5, padding: 0 }];

// BUTTON
let stlVbtn = useStyle.flexCenter;
let stlBtn1 = [
  useStyle.btnPrimary,
  useStyle.btMedium,
  useStyle.bgBlack,
  { marginBottom: 0 }
];
let stlTxtbtn = useStyle.txWhite;

// ------------------------------
// #endregion

export default function Sc03({ history }) {
  // #region [setLogic] Hooks
  // ------------------------------

  const { rdAuthUser, rdContent } = useReducer();
  // const screenContent = rdContent[0];

  // setHooks
  const [option, setOption] = React.useState(1);

  // ------------------------------
  // #endregion

  const REDIRECT = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]

      !rdAuthUser ? (
        <UseRedirect to='/signin' />
      ) : rdAuthUser.jumpSplashScreen === true ? (
        <UseRedirect to={'feed'} />
      ) : (
        props.children
      )

      // #endregion
    );
  };

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.flexMaster}>
        <View style={useStyle.yellowBar} />
        <ScrollView style={useStyle.flex1}>
          <View
            style={[useStyle.pad20, { height: heightPercentageToDP('89%') }]}
          >
            {/*  */}
            {props.children}
            {/*  */}
          </View>
        </ScrollView>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------
    <REDIRECT>
      <_STYLE>
        <SPLASHSTATE />

        <BUTTON />
      </_STYLE>
    </REDIRECT>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const SPLASHSTATE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <>
        {option === 1 && <SPLASH1 />}
        {option === 2 && <SPLASH2 />}
        {option === 3 && <SPLASH3 />}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const ALLSPLASHS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlCard}>
        <Image resizeMode={'contain'} style={stlImg} source={props.img} />
        <Text style={stlTitle}>{props.title}</Text>
        <Text style={stlDesc}>{props.description}</Text>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH1 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Bem-Vindo ao HugU!'}
        description={
          'Prepare-se para receber muitos abraços dentro da comunidade.'
        }
        img={require('../images/hug.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH2 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Diga como se sente'}
        description={
          'Escreva um Post descrevendo uma situação e diga como se sente pra receber abraços e ideias de como lidar com seu problema.'
        }
        img={require('../images/smiles.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SPLASH3 = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ALLSPLASHS
        title={'Receba as melhores Opiniões'}
        description={
          'As respostas são filtradas pela comunidade que classifica os participantes como Gostei ou Não Gostei.'
        }
        img={require('../images/tablet.png')}
      />

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTON = () => {
    // #region [setLogic]
    // ------------------------------

    // set Hooks
    const callFbUpdateData = useFbUpdateData();

    let handleOption = () => {
      option === 1 && setOption(2);
      option === 2 && setOption(3);
      option === 3 && setFinish();

      function setFinish() {
        let jumpSplashSc = {
          collection: 'users',
          reducerName: 'rdAuthUser',
          docId: rdAuthUser.docId,
          dataToUpdate: { jumpSplashScreen: true }
        };

        callFbUpdateData(jumpSplashSc);

        history.push('feed');
      }
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={stlVbtn}>
        <TouchableOpacity onPress={handleOption} style={stlBtn1}>
          <Text style={stlTxtbtn}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
