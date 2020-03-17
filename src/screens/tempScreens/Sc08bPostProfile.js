// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
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
  UseListItems,
  UseRedirect,
  useRate,
  useFbUpdateData
} from './useMorfos';

// ------------------------------
// #endregion

export default function Sc08b({ history }) {
  // #region [setLogic] & Reducers
  // ------------------------------

  // set Reducers
  const { rdAuthUser, rdContent, rdSelectedPost, rdPostOwner } = useReducer();
  const screenContent = rdContent[8];

  // set Conditions
  const myPost = rdSelectedPost.userId === rdAuthUser.docId;

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
      <DETAILS>
        <COMMENTFORM
          renderProps={({ values, handleTextChange, toggleMsg }) => (
            <>
              <INPUTS values={values} handleTextChange={handleTextChange} />
              <BUTTONS toggleMsg={toggleMsg} values={values} />
            </>
          )}
        />
      </DETAILS>

      <COMMENTSLIST />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  // #region [setLogic] Call Rates - TOP LEVEL
  // ------------------------------

  // --- Use Doc Reducer
  // ------------------------------

  // set Hook
  const callRdListUserRates = useDocRd();

  // set Call
  let infoUserId = {
    collection: 'users',
    docId: rdSelectedPost.userId,
    reducerName: 'rdPostOwner'
  };

  // component Call (TOPLEVEL)
  useEffect(() => {
    callRdListUserRates(infoUserId);
  }, []);

  // ------------------------------
  // #endregion

  const DETAILS = props => {
    // #region [setLogic]
    // ------------------------------

    // --- Use Change Reducer
    // ------------------------------

    // set Hook
    const changeProfile = useChangeRd();

    // set Call
    let infoProfile = {
      reducerName: 'rdSelectedProfile',
      value: rdPostOwner
    };

    // --- check Social Buttons
    // ------------------------------

    const { checkItem } = useRate();

    // check active items
    let { likeActive, dislikeActive, hugActive } = checkItem(rdSelectedPost);

    // set conditional colors
    let hugIcoColor = hugActive ? '#ff2600' : '#999';
    let likeIcoColor = likeActive ? '#ff2600' : '#333';
    let dislikeIcoColor = dislikeActive ? '#ff2600' : '#333';
    // let dislikeIcoColor = changeIcoColor(dislikeActive);
    let stlHugBtn = [
      useStyle.btHug,
      useStyle.row,
      hugActive && { borderColor: '#ff2600' }
    ];
    function changeColor(type) {
      return [useStyle.mgL5, useStyle.tx12, type && { color: '#ff2600' }];
    }
    let stlHugNumb = changeColor(hugActive);
    let stlLikeNumb = changeColor(likeActive);
    let stlDislikeNumb = changeColor(dislikeActive);

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
          {rdPostOwner && (
            <View style={useStyle.likeBar}>
              <View style={[useStyle.flex2, useStyle.row]}>
                <UseLink
                  to={'/profile'}
                  component={TouchableOpacity}
                  onPress={() => changeProfile(infoProfile)}
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={{
                      uri: rdPostOwner.userAvatar
                    }}
                  />
                </UseLink>

                <View style={stlHugBtn}>
                  <UseIcoMoon name="hug" size={12} color={hugIcoColor} />
                  <Text style={stlHugNumb}>{rdPostOwner.totalHugs}</Text>
                </View>
              </View>

              <View style={[useStyle.btLike, useStyle.row]}>
                <UseIcoMoon name="thumbs-up" size={12} color={likeIcoColor} />

                <Text style={stlLikeNumb}>{rdPostOwner.totalLikes}</Text>
              </View>

              <View style={[useStyle.btLike, useStyle.row]}>
                <UseIcoMoon
                  name="thumbs-down"
                  size={12}
                  color={dislikeIcoColor}
                />

                <Text style={stlDislikeNumb}>{rdPostOwner.totalDislikes}</Text>
              </View>
            </View>
          )}

          {props.children}
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const COMMENTFORM = props => {
    // #region [setLogic]
    // ------------------------------

    // set Hook
    const [valueMsg, toggleMsg] = useToggle(false);

    // set Hook
    const { values, handleTextChange } = useFormApp();

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        {valueMsg ? (
          props.renderProps({ values, handleTextChange, toggleMsg })
        ) : (
          <TouchableOpacity onPress={toggleMsg} style={useStyle.writeButton}>
            <Text>{screenContent.txt01}</Text>
            <UseIcoMoon name="feather" size={18} color="#999" />
          </TouchableOpacity>
        )}
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const INPUTS = props => {
    // #region [setLogic]
    // ------------------------------

    // set props
    let { values, handleTextChange } = props;

    // set Conditions
    let textLength = info => info + ' - ' + 'Mínimo de 400 caracteres';
    let commentLength = values.commentPost ? values.commentPost.length : '0';

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <TextInput
          value={values.commentPost}
          onChangeText={txt => handleTextChange(txt, 'commentPost')}
          //
          placeholder="Escreva Ajuda"
          style={useStyle.textArea}
          placeholderTextColor="#999"
          multiline={true}
          numberOfLines={3}
        />
        <Text style={[useStyle.tx12, useStyle.txGrey, useStyle.txRight]}>
          {textLength(commentLength)}
        </Text>
      </>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------

    // set Props
    let { values, toggleMsg } = props;

    // set Toggle
    let [validation, toggleValidation] = useToggle(false);

    // set Hooks
    const callAddPost = useFbAddData();
    const callFbUpdateData = useFbUpdateData();

    // set states to reducer and add on firestore
    let infoSubmit = () => {
      if (values.commentPost && values.commentPost.length >= 400) {
        // ------------------------------
        // --- use Add Comment
        // ------------------------------

        // set Call
        let infoAddPost = {
          collection: 'comments',
          reducerName: 'rdAddComment',
          dataToAdd: {
            createdAt: new Date(),
            postId: rdSelectedPost.docId,
            userId: rdAuthUser.docId,
            xComment: values.commentPost
          }
        };

        callAddPost(infoAddPost);

        // ------------------------------
        // --- use Update Post
        // ------------------------------

        // set Call
        let infoImgUser = {
          collection: 'posts',
          // reducerName: 'xxx',
          docId: rdSelectedPost.docId,
          dataToUpdate: { newComments: true }
        };

        // function Call
        callFbUpdateData(infoImgUser);

        // ------------------------------
        // --- change Screen
        // ------------------------------

        history.push('/feed');
      } else {
        toggleValidation();
      }
    };
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginTop: 20
          }}
        >
          {validation && (
            <Text style={useStyle.alertMsg}>
              Adicione um comentário com pelo menos 400 caracteres
            </Text>
          )}
          <TouchableOpacity
            onPress={infoSubmit}
            style={[useStyle.btnPrimary, useStyle.btSmall, useStyle.bgBlack]}
          >
            <Text style={useStyle.txWhite}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}
        >
          <TouchableOpacity
            onPress={toggleMsg}
            style={[useStyle.btnSecondary, useStyle.btSmall, useStyle.bgGoogle]}
          >
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </>

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
        Quer ajudar? Faça um comentário positivo acima e contribua com o
        bem-estar da comunidade. Apenas você e o usuário que escreveu o post
        verão os seus comentários.
      </Text>
    </>
  );

  // set List Call
  let infoComments = {
    collection: 'comments',
    reducerName: 'rdComments',
    // mergeUser: true,
    // Filter
    where1: { field: 'postId', type: '==', value: rdSelectedPost.docId },
    where2: { field: 'userId', type: '==', value: rdAuthUser.docId },
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
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={useStyle.card}>
        <View style={[useStyle.row, useStyle.mgB20]}>
          <View style={useStyle.numbersComments}>
            <Text>Comentários</Text>
          </View>
        </View>

        <CommentsList
          renderProps={({ item, id }) => (
            <View key={id}>
              <View style={useStyle.txcommentQuestion}>
                <Text style={[useStyle.tx12, useStyle.txGrey]}>
                  {useTimeStamp(item.createdAt)}
                </Text>
                <Text style={useStyle.txCommentDescription}>
                  {item.xComment}
                </Text>
              </View>
              <View style={useStyle.row}>
                <View
                  style={[useStyle.userBar, { justifyContent: 'flex-end' }]}
                >
                  <View style={[useStyle.row]}>
                    <View style={[useStyle.btHug, useStyle.row]}>
                      <UseIcoMoon name="hug" size={12} color="#999" />
                      <Text style={[useStyle.mgL5, useStyle.tx12]}>
                        {rdAuthUser.totalHugs}
                      </Text>
                    </View>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        marginLeft: 5
                      }}
                      source={{ uri: rdAuthUser.userAvatar }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  // ---------------------- THE END
  return <SCREEN />;
}
