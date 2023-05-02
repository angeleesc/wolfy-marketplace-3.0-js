import React from "react";
import {
  checWaletConected,
  getWaletData,
} from "../controllers/Web3Controllers";
import { useReducer } from "react";
import { useEffect } from "react";
import { array } from "prop-types";

const web3context = React.createContext();

export const useWeb3Context = () => {
  const context = React.useContext(web3context);
  return context;
};

const initialState = {
  valletAccount: "",
  balance: "",
  hasWeb3Provider: true,
};

export const keyWeb3ContextSatate = {
  valletAccount: "valletAccount",
  balance: "balance",
};

const reducer = (state, action) => {
  const { type, datas } = action;

  switch (type) {
    case "setValues":
      const dataToUpdate = {};

      for (let dataKey in datas) {
        dataToUpdate[dataKey] = datas[dataKey];
      }

      return {
        ...state,
        ...dataToUpdate,
      };

    default:
      return state;
  }
};

export default function Web3ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = async () => {
    console.log("init en el context");
    let isConected = await checWaletConected();
    if (isConected) {
      const walletData = await getWaletData();
      dispatch({
        type: "setValues",
        datas: {
          valletAccount: walletData.addres,
          balance: walletData.balance,
        },
      });
    }
  };

  const listentAccounts = (accoounts) => {
    console.log("accoutn");
    console.log(accoounts);
    if (accoounts.length > 0) {
      init();
    } else {
      dispatch({
        type: "setValues",
        datas: {
          valletAccount: "",
          balance: "",
        },
      });
    }
  };

  useEffect(() => {
    console.log("inicio en el context xd");
    init();
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", listentAccounts);
    } else {
      console.log("no hay provider");
    }
  }, []);

  return (
    <web3context.Provider
      value={{
        tpye: "context",
        ...state,
      }}
    >
      {children}
    </web3context.Provider>
  );
}
