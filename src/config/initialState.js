const initialState = {
  // general
  rdContent: null,
  rdAuthUser: null,

  // SCREENS
  rdTeste1: null,
  // 01 - TempUsers
  rdAllUsers: null,
  // 04 - Feed
  rdAllPosts: null,
  rdListUserHugs: null,
  rdListUserRates: null,
  rdSelectedPost: null,
  // Cp02 - Nav Down
  rdNavSelection: 1,
  // 0x - xx
  rdIptTitle: '',
  // 0x - Profile
  rdMyPosts: null,

  // actions
  asyncCallPending: false,
  asyncCallError: null
};

export default initialState;
