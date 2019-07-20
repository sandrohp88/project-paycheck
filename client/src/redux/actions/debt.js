import { FETCH_DEBTS_SUCCESS, SAVE_DEBT_SUCCESS } from "./types";

import getDebts, { saveDebtApi } from "../../mockApi/api/debtApi";
import { toast } from "react-toastify";
// synchronous actions
const updateDebtSuccess = (id = "", updates = {}) => ({
  type: SAVE_DEBT_SUCCESS,
  id,
  updates
});

const fetchDebtSuccess = (debt = []) => ({
  type: FETCH_DEBTS_SUCCESS,
  debt
});

// Asynchronous actions -> Thunks
const fetchDebts = () => {
  return async dispatch => {
    try {
      const response = await getDebts();
      if (response) {
        return dispatch(
          fetchDebtSuccess(
            response.map(debt => ({ ...debt, value: parseFloat(debt.value) })) //Parse to double
          )
        );
      }
    } catch (error) {
      toast.error(`Something went wrong fetching debts ${error}`);
    }
  };
};
const saveDebt = debt => {
  return async dispatch => {
    try {
      const { id, ...updates } = debt;
      await saveDebtApi(debt);
      return dispatch(updateDebtSuccess(id, updates));
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong saving debt:${debt}. ${error}`);
    }
  };
};
export { fetchDebts, saveDebt };
