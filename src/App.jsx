import { RouterProvider } from "react-router-dom";
import CheckoutModal from "./template/modals/checkoutModal/CheckoutModal";
import MintModal from "./template/modals/mint-modal/MintModal";
import router from "./routes/Routes";
import { useSelector } from "react-redux";
import ListingModal from "./template/modals/listing-modal/ListingModal";



function App() {

  const modalState = useSelector((state) => state.modals);


  return (
    <>
      <RouterProvider router={router} />
      {modalState.checkoutModal.open && <CheckoutModal />}
      {modalState.mintModal.open && < MintModal />}
      {modalState.listingModal.open && <ListingModal/>}
      {/* <h3>Migracion exitosa</h3> */}
    </>
  );
}

export default App;
