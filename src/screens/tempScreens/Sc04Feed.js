// #region [setImports]
// ------------------------------

// import Packages
import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

// import Internal Components
import {
  UseLink,
  useStyle,
  useReducer,
  useListRd,
  useChangeRd,
  // UseIcoMoon,
  UseListItems,
  UseIcoMoon,
  useRate
} from './useMorfos';

// ------------------------------
// #endregion

// #region [allStyles]
// ------------------------------

// CARD
let stlCardImg = useStyle.cardImg;
let stlRowGray = [useStyle.row, useStyle.bgGreyLight];
let stlFlexRow1 = [useStyle.flex1, useStyle.row];
let stlViewImg1 = {
  width: 80,
  height: 80,
  marginRight: 10
};
let stlImg1 = {
  width: 80,
  height: 80
};

// BUTTONS
let stlLikeBar = [useStyle.likeBar, useStyle.mgB20];
let stlFlexRow2 = [useStyle.flex2, useStyle.row];
let stlBtnHug = useStyle.btHug;
let stlTotals = [useStyle.mgL5, useStyle.tx12];
let stlLike2 = [useStyle.btLike /*useStyle.bgYellow*/];
let stlIcon1 = useStyle.mgL5;
// let stl = useStyle.xxx;

// ------------------------------
// #endregion

export default function Sc04({ history }) {
  // #region [setLogic] Reducers + List Calls
  // ------------------------------

  const { rdAuthUser, rdContent, rdListUserHugs } = useReducer();
  // const screenContent = rdContent[0];

  // set hooks
  const { checkItem } = useRate();

  // ------------------------------
  // --- Use Post Items
  // ------------------------------

  // prepare noItem
  const NoItem = () => <Text>Sem Posts</Text>;

  // set Call
  let infoPosts = {
    collection: 'posts',
    reducerName: 'rdAllPosts',
    mergeUser: true,
    // Order
    order1: { field: 'createdAt', type: 'desc' },
    // emptyList
    noItem: <NoItem />
  };

  // set Hook
  const [POSTSLIST] = UseListItems(infoPosts);

  // ------------------------------
  // --- Use List Hugs
  // ------------------------------

  // set Hook
  const callRdListUserHugs = useListRd();

  // set Call
  let infoHugs = {
    collection: 'hugs',
    where1: {
      field: 'ratingUserId',
      type: '==',
      value: rdAuthUser.docId
    },
    reducerName: 'rdListUserHugs'
  };

  // ------------------------------
  // --- Use List Rates
  // ------------------------------

  // set Hook
  const callRdListUserRates = useListRd();

  // set Call
  let infoRates = {
    collection: 'rates',
    where1: {
      field: 'ratingUserId',
      type: '==',
      value: rdAuthUser.docId
    },
    reducerName: 'rdListUserRates'
  };

  // component Call (TOPLEVEL)
  useEffect(() => {
    callRdListUserHugs(infoHugs);
    callRdListUserRates(infoRates);
  }, []);

  // ------------------------------
  // #endregion

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion
    // ------------------------------

    return (
      // #region [component]
      // ------------------------------

      <View style={[useStyle.flexMaster, useStyle.whitePage]}>
        <ScrollView style={useStyle.scrollView}>
          <View style={useStyle.pad20}>{props.children}</View>
        </ScrollView>
      </View>
    );

    // ------------------------------
    // #endregion
  };

  const SCREEN = () => (
    // #region [component]
    // ------------------------------
    // <Text>{item.title}</Text>

    <_STYLE>
      <POSTSLIST
        renderProps={({ item, id, reducerlength }) => (
          <View key={id}>
            <CARD item={item} />

            <BUTTONS item={item} />
          </View>
        )}
      />
    </_STYLE>

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const CARD = props => {
    // #region [setLogic]
    // ------------------------------

    // --- Use Change Reducer
    // ------------------------------

    // set Hook
    const changeRdSelectedPost = useChangeRd();

    // set Call
    let infoPost = {
      reducerName: 'rdSelectedPost',
      value: props.item
    };

    // set function
    let handleSelect = async () => {
      let call = await changeRdSelectedPost(infoPost);

      let postUser = call.info.value.userId;

      if (postUser === rdAuthUser.docId) {
        history.push('mypost');
      } else {
        history.push('post');
      }
    };

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlCardImg}>
        <TouchableOpacity onPress={handleSelect}>
          <View style={stlRowGray}>
            <View style={stlFlexRow1}>
              <View style={stlViewImg1}>
                <Image
                  style={stlImg1}
                  source={{
                    uri: props.item.user.userAvatar
                    // 'https://source.unsplash.com/100x100/?perfil'
                  }}
                />
              </View>

              <Text>{props.item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BUTTONS = props => {
    // #region [setLogic]
    // ------------------------------

    // --- check Social Buttons
    // ------------------------------

    // check active items
    let { likeActive, dislikeActive, hugActive } = checkItem(props.item);

    // set conditional colors
    let changeIcoColor = type => (type ? '#ff2600' : '#777');
    let hugIcoColor = changeIcoColor(hugActive);
    let likeIcoColor = changeIcoColor(likeActive);
    let dislikeIcoColor = changeIcoColor(dislikeActive);
    let stlHugBtn = [stlBtnHug, hugActive && { borderColor: '#ff2600' }];
    let stlHugNumb = [stlTotals, hugActive && { color: '#ff2600' }];
    let stlLikeNumb = [stlTotals, likeActive && { color: '#ff2600' }];
    let stlDislikeNumb = [stlTotals, dislikeActive && { color: '#ff2600' }];

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={stlLikeBar}>
        <View style={stlFlexRow2}>
          <View style={stlHugBtn}>
            <UseIcoMoon name="hug" size={14} color={hugIcoColor} />
            <Text style={stlHugNumb}>{props.item.user.totalHugs}</Text>
          </View>
        </View>
        <View style={stlLike2}>
          <UseIcoMoon name="thumbs-up" size={12} color={likeIcoColor} />
          <Text style={stlLikeNumb}>{props.item.user.totalLikes}</Text>
        </View>
        <View style={stlLike2}>
          <UseIcoMoon name="thumbs-down" size={12} color={dislikeIcoColor} />
          <Text style={stlDislikeNumb}>{props.item.user.totalDislikes}</Text>
        </View>
        <View style={stlIcon1}>
          <View style={{ translateY: 4 }}>
            <UseIcoMoon name="chevron-up" size={14} color="#f53a00" />
          </View>
          <View>
            <UseIcoMoon name="chevron-down" size={14} color="#999" />
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
