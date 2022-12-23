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
import ChildReview from '../pages/allaboutflexwill/flexwillpersonal/childReview';
import ProChildReview from '../pages/PROWILLALL/PersonalInformation/childreview';
import ProSpouseReview from '../pages/PROWILLALL/PersonalInformation/spousereview';
import ProPersonalSuccess from '../pages/success/proPersonalsuccess';
import Registerpop from '../pages/auth/registerpop';
import ForgotOtp from '../pages/auth/password/forgotOtp';
import ProRsa from '../pages/PROWILLALL/proAsset/Assets/ProRsa';
import Prodistribute1 from '../pages/PROWILLALL/proAsset/Assets/prodistribute1';
import AssetsRSA from '../pages/PROWILLALL/proAsset/Assets/AssetsRSA';
import ProCash from '../pages/PROWILLALL/proAsset/Assets/ProCash';
import Prodistribute2 from '../pages/PROWILLALL/proAsset/Assets/prodistribute2';
import AssetsCash from '../pages/PROWILLALL/proAsset/Assets/AssetsCash';
import ProFormRealEstate from '../pages/PROWILLALL/proAsset/Assets/ProFormReal';
import AssetsRealEstate from '../pages/PROWILLALL/proAsset/Assets/AssetsRealEs';
import Prodistribute3 from '../pages/PROWILLALL/proAsset/Assets/prodistribute3';
import ProFormShares from '../pages/PROWILLALL/proAsset/Assets/ProFormShare';
import Prodistribute4 from '../pages/PROWILLALL/proAsset/Assets/prodistribute4';
import AssetsShare from '../pages/PROWILLALL/proAsset/Assets/AssetsShare';
import ProLifeInsuranceForm from '../pages/PROWILLALL/proAsset/Assets/ProFormLife';
import Prodistribute5 from '../pages/PROWILLALL/proAsset/Assets/prodistribute5';
import AssetsLifeInsurance from '../pages/PROWILLALL/proAsset/Assets/AssetsInsurance';
import ProInvestmentForm from '../pages/PROWILLALL/proAsset/Assets/ProFormInvestment';
import Prodistribute6 from '../pages/PROWILLALL/proAsset/Assets/prodistribute6';
import AssetsInvestment from '../pages/PROWILLALL/proAsset/Assets/AssetsInvestment';
import ProFormPersonal from '../pages/PROWILLALL/proAsset/Assets/ProFormPersonal';
import Prodistribute7 from '../pages/PROWILLALL/proAsset/Assets/prodistribute7';
import AssetsPersonal from '../pages/PROWILLALL/proAsset/Assets/AssetsPersonal';
import ProMainAsset from '../pages/PROWILLALL/proAsset/Assets/ProASSETMAIN';
import ProAssetsSuccess from '../pages/success/proAssetsuccess';
import AssetsOther from '../pages/PROWILLALL/proAsset/Assets/AssetsOther';
import ProOtherForm from '../pages/PROWILLALL/proAsset/Assets/ProFormOther';
import ProReviewDetails from '../pages/ReviewDetails/ProReviewdetails';
import ProPayment from '../pages/WillPAYMENT/proPayment';
import ProReviewSuccess from '../pages/success/proReviewsuccess';
import FlexPayment from '../pages/WillPAYMENT/flexPayment';
import FlexReviewSuccess from '../pages/success/flexReviewSuccess';
import TrustPersonalLanding from '../pages/TESTAMENTARYTRUST/LANDING/TrustPersonal';
import TrustPersonalinfo from '../pages/TESTAMENTARYTRUST/TrustPersonalInfo/TrustPersonalinfo';
import TrustChildReview from '../pages/TESTAMENTARYTRUST/TrustPersonalInfo/trustChildreview';
import TrustSpouseReview from '../pages/TESTAMENTARYTRUST/TrustPersonalInfo/trustSpousereview';
import TrustExecutorLanding from '../pages/TESTAMENTARYTRUST/LANDING/Trustexecutor';
import TrustPersonalSuccess from '../pages/success/trustPersonalsuccess';
import Trustexecutorsuccess from '../pages/success/trustExecutorsuccess';
import TrustReviewDetails from '../pages/ReviewDetails/trustReviewdetail';
import TrustReviewSuccess from '../pages/success/trustReviewsuccess';
import CompactPersonalLanding from '../pages/COMPACTALL/LANDING/CompactPersonallanding';
import Compactpersonalinfo from '../pages/COMPACTALL/CompactPersonalInfo/CompactPersonalinfo';
import CompactPersonalSuccess from '../pages/success/compactPersonalsuccess';
import CompactChildReview from '../pages/COMPACTALL/CompactPersonalInfo/Compactchildreview';
import CompactSpouseReview from '../pages/COMPACTALL/CompactPersonalInfo/CompactSpouseReview';
import CompactExecutorLanding from '../pages/COMPACTALL/LANDING/Compactexecutorlanding';
import Compactexecutorsuccess from '../pages/success/compactexecutorsuccess';
import CompactAssetLanding from '../pages/COMPACTALL/LANDING/CompactAssetlanding';
import Dashboard from '../pages/DASHBOARDALL/dashboard/dashboard';
import Will from '../pages/DASHBOARDALL/Will/Will';
import Settings from '../pages/DASHBOARDALL/Settings/Settings';
import DashboardFaqs from '../pages/DASHBOARDALL/FAQs/Faqs';
import Register1 from '../pages/auth/register1';
import Register2 from '../pages/auth/register2';
import RESETPassword from '../pages/auth/password/RESETpassword/resetpassword';
import ResetCreatepassword from '../pages/auth/password/RESETpassword/resetCreatepss';
import ResetCreatePwdsuccess from '../pages/success/resetCreatepsSuccess';
import RegFaq from '../pages/RegFAQs/RegFaq';


