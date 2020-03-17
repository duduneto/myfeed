// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Internals
import { useChangeRd, useFbAddData, useFbUpdateData, useReducer } from '.';

// ------------------------------
// #endregion

export default function useRate(info) {
  // #region [useMorfos]
  // ------------------------------

  // set Hooks
  const {
    rdHugInfo,
    rdRateInfo,
    updateDataPending,
    rdListUserHugs,
    rdListUserRates
  } = useReducer();
  const dynamicRd = useReducer();
  const [sttLikeActive, setLikeActive] = React.useState(false);
  const [sttDislikeActive, setDislikeActive] = React.useState(false);
  const [sttHugActive, setHugActive] = React.useState(false);
  const callChangeRd = useChangeRd();
  const callFbAddData = useFbAddData();
  const callFbUpdateData = useFbUpdateData();

  // ------------------------------
  // CHECK ACTIVE ITEM
  // ------------------------------

  function checkItem(item) {
    // --- check Hug
    // ------------------------------

    // set vars
    let hugActive = false;

    // reducer map
    rdListUserHugs &&
      rdListUserHugs.map(
        hug =>
          hug.ratedUserId === item.user.docId &&
          hug.active &&
          (hugActive = true)
      );

    // --- check Rates
    // ------------------------------

    // set vars
    let likeActive = false;
    let dislikeActive = false;

    // reducer map
    rdListUserRates &&
      rdListUserRates.map(
        rate =>
          rate.ratedUserId === item.user.docId &&
          rate.active &&
          (rate.type === 'Like' ? (likeActive = true) : (dislikeActive = true))
      );
    // reducer map
    // rdListUserRates.map(rate => {
    //   if (rate.ratedUserId === item.user.docId) {
    //     // --- change state
    //     // ------------------------------
    //     rate.active &&
    //       (rate.type === 'Like' ? setLikeActive(true) : setDislikeActive(true));
    //   }
    // });

    return { likeActive, dislikeActive, hugActive };
  }

  // ------------------------------
  // CHECK ACTIVE PROFILE
  // ------------------------------

  function checkActiveProfile() {
    // --- Use Change HUG info
    // ------------------------------
    // set Call
    let infoHugInfo = { reducerName: 'rdHugInfo', value: { new: true } };
    // function Call
    callChangeRd(infoHugInfo);

    // --- Use Change RATE info
    // ------------------------------
    // set Call
    let infoRateInfo = { reducerName: 'rdRateInfo', value: { new: true } };
    // function Call
    callChangeRd(infoRateInfo);

    // reducer map
    rdListUserHugs.map(hug => {
      if (hug.ratedUserId === info.ratedUserRd.docId) {
        // --- Use Change Reducer
        // ------------------------------
        // set Call
        let infoHugInfo = { reducerName: 'rdHugInfo', value: hug };
        // function Call
        callChangeRd(infoHugInfo);

        // --- change state
        // ------------------------------
        hug.active && setHugActive(true);
      }
    });

    // reducer map
    rdListUserRates.map(rate => {
      if (rate.ratedUserId === info.ratedUserRd.docId) {
        // --- Use Change Reducer
        // ------------------------------
        // set Call
        let infoRateInfo = { reducerName: 'rdRateInfo', value: rate };
        // function Call
        callChangeRd(infoRateInfo);

        // --- change state
        // ------------------------------
        rate.active &&
          (rate.type === 'Like' ? setLikeActive(true) : setDislikeActive(true));
      }
    });
  }

  // ------------------------------
  // ADD NEW
  // ------------------------------

  function addNew(subInfo) {
    // --- Use ADD Data

    // set Call
    let infoNew = {
      collection: subInfo.collection,
      reducerName: subInfo.reducerName,
      dataToAdd: {
        createdAt: new Date(),
        ratedUserId: info.ratedUserRd.docId,
        ratingUserId: info.ratingUserRd.docId,
        type: subInfo.type,
        active: true
      }
    };

    // function Call
    callFbAddData(infoNew);

    // --- Update User Total
    updateUserTotal(subInfo, true);
  }

  // ------------------------------
  // CHANGE STATUS
  // ------------------------------

  function changeStatus(subInfo, status) {
    // --- Use UPDATE Data
    // set Call
    let infoStatus = {
      collection: subInfo.collection,
      reducerName: subInfo.reducerName,
      docId: dynamicRd[subInfo.reducerName].docId,
      dataToUpdate: {
        active: status === '2changes' ? true : status,
        type: subInfo.type
      }
    };
    // function Call
    callFbUpdateData(infoStatus);

    // --- Update User Total
    updateUserTotal(subInfo, status);
  }

  // ------------------------------
  // --- UPDATE USER TOTAL
  // ------------------------------

  function updateUserTotal(subInfo, status) {
    // Use UPDATE User
    // ------------------------------

    // set Expressions
    let nameB =
      status === '2changes' && subInfo.type === 'Like' ? 'Dislike' : 'Like';
    let totalName = 'total' + subInfo.type + 's';
    let totalNameB = status === '2changes' && 'total' + nameB + 's';
    let totalNum = info.ratedUserRd[totalName];
    let totalNumB = status === '2changes' && info.ratedUserRd[totalNameB];

    // set Call
    let infoUpdate = {
      collection: 'users',
      reducerName: info.ratedUserRdStr,
      docId: info.ratedUserRd.docId,
      dataToUpdate: {
        [totalName]:
          status === true || status === '2changes' ? ++totalNum : --totalNum,
        [totalNameB]: status === '2changes' && --totalNumB
      }
    };

    // set async function
    const call1 = async () => await callFbUpdateData(infoUpdate);

    // call function
    call1().then(() => {
      // set state
      if (subInfo.type === 'Hug') {
        status ? setHugActive(true) : setHugActive(false);
      } else {
        if (status === '2changes' || status === true) {
          if (subInfo.type === 'Like') {
            setLikeActive(true);
            setDislikeActive(false);
          } else {
            setDislikeActive(true);
            setLikeActive(false);
          }
        } else {
          subInfo.type === 'Like'
            ? setLikeActive(false)
            : setDislikeActive(false);
        }
      }
    });
  }

  // ------------------------------
  // --- HANDLE 2
  // ------------------------------

  const handle2 = info => {
    // set Handle
    !updateDataPending &&
      (rdRateInfo.new
        ? addNew(info.A)
        : rdRateInfo.active === true
        ? rdRateInfo.type === info.A.type
          ? changeStatus(info.A, false)
          : changeStatus(info.A, '2changes')
        : changeStatus(info.A, true));
  };

  // ------------------------------
  // --- LIKE
  // ------------------------------

  // set Call
  let infoLike = {
    collection: 'rates',
    reducerName: 'rdRateInfo',
    type: 'Like'
  };

  const handleLike = () => {
    // set Handle
    let info = {
      A: infoLike,
      B: infoDislike
    };

    // call Handle
    handle2(info);
  };

  // ------------------------------
  // --- DISLIKE
  // ------------------------------

  // set Call
  let infoDislike = {
    collection: 'rates',
    reducerName: 'rdRateInfo',
    type: 'Dislike'
  };

  const handleDislike = () => {
    // set Handle
    let info = {
      A: infoDislike,
      B: infoLike
    };

    // call Handle
    handle2(info);
  };

  // ------------------------------
  // --- HUG
  // ------------------------------

  const handleHug = () => {
    // set Call
    let infoHug = {
      type: 'Hug',
      collection: 'hugs',
      reducerName: 'rdHugInfo'
    };

    // setHandle
    !updateDataPending &&
      (rdHugInfo.new
        ? (() => {
            addNew(infoHug);
            setHugActive(true);
          })()
        : rdHugInfo.active === true
        ? changeStatus(infoHug, false)
        : changeStatus(infoHug, true));
  };

  // set

  // send Result
  return {
    checkItem,
    checkActiveProfile,
    handleLike,
    sttLikeActive,
    setLikeActive,
    handleDislike,
    sttDislikeActive,
    setDislikeActive,
    handleHug,
    sttHugActive,
    setHugActive
  };

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****

  // #region [setLogic]
  // ------------------------------

  
    // --- check Social Buttons
    // ------------------------------

    const { checkItem } = useRate()

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

    // ------ or ------
  
    // --- Use Rate
    // ------------------------------

    // set Call
    let infoRate = {
        ratingUserRd: rdAuthUser,
        ratedUserRd: rdSelectedProfile
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
    
    // function Call
    // handleLike();
      
    // ------ or ------

    // button Call
    // <TouchableOpacity 
    // style={ sttLikeActive ? stlGreen : stlGray }
    // onPress={ handleLike }> 
    // </TouchableOpacity>

  // ------------------------------
  // #endregion

*/
