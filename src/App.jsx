import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { PersistGate } from "redux-persist/integration/react";
import ProductPage from "./components/ProductPage";
import BarChartComponent from "./components/Graph";
import store from "./store/Store";
import { persistor } from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="text-center">
            <Header />
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<ProductPage />} />
              <Route path="/graph" element={<BarChartComponent />} />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
