// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseIcoMoon,
  UseListItems,
  useChangeRd,
  useToggle,
  useFbAddData,
  useRate
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc05b() {
  // #region [setLogic] hooks
  // ------------------------------

  // set Hooks
  const { rdAuthUser, rdContent, rdSelectedProfile, rdReports } = useReducer();
  // const screenContent = rdContent[0];
  const callChangeRd = useChangeRd();

  // --- Use Rate
  // ------------------------------

  // set Call
  let infoRate = {
    ratingUserRd: rdAuthUser,
    ratedUserRd: rdSelectedProfile,
    ratedUserRdStr: 'rdSelectedProfile'
  };

  // set Hooks
  const {
    checkActiveProfile,
    handleLike,
    sttLikeActive,
    handleDislike,
    sttDislikeActive,
    handleHug,
    sttHugActive
  } = useRate(infoRate);
  const callFbAddData = useFbAddData();

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.flexMaster, useStyle.lightPage]}>
        <View style={useStyle.yellowBar} />
        <ScrollView style={useStyle.scrollView}>
          <View style={useStyle.pad20}>
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

    <_STYLE>
      <CARD>
        <HUG />

        <LIKE />

        <DISLIKE />
      </CARD>

      <POSTSLIST />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  // #region [setLogic] TOPLEVEL Set Hugs + Rates
  // ------------------------------

  const [sttReported, toggleReported] = useToggle(false);

  React.useEffect(() => {
    rdReports &&
      rdReports.userReported === rdSelectedProfile.docId &&
      toggleReported();
  }, [rdReports]);

  React.useEffect(() => {
    checkActiveProfile();
  }, []);

  // ------------------------------
  // #endregion

  const CARD = props => {
    // #region [setLogic]
    // ------------------------------

    // --- set Menu
    // ------------------------------

    let _menu = null;

    let setMenuRef = ref => {
      _menu = ref;
    };

    let hideMenu = () => {
      _menu.hide();
    };

    let showMenu = () => {
      _menu.show();
    };

    let toScreen = () => {
      // this.props.navigation.navigate('/avatar-background');

      // --- Use Add Data
      // ------------------------------

      // set Call
      let infoAddPost = {
        collection: 'reports',
        reducerName: 'rdReports',
        dataToAdd: {
          createdAt: new Date(),
          userReporting: rdAuthUser.docId,
          userReported: rdSelectedProfile.docId
        }
      };

      // function Call
      callFbAddData(infoAddPost);

      _menu.hide();
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.cardImg, useStyle.mgB20]}>
        <View style={useStyle.editOptions}>
          {!sttReported && (
            <Menu
              ref={setMenuRef}
              button={
                <View style={useStyle.btOptions}>
                  <UseIcoMoon
                    onPress={showMenu}
                    name="more-vertical"
                    size={24}
                    color="#fff"
                  />
                </View>
              }
            >
              <MenuItem onPress={toScreen}>Denunciar Usuário</MenuItem>
            </Menu>
          )}
        </View>
        <View style={useStyle.maskImg}>
          <Image
            source={{
              uri: rdSelectedProfile.userBg
              // uri: 'https://source.unsplash.com/100x100/?background'
            }}
            style={useStyle.image}
            resizeMode={'cover'}
          />
          <Image
            style={[useStyle.avatarImg, { top: -50 }]}
            source={
              {
                uri: rdSelectedProfile.userAvatar
              }
              // require('../../images/avatar2.png')
            }
          />
        </View>
        {sttReported && <Text>Usuário Denunciado!</Text>}

        <View style={[useStyle.likeBar, useStyle.profileBar]}>
          {props.children}
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const HUG = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.flex2, useStyle.row]}>
        <TouchableOpacity
          style={[
            useStyle.btHug,
            !sttHugActive && { borderColor: 'orange' },
            useStyle.row,
            !sttHugActive && useStyle.bgYellow
          ]}
          onPress={handleHug}
        >
          <UseIcoMoon
            name="hug"
            size={12}
            color={!sttHugActive ? 'black' : '#999'}
          />
          <Text
            style={[
              useStyle.mgL5,
              useStyle.tx12,
              !sttHugActive && { color: 'black' }
            ]}
          >
            {!sttHugActive ? 'Hug.me' : 'Abraçado'}{' '}
            {rdSelectedProfile.totalHugs && rdSelectedProfile.totalHugs}
          </Text>
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const LIKE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity
        style={[useStyle.btLike, useStyle.row]}
        onPress={handleLike}
      >
        <UseIcoMoon
          name="thumbs-up"
          size={12}
          color={sttLikeActive ? '#ff2600' : '#333'}
        />
        <Text
          style={[
            useStyle.mgL5,
            useStyle.tx12,
            sttLikeActive && { color: '#ff2600' }
          ]}
        >
          {rdSelectedProfile.totalLikes && rdSelectedProfile.totalLikes}
        </Text>
      </TouchableOpacity>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const DISLIKE = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity
        style={[useStyle.btLike, useStyle.row]}
        onPress={handleDislike}
      >
        <UseIcoMoon
          name="thumbs-down"
          size={12}
          color={sttDislikeActive ? '#ff2600' : '#333'}
        />
        <Text
          style={[
            useStyle.mgL5,
            useStyle.tx12,
            sttDislikeActive && { color: '#ff2600' }
          ]}
        >
          {rdSelectedProfile.totalDislikes && rdSelectedProfile.totalDislikes}
        </Text>
      </TouchableOpacity>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // #region [setLogic] TOPLEVEL
  // ------------------------------

  // prepare noItem
  const NoItem = () => (
    <>
      <Image
        resizeMode={'contain'}
        style={useStyle.noPostsImg}
        source={require('../images/help.png')}
      />
      <Text style={useStyle.noPostsTxt}>
        Novo por aqui? Publique algo primeiro para que a comunidade possa
        interagir com você.
      </Text>
    </>
  );

  // set List Call
  let infoPosts = {
    collection: 'posts',
    reducerName: 'rdHisPosts',
    // Filter
    where1: { field: 'userId', type: '==', value: rdSelectedProfile.docId },
    // Order
    order1: { field: 'createdAt', type: 'desc' },
    // emptyList
    noItem: <NoItem />
  };

  // set Hook
  const [PostsList] = UseListItems(infoPosts);

  // ------------------------------
  // #endregion

  const POSTSLIST = () => {
    // #region [setLogic]
    // ------------------------------

    // set Call
    let handleChange = info => {
      let infoChangeRdHisPosts = {
        reducerName: 'rdSelectedPost',
        value: info
      };

      callChangeRd(infoChangeRdHisPosts);
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.flexMaster, useStyle.lightPage]}>
        <View style={useStyle.pad20}>
          <View style={useStyle.cardList}>
            <Text
              style={[useStyle.tx14, useStyle.txMediumGrey, useStyle.pad20]}
            >
              Publicação
            </Text>
            <View style={useStyle.flex1}>
              <PostsList
                renderProps={({ item, id }) => (
                  <View key={id}>
                    <UseLink
                      to={'/post'}
                      style={useStyle.txcommentList}
                      component={TouchableOpacity}
                      onPress={() => handleChange(item)}
                    >
                      <Text style={useStyle.txNamePost}>{item.title}</Text>
                      <UseIcoMoon name="chevron-right" size={18} color="#666" />
                    </UseLink>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