const Router = () => {

    const [ispayment, setispayment] = useState(false)

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Landing />} />
            <Route exact path="/register1" caseSensitive={false} element={<Register />} />
            <Route exact path="/register" caseSensitive={false} element={<Register1 />} />
            <Route exact path="/register2" caseSensitive={false} element={<Register2 />} />
            <Route exact path="/login" caseSensitive={false} element={<Signin />} />
            <Route exact path="/register_pop" caseSensitive={false} element={<Registerpop />} />
            <Route exact path="/register_success" caseSensitive={false} element={<Registersuccess />} />
            <Route exact path="/forgot_password" caseSensitive={false} element={<Fpassword />} />
            <Route exact path="/forgot_otp_password" caseSensitive={false} element={<ForgotOtp />} />
            <Route exact path="/create_new_password" caseSensitive={false} element={<Createpassword />} />
            <Route exact path="/createpassword_success" caseSensitive={false} element={<CreatePwdsuccess />} />
            <Route exact path="/product_landing" caseSensitive={false} element={<Productlanding />} />
            <Route exact path="/executor_success" caseSensitive={false} element={<Executorsuccess />} />

            <Route exact path="/reset_password" caseSensitive={false} element={<RESETPassword />} />
            <Route exact path="/reset_create_password" caseSensitive={false} element={<ResetCreatepassword />} />

            <Route exact path="/faqs" caseSensitive={false} element={<RegFaq />} />

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
            <Route exact path="/spouse_review" caseSensitive={false} element={<SpouseReview />} />
            <Route exact path="/child_review" caseSensitive={false} element={<ChildReview />} />


            {/* pro will route */}
            <Route exact path="/pro_personal_landing" caseSensitive={false} element={<ProPersonalLanding />} />
            <Route exact path="/pro_assets_landing" caseSensitive={false} element={<ProAssetLanding />} />
            <Route exact path="/pro_executor_landing" caseSensitive={false} element={<ProExecutorLanding />} />
            <Route exact path="/pro_executor_success" caseSensitive={false} element={<Proexecutorsuccess />} />
            <Route exact path="/pro_personalinfo/:page" caseSensitive={false} element={<Propersonalinfo />} />
            <Route exact path="/pro_child_review" caseSensitive={false} element={<ProChildReview />} />
            <Route exact path="/pro_spouse_review" caseSensitive={false} element={<ProSpouseReview />} />
            <Route exact path="/pro_assets" caseSensitive={false} element={<ProAssets />} />
            <Route exact path="/pro_rsa_form" caseSensitive={false} element={<ProRsa />} />
            <Route exact path="/pro_distribute_assets1" caseSensitive={false} element={<Prodistribute1 />} />
            <Route exact path="/pro_assetrsa" caseSensitive={false} element={<AssetsRSA />} />
            <Route exact path="/pro_cash_form" caseSensitive={false} element={<ProCash />} />
            <Route exact path="/pro_distribute_assets2" caseSensitive={false} element={<Prodistribute2 />} />
            <Route exact path="/pro_assetcash" caseSensitive={false} element={<AssetsCash />} />
            <Route exact path="/pro_real_estate_form" caseSensitive={false} element={<ProFormRealEstate />} />
            <Route exact path="/pro_asset_realestate" caseSensitive={false} element={<AssetsRealEstate />} />
            <Route exact path="/pro_distribute_assets3" caseSensitive={false} element={<Prodistribute3 />} />
            <Route exact path="/pro_shares_form" caseSensitive={false} element={<ProFormShares />} />
            <Route exact path="/pro_distribute_assets4" caseSensitive={false} element={<Prodistribute4 />} />
            <Route exact path="/pro_asset_share" caseSensitive={false} element={<AssetsShare />} />
            <Route exact path="/pro_lifeinsurance_form" caseSensitive={false} element={<ProLifeInsuranceForm />} />
            <Route exact path="/pro_distribute_asset5" caseSensitive={false} element={<Prodistribute5 />} />
            <Route exact path="/pro_asset_lifeinsurance" caseSensitive={false} element={<AssetsLifeInsurance />} />
            <Route exact path="/pro_asset_investment_form" caseSensitive={false} element={<ProInvestmentForm />} />
            <Route exact path="/pro_distribute_asset6" caseSensitive={false} element={<Prodistribute6 />} />
            <Route exact path="/pro_asset_investment" caseSensitive={false} element={<AssetsInvestment />} />

            <Route exact path="/pro_asset_personal_form" caseSensitive={false} element={<ProFormPersonal />} />
            <Route exact path="/pro_distribute_assets7" caseSensitive={false} element={<Prodistribute7 />} />
            <Route exact path="/pro_asset_personal" caseSensitive={false} element={<AssetsPersonal />} />

            <Route exact path="/pro_asset_other_form" caseSensitive={false} element={<ProOtherForm />} />
            <Route exact path="/pro_assets_other" caseSensitive={false} element={<AssetsOther />} />

            <Route exact path="/pro_main_assets" caseSensitive={false} element={<ProMainAsset />} />


            {/* testamentary trust */}
            <Route exact path="/trust_personal_landing" caseSensitive={false} element={<TrustPersonalLanding />} />
            <Route exact path="/trust_personalinfo/:page" caseSensitive={false} element={<TrustPersonalinfo />} />
            <Route exact path="/trust_child_review" caseSensitive={false} element={<TrustChildReview />} />
            <Route exact path="/trust_spouse_review" caseSensitive={false} element={<TrustSpouseReview />} />
            <Route exact path="/trust_executor_landing" caseSensitive={false} element={<TrustExecutorLanding />} />
            <Route exact path="/trust_reviewdetails" caseSensitive={false} element={<TrustReviewDetails />} />

            {/* compact will */}
            <Route exact path="/compact_personal_landing" caseSensitive={false} element={<CompactPersonalLanding />} />
            <Route exact path="/compact_personalinfo/:page" caseSensitive={false} element={<Compactpersonalinfo />} />
            <Route exact path="/compact_child_review" caseSensitive={false} element={<CompactChildReview />} />
            <Route exact path="/compact_spouse_review" caseSensitive={false} element={<CompactSpouseReview />} />
            <Route exact path="/compact_executor_landing" caseSensitive={false} element={<CompactExecutorLanding />} />
            <Route exact path="/compact_assets_landing" caseSensitive={false} element={<CompactAssetLanding />} />


            {/* success */}
            <Route exact path="/flex_assets_success" caseSensitive={false} element={<FlexAssetsuccess />} />
            <Route exact path="/book_an_appointment" caseSensitive={false} element={<BookanAppointment />} />
            <Route exact path="/flex_personal_success" caseSensitive={false} element={<FlexPersonalSuccess />} />
            <Route exact path="/pro_personal_success" caseSensitive={false} element={<ProPersonalSuccess />} />
            <Route exact path="/pro_assets_success" caseSensitive={false} element={<ProAssetsSuccess />} />
            <Route exact path="/pro_review_success" caseSensitive={false} element={<ProReviewSuccess />} />
            <Route exact path="/flex_review_success" caseSensitive={false} element={<FlexReviewSuccess />} />
            <Route exact path="/trust_personal_success" caseSensitive={false} element={<TrustPersonalSuccess />} />
            <Route exact path="/trust_executor_sucess" caseSensitive={false} element={<Trustexecutorsuccess />} />
            <Route exact path="/trust_review_success" caseSensitive={false} element={<TrustReviewSuccess />} />
            <Route exact path="/compact_personal_success" caseSensitive={false} element={<CompactPersonalSuccess />} />
            <Route exact path="/compact_executor_success" caseSensitive={false} element={<Compactexecutorsuccess />} />
            <Route exact path="/success_password_reset" caseSensitive={false} element={<ResetCreatePwdsuccess />} />
            {/* review details */}
            <Route exact path="/flex_review_details" caseSensitive={false} element={<Flexwilldetails />} />
            <Route exact path="/pro_review_details" caseSensitive={false} element={<ProReviewDetails />} />
            {/* payment */}
            <Route exact path="/flex_will_payment" caseSensitive={false} element={<Flexwillpayment />} />
            <Route exact path="/pro_payment" caseSensitive={false} element={<ProPayment />} />
            <Route exact path="/flex_payment" caseSensitive={false} element={<FlexPayment />} />

            <Route exact path="/spouse_review" caseSensitive={false} element={<SpouseReview />} />


            {/* dashboard */}
            <Route exact path="/dashboard" caseSensitive={false} element={<Dashboard />} />
            <Route exact path="/will" caseSensitive={false} element={<Will />} />
            <Route exact path="/settings" caseSensitive={false} element={<Settings />} />
            <Route exact path="/dashboard_faqs" caseSensitive={false} element={<DashboardFaqs />} />
        </Routes>
    )
}
export default Router