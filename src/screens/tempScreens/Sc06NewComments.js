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
  useChangeRd,
  UseListItems,
  UseIcoMoon,
  UseRdItems,
  useFbUpdateData
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc06({ history }) {
  // #region [setLogic] & Reducers
  // ------------------------------

  // set Hooks
  const { rdAuthUser, rdContent, rdAllPosts } = useReducer();
  // const screenContent = rdContent[0];

  const callChangeRd = useChangeRd();
  const callFbUpdateData = useFbUpdateData();

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

      <View style={[useStyle.flexMaster, useStyle.whitePage]}>
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
      <POSTSLIST />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
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
          Os novos comentários enviados para os seus posts ficarão aqui.
        </Text>
      </>
    );
    // set filters
    let filter1 = { field: 'userId', type: '===', value: rdAuthUser.docId };
    let filter2 = { field: 'newComments', type: '===', value: true };
    // set List Call
    let infoPosts = {
      reducer: rdAllPosts,
      filter1: { ...filter1 },
      filter2: { ...filter2 },
      noItem: <NoItem />
    };
    // set hook
    const [PostsList] = UseRdItems(infoPosts);

    // ------------------------------
    // --- Use Change Reducer
    // ------------------------------
    // set Call
    let handleChange = info => {
      // ------------------------------
      // --- Use Change Reducer
      // ------------------------------
      // set Call
      let infoMyPosts = {
        reducerName: 'rdSelectedPost',
        value: info.item
      };
      // function Call
      callChangeRd(infoMyPosts);

      // ------------------------------
      // --- Change post status
      // ------------------------------

      // set Call
      let newRd = [];
      rdAllPosts.map(post => {
        post.docId === info.item.docId && (post.newComments = false);
        newRd.push(post);
      });
      let infoAllPosts = {
        reducerName: 'rdAllPosts',
        value: newRd
      };

      // function Call
      callChangeRd(infoAllPosts);

      // ------------------------------
      // Use Update Data
      // ------------------------------

      // set Call
      let infoSelectedPost = {
        collection: 'posts',
        // reducerName: 'rdAllPosts',
        docId: info.item.docId,
        dataToUpdate: { newComments: false }
      };

      // function Call
      callFbUpdateData(infoSelectedPost);

      // ------------------------------
      // Change Route
      // ------------------------------

      history.push('/mypost');
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
              Novos Comentários em:
            </Text>
            <View style={useStyle.flex1}>
              <PostsList
                renderProps={({ item, id }) => (
                  <View key={id}>
                    <TouchableOpacity
                      style={useStyle.txcommentList}
                      onPress={() => handleChange({ item, id })}
                    >
                      <Text style={useStyle.txNamePost}>{item.title}</Text>
                      <UseIcoMoon name="chevron-right" size={18} color="#666" />
                    </TouchableOpacity>
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
