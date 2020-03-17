// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  UseIcoMoon,
  useDocRd,
  useToggle,
  useFormApp,
  useFbAddData,
  useChangeRd,
  useTimeStamp,
  UseListItems
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc08a({ history }) {
  // #region [setLogic] & Reducers
  // ------------------------------

  // set Reducers
  const { rdAuthUser, rdContent, rdSelectedPost } = useReducer();
  // const screenContent = rdContent[8];

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

      <View style={[useStyle.flexMaster, useStyle.lightGreyPage]}>
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
      <DETAILS />

      <COMMENTSLIST />

      {/*
       */}
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const DETAILS = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.card}>
        <View style={useStyle.detailsQuestionView}>
          <View style={useStyle.titleQuestionBar}>
            <Text style={useStyle.titleQuestion}>{rdSelectedPost.title}</Text>
          </View>
          <Text style={useStyle.txDescriptionQuestion}>
            {rdSelectedPost.xDescription}
          </Text>
        </View>

        <View>
          <View style={useStyle.likeBar}>
            <View style={[useStyle.flex2, useStyle.row]}>
              <UseLink to={'/myprofile'}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{
                    uri: rdAuthUser.userAvatar
                  }}
                />
              </UseLink>

              <View style={[useStyle.btHug, useStyle.row]}>
                <UseIcoMoon name="hug" size={12} color="#999" />
                <Text style={[useStyle.mgL5, useStyle.tx12]}>
                  {rdAuthUser.totalHugs}
                </Text>
              </View>
            </View>
            <View style={[useStyle.btLike, useStyle.row]}>
              <UseIcoMoon name="thumbs-up" size={12} color="#333" />
              <Text style={[useStyle.mgL5, useStyle.tx12]}>
                {rdAuthUser.totalLikes}
              </Text>
            </View>
            <View style={[useStyle.btLike, useStyle.row]}>
              <UseIcoMoon name="thumbs-down" size={12} color="#333" />
              <Text style={[useStyle.mgL5, useStyle.tx12]}>
                {rdAuthUser.totalDislikes}
              </Text>
            </View>
          </View>

          {props.children}
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // #region [setLogic] Call Comments - TOP LEVEL
  // ------------------------------

  // --- Use List Items
  // ------------------------------

  // set noItem
  const NoItem = () => (
    <>
      <Image
        resizeMode={'contain'}
        style={useStyle.noPostsImg}
        source={require('../images/social-care.png')}
      />
      <Text style={useStyle.noPostsTxt}>
        Em breve você receberá comentários úteis e positivos para te ajudar na
        situação que vc está passando.
      </Text>
    </>
  );

  // set List Call
  let infoComments = {
    collection: 'comments',
    reducerName: 'rdFeedPost',
    mergeUser: true,
    // Filter
    where1: { field: 'postId', type: '==', value: rdSelectedPost.docId },
    // Order
    order1: { field: 'createdAt', type: 'desc' },
    // emptyList
    noItem: <NoItem />
  };

  // set Hook
  const [CommentsList] = UseListItems(infoComments);

  // ------------------------------
  // #endregion

  const COMMENTSLIST = () => {
    // #region [setLogic]
    // ------------------------------

    // set Hook
    const [listView, toggleListView] = useToggle(true);
    const [sttSelected, setSelected] = React.useState('');

    // set Hook
    const changeRdSelectedProfile = useChangeRd();

    let handleProfile = () => {
      // set call
      changeRdSelectedProfile({
        reducerName: 'rdSelectedProfile',
        value: sttSelected.user
      });

      history.push('profile');
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.card}>
        {listView ? (
          <>
            <View style={[useStyle.row, useStyle.mgB20]}>
              <View style={useStyle.numbersComments}>
                <Text>Comentários</Text>
              </View>
            </View>

            <CommentsList
              renderProps={({ item, id }) => {
                return (
                  <View key={id} style={useStyle.row}>
                    <TouchableOpacity
                      style={useStyle.userBar}
                      onPress={() => {
                        setSelected(item);
                        toggleListView();
                      }}
                    >
                      <View style={[useStyle.btHug, useStyle.row]}>
                        <UseIcoMoon name="hug" size={12} color="#999" />

                        <Text style={[useStyle.mgL5, useStyle.tx12]}>
                          {item.user.totalHugs}
                        </Text>
                      </View>

                      <View>
                        <Image
                          style={{
                            width: 24,
                            height: 24,
                            transform: [{ translateX: 24 }]
                          }}
                          source={{
                            uri: item.user.userAvatar
                            // 'https://source.unsplash.com/100x100/?perfil'
                          }}
                          // source={require('../images/avatar.png')}
                        />
                      </View>

                      <View style={useStyle.row}>
                        <View style={[useStyle.btLike, useStyle.row]}>
                          <UseIcoMoon name="thumbs-up" size={12} color="#333" />

                          <Text style={[useStyle.mgL5, useStyle.tx12]}>
                            {item.user.totalLikes}
                          </Text>
                        </View>

                        <View style={[useStyle.btLike, useStyle.row]}>
                          <UseIcoMoon
                            name="thumbs-down"
                            size={12}
                            color="#333"
                          />

                          <Text style={[useStyle.mgL5, useStyle.tx12]}>
                            {item.user.totalDislikes}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </>
        ) : (
          <>
            <View style={[useStyle.row, useStyle.mgB20]}>
              <View style={useStyle.numbersComments}>
                <TouchableOpacity onPress={toggleListView} style={useStyle.row}>
                  <UseIcoMoon name="chevron-left" size={24} color="#333" />

                  <Text style={{ color: '#333' }}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={useStyle.txcommentQuestion}>
              <Text style={[useStyle.tx12, useStyle.txGrey]}>
                {useTimeStamp(sttSelected.createdAt)}
              </Text>

              <Text style={useStyle.txCommentDescription}>
                {sttSelected.xComment}
              </Text>

              <Image
                style={useStyle.bbDown}
                source={require('../images/bubble-down.png')}
              />
            </View>

            <View style={useStyle.row}>
              <View style={[useStyle.userBar, { justifyContent: 'flex-end' }]}>
                {/* /} abraços {/* */}
                <View style={[useStyle.row]}>
                  <TouchableOpacity style={[useStyle.btHug, useStyle.row]}>
                    <UseIcoMoon name="hug" size={12} color="#999" />
                    <Text style={[useStyle.mgL5, useStyle.tx12]}>
                      {sttSelected.user.totalHugs}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleProfile}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        marginLeft: 5
                      }}
                      source={{
                        uri: sttSelected.user.userAvatar
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
