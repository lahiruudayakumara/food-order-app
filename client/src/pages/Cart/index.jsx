import { Button } from "@mui/material";
import { Tabs } from "../../components/Tabs";
import useTabSwitch from "../../hooks/useTabSwitch";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import emptyCart from "../../assets/images/empty_cart.png"

const Cart = () => {
  const cart = useSelector(cartProducts);
  const tabs= ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

  if (!cart || cart.length === 0) {
    return (
        <div className="bg-white h-full text-black flex justify-center p-4">
            <img src={emptyCart} alt="place holder img" className="object-cover" />
        </div>
    )
  }


  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
       
                <div className="flex justify-end p-2">
                    <button variant="dark" className="flex items-center" onClick={()=>handleTabSwitch('Delivery')}>
                      <span className="mr-1">
                      <Button style={{ backgroundColor: "#f1c200" }} variant="contained" endIcon={<NavigateNextIcon />}>
                        Next
                      </Button>
                      </span></button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
               
            </div>
        </div>
  )
}

export default Cart