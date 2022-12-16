import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Createpassword from '../pages/auth/password/createpassword';
import Fpassword from '../pages/auth/password/fpassword';
import Register from '../pages/auth/register';
import Signin from '../pages/auth/signin';
import CreatePwdsuccess from '../pages/success/createPwdsuccess';
import Registersuccess from '../pages/success/Registersuccess';
import Landing from '../pages/landing/landing';
import Productlanding from '../pages/productLanding/productlanding';
import Flexwillpropductmain from '../pages/allaboutflexwill/Flexwillmain/flexwillpropductmain';
import Compactwillcontainer from '../pages/willproducts/compactwillcontainer';
import Flexwillcontainer from '../pages/willproducts/flexwillcontainer';
import Productsmain from '../pages/willproducts/productsmain';
import Prowillcontainer from '../pages/willproducts/prowillcontainer';
import Testamentarycontainer from '../pages/willproducts/testamentarycontainer';
import Executorsuccess from '../pages/success/executorsuccess';
import Flexwillasset from '../pages/allaboutflexwill/flexwillassets/flexwillasset';
import Personalform from '../pages/allaboutflexwill/flexwillpersonal/personalform';
import Flexwillpage from '../pages/allaboutflexwill/flexwillassets/flexwillpage/flexwillpage';
import Distributeasset1 from '../pages/allaboutflexwill/flexwillassets/flexwillpage/distributeasset1';
import Distributeasset2 from '../pages/allaboutflexwill/flexwillassets/flexwillpage/distributeasset2';
import Cashinbank from '../pages/allaboutflexwill/flexwillassets/flexwillpage/cashinbank';
import Distributeassetcash from '../pages/allaboutflexwill/flexwillassets/flexwillpage/distributeassetcash';
import Distributeassetmain from '../pages/allaboutflexwill/flexwillassets/flexwillpage/distributeassetmain';
import ProPersonalLanding from '../pages/PROWILLALL/LANDING/ProPersonalLanding';
import Propersonalinfo from '../pages/PROWILLALL/PersonalInformation/Propersonalinfo';
import ProAssets from '../pages/PROWILLALL/proAsset/ProAssets';
import ProAssetLanding from '../pages/PROWILLALL/LANDING/ProAssetLanding';
import ProExecutorLanding from '../pages/PROWILLALL/LANDING/ProExecutorLanding';
import Proexecutorsuccess from '../pages/success/proexecutorsuccess';
import FlexAssetsuccess from '../pages/success/flexassetsuccess';
import Flexwilldetails from '../pages/ReviewDetails/flexwilldetails';
import Flexwillpayment from '../pages/payments/flexwillpayment';
import BookanAppointment from '../pages/success/bookappointment';
import FlexPersonalSuccess from '../pages/success/flexpersonalsuccess';
import SpouseReview from '../pages/allaboutflexwill/flexwillpersonal/spouseReview';


const Router = () => {

    const [ispayment, setispayment] = useState(false)

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Landing />} />
            <Route exact path="/register" caseSensitive={false} element={<Register />} />
            <Route exact path="/login" caseSensitive={false} element={<Signin />} />
            <Route exact path="/register_success" caseSensitive={false} element={<Registersuccess />} />
            <Route exact path="/forgot_password" caseSensitive={false} element={<Fpassword />} />
            <Route exact path="/create_new_password" caseSensitive={false} element={<Createpassword />} />
            <Route exact path="/createpassword_success" caseSensitive={false} element={<CreatePwdsuccess />} />
            <Route exact path="/product_landing" caseSensitive={false} element={<Productlanding />} />
            <Route exact path="/executor_success" caseSensitive={false} element={<Executorsuccess />} />

            {/* will products */}
            <Route exact path="/will_products" caseSensitive={false} element={<Productsmain />} />
            <Route exact path="/pac_flex_will_main" caseSensitive={false} element={<Flexwillcontainer ispayment={ispayment} setispayment={setispayment} />} />
            <Route exact path="/pac_pro_will_main" caseSensitive={false} element={<Prowillcontainer />} />
            <Route exact path="/pac_compact_will_main" caseSensitive={false} element={<Compactwillcontainer />} />
            <Route exact path="/pac_testamentary_trust_main" caseSensitive={false} element={<Testamentarycontainer />} />


            <Route exact path="/pac_flex-will_product_main" caseSensitive={false} element={<Flexwillpropductmain />} />
            <Route exact path="/flex_will_assets" caseSensitive={false} element={<Flexwillasset />} />
            <Route exact path="/asset_rsa_flex_will" caseSensitive={false} element={<Flexwillpage />} />
            <Route exact path="/flex_will_distribute_assets1" caseSensitive={false} element={<Distributeasset1 />} />
            <Route exact path="/flex_will_distribute_asset2" caseSensitive={false} element={<Distributeasset2 />} />
            <Route exact path="/asset_cashin_bank_flex_will" caseSensitive={false} element={<Cashinbank />} />
            <Route eact path="/flex_will_distribute_cash_assets1" caseSensitive={false} element={<Distributeassetcash />} />
            <Route exact path="/flex_will_distribute_main_asset" caseSensitive={false} element={<Distributeassetmain />} />

            <Route path="/flex_will_personal_info/:page" key={"/flex_will_personal_info"} caseSensitive={false} element={<Personalform />} />


            {/* pro will route */}
            <Route exact path="/pro_personal_landing" caseSensitive={false} element={<ProPersonalLanding />} />
            <Route exact path="/pro_assets_landing" caseSensitive={false} element={<ProAssetLanding />} />
            <Route exact path="/pro_executor_landing" caseSensitive={false} element={<ProExecutorLanding />} />
            <Route exact path="/pro_executor_success" caseSensitive={false} element={<Proexecutorsuccess />} />
            <Route exact path="/pro_personalinfo" caseSensitive={false} element={<Propersonalinfo />} />
            <Route exact path="/pro_assets" caseSensitive={false} element={<ProAssets />} />


            {/* success */}
            <Route exact path="/flex_assets_success" caseSensitive={false} element={<FlexAssetsuccess />} />
            <Route exact path="/book_an_appointment" caseSensitive={false} element={<BookanAppointment />} />
            <Route exact path="/flex_personal_success" caseSensitive={false} element={<FlexPersonalSuccess />} />
            {/* review details */}
            <Route exact path="/flex_review_details" caseSensitive={false} element={<Flexwilldetails ispayment={ispayment} setispayment={setispayment} />} />

            {/* payment */}
            <Route exact path="/flex_will_payment" caseSensitive={false} element={<Flexwillpayment />} />

            <Route exact path="/spouse_review" caseSensitive={false} element={<SpouseReview />} />
        </Routes>
    )
}
export default Router