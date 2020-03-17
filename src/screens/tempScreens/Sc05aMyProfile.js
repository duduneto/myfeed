// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseIcoMoon,
  UseListItems,
  useChangeRd,
  useAuth,
  UseRdItems
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc05a() {
  // #region [setLogic] hooks
  // ------------------------------

  // set hooks
  const { rdAuthUser, rdContent, rdAllPosts } = useReducer();
  // const screenContent = rdContent[0];
  const callChangeRd = useChangeRd();

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
      <CARD />

      <SAIRTEMP />

      <POSTSLIST />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const CARD = () => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.cardImg, useStyle.mgB20]}>
        <View style={useStyle.editOptions}>
          <View>
            <UseIcoMoon name="edit-3" size={20} color="#fff" />
          </View>
        </View>

        <View style={useStyle.maskImg}>
          <UseLink
            to={'/bgimg'}
            component={TouchableOpacity}
            style={useStyle.linkCorrection}
          >
            <Image
              source={{
                uri: rdAuthUser.userBg
              }}
              style={useStyle.image}
              resizeMode={'cover'}
            />
          </UseLink>
          <UseLink
            to={'/avatar'}
            component={TouchableOpacity}
            style={{ top: -50 }}
          >
            <Image
              style={useStyle.avatarImg}
              source={{
                uri: rdAuthUser.userAvatar
              }}
            />
          </UseLink>
          <View
            style={{
              position: 'absolute',
              bottom: 6,
              right: '36%'
            }}
          >
            <UseIcoMoon name="edit-3" size={18} color="#999" />
          </View>
        </View>

        {/* /} Abraços, Likes e Dislikes {/* */}
        <View style={[useStyle.likeBar, useStyle.profileBar]}>
          <View style={[useStyle.flex2, useStyle.row]}>
            <View style={[useStyle.btHug, useStyle.row]}>
              <UseIcoMoon name="hug" size={12} color="#999" />
              <Text style={[useStyle.mgL5, useStyle.tx12]}>
                {rdAuthUser.totalHugs ? rdAuthUser.totalHugs : 0}
              </Text>
            </View>
          </View>
          <View style={[useStyle.btLike, useStyle.row]}>
            <UseIcoMoon name="thumbs-up" size={12} color="#333" />
            <Text style={[useStyle.mgL5, useStyle.tx12]}>
              {rdAuthUser.totalLikes ? rdAuthUser.totalLikes : 0}
            </Text>
          </View>
          <View style={[useStyle.btLike, useStyle.row]}>
            <UseIcoMoon name="thumbs-up" size={12} color="#333" />
            <Text style={[useStyle.mgL5, useStyle.tx12]}>
              {rdAuthUser.totalDislikes ? rdAuthUser.totalDislikes : 0}
            </Text>
          </View>
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const SAIRTEMP = () => {
    // #region [setLogic]
    // ------------------------------

    // set Hook
    const { signOut } = useAuth();

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <TouchableOpacity style={useStyle.btn} onPress={signOut}>
        <Text style={useStyle.txts}> SAIR TEMPORÁRIO! </Text>
      </TouchableOpacity>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const POSTSLIST = () => {
    // #region [setLogic]
    // ------------------------------

    // ------------------------------
    // --- Use Reducer Items
    // ------------------------------

    // set noItem
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
      reducer: rdAllPosts,
      filter1: { field: 'userId', type: '===', value: rdAuthUser.docId },
      noItem: <NoItem />
    };

    // set hook
    const [PostsList] = UseRdItems(infoPosts);

    // ------------------------------
    // --- Use Change Reducer
    // ------------------------------

    // set Call
    let handleChange = info => {
      let infoMyPosts = {
        reducerName: 'rdSelectedPost',
        value: info
      };

      callChangeRd(infoMyPosts);
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
                      to={'/mypost'}
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
