import { RouterProvider } from "react-router-dom";
import CheckoutModal from "./template/modals/checkoutModal/CheckoutModal";
import MintModal from "./template/modals/mint-modal/MintModal";
import router from "./routes/Routes";
import { useSelector } from "react-redux";



function App() {

  const modalState = useSelector((state) => state.modals);


  return (
    <>
      <RouterProvider router={router} />
      {modalState.checkoutModal.open && <CheckoutModal />}
      {modalState.mintModal.open && < MintModal />}
    </>
  );
}

export default App;
