// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const blockchain = await store.getState.blockchain;
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      let frogTotalSupply = await store
        .getState()
        .blockchain.frogSmartContract.methods.totalSupply()
        .call();
      let princessBalance = await store
        .getState()
        .blockchain.smartContract.methods.balanceOf(account)
        .call();
      let frogBalance = await store
        .getState()
        .blockchain.frogSmartContract.methods.balanceOf(account)
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          frogTotalSupply,
          frogBalance,
          princessBalance,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
