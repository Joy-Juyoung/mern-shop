import React, { createContext, useState, useEffect } from 'react';
import ProductsAPI from './api/ProductsAPI';
import UserAPI from './api/UserAPI';
import CategoriesAPI from './api/CategoriesAPI';

import axios from 'axios';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  return (
    <GlobalState.Provider value={'value'}>{children}</GlobalState.Provider>
  );
};
