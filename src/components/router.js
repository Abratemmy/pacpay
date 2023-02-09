import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Createpassword from '../pages/auth/password/createpassword';
import Fpassword from '../pages/auth/password/fpassword';
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
import BookanAppointment from '../pages/success/bookappointment';
import FlexPersonalSuccess from '../pages/success/flexpersonalsuccess';
import SpouseReview from '../pages/allaboutflexwill/flexwillpersonal/spouseReview';
import ChildReview from '../pages/allaboutflexwill/flexwillpersonal/childReview';
import ProChildReview from '../pages/PROWILLALL/PersonalInformation/childreview';
import ProSpouseReview from '../pages/PROWILLALL/PersonalInformation/spousereview';
import ProPersonalSuccess from '../pages/success/proPersonalsuccess';
import Registerpop from '../pages/auth/registerpop';
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
import RESETPassword from '../pages/auth/password/RESETpassword/resetpassword';
import ResetCreatepassword from '../pages/auth/password/RESETpassword/resetCreatepss';
import ResetCreatePwdsuccess from '../pages/success/resetCreatepsSuccess';
import RegFaq from '../pages/RegFAQs/RegFaq';
import Booking from '../pages/Booking/Booking';
import CompactAsset from '../pages/COMPACTALL/CompactAsset/CompactAsset';
import CompactRSAForm from '../pages/COMPACTALL/CompactAsset/compact1RSA/compactRSAform';
import CompactRsaDistribute from '../pages/COMPACTALL/CompactAsset/compact1RSA/compactRsadist';
import CompactAssetRsa from '../pages/COMPACTALL/CompactAsset/compact1RSA/compactRsa';
import Compactcashlanding from '../pages/COMPACTALL/CompactAsset/CompactCash/compactcashlanding';
import CompactCashForm from '../pages/COMPACTALL/CompactAsset/CompactCash/compactcashform';
import FlexwillPersonalLanding from '../pages/allaboutflexwill/Landing/flexwillpersonal';
import FlexwillExecutorLanding from '../pages/allaboutflexwill/Landing/flexwillexecutor';
import FlexwillAssetLanding from '../pages/allaboutflexwill/Landing/flexwillassets';
import CompactCashDistribute from '../pages/COMPACTALL/CompactAsset/CompactCash/compactdistribute';
import BookingSuccess from '../pages/success/bookingsuccess';
import CompactCashAsset from '../pages/COMPACTALL/CompactAsset/CompactCash/compactcashasset';
import CompactRealEstateForm from '../pages/COMPACTALL/CompactAsset/CompactEstate/comEstateForm';
import CompactRealEstate from '../pages/COMPACTALL/CompactAsset/CompactEstate/CompactestateAsset';
import ComrealEState from '../pages/COMPACTALL/CompactAsset/CompactEstate/ComrealEState';
import CompactsharesForm from '../pages/COMPACTALL/CompactAsset/CompactShares/comsharesForm';
import CompactSharesDistribute from '../pages/COMPACTALL/CompactAsset/CompactShares/comsharedistribute';
import CompactShareAsset from '../pages/COMPACTALL/CompactAsset/CompactShares/compactShareAsset';
import CompactLifeInsuranceForm from '../pages/COMPACTALL/CompactAsset/CompactLIFE/compactlifeForm';
import CompactLifeDistribute from '../pages/COMPACTALL/CompactAsset/CompactLIFE/compactlifedistribute';
import CompactAssetsInsurance from '../pages/COMPACTALL/CompactAsset/CompactLIFE/CompactLifeAsset';
import CompactInvestmentForm from '../pages/COMPACTALL/CompactAsset/comInvestment/comInvestmentForm';
import CompactInvestmentDistribute from '../pages/COMPACTALL/CompactAsset/comInvestment/cominvestmentdistribute';
import CompactAssetsInvestment from '../pages/COMPACTALL/CompactAsset/comInvestment/comInvestmentAsset';
import CompactStockForm from '../pages/COMPACTALL/CompactAsset/CompactStock/ComStocksform';
import CompactStockDistribute from '../pages/COMPACTALL/CompactAsset/CompactStock/comStockdistribute';
import CompactAssetsStock from '../pages/COMPACTALL/CompactAsset/CompactStock/compactstockasset';
import CompactFormOthers from '../pages/COMPACTALL/CompactAsset/compactOthers/comPersonalForm';
import ComOtherAssets from '../pages/COMPACTALL/CompactAsset/compactOthers/comOtherdis';
import CompactShowAllAsset from '../pages/COMPACTALL/CompactAsset/ComShowAllAsset';
import CompactAssetSuccess from '../pages/success/compactassetsuc';
import CompactReviewDetails from '../pages/ReviewDetails/compactReviewdetails';
import CompactPayment from '../pages/WillPAYMENT/compactPayment';
import CompactReviewSuccess from '../pages/success/compactreviewsuc';
import CompactForeignCashForm from '../pages/COMPACTALL/CompactAsset/CompactCash/comForeigncash';
import Procashlanding from '../pages/PROWILLALL/proAsset/Assets/assetcashlanding/procashlanding';
import Flexcashlanding from '../pages/allaboutflexwill/flexwillassets/flexwillpage/cashinnabkLanding';
import FlexForeignCashForm from '../pages/allaboutflexwill/flexwillassets/flexwillpage/flexForeigncash';
import ProForeignCashForm from '../pages/PROWILLALL/proAsset/Assets/proForeignCashform';
import CompactAssetNew from '../pages/COMPACTALL/CompactAsset/CompactAssetNew';
import MainREGISTER from '../pages/auth/mainREGISTER';
import FlexAssets from '../pages/allaboutflexwill/flexwillassets/flexwillpage/FlexAssets';
import ViewPersonal from '../pages/DASHBOARDALL/ViewWill/viewPersonal';
import Notification from '../pages/DASHBOARDALL/Notifications/Notification';
import ViewExecutor from '../pages/DASHBOARDALL/ViewWill/viewExecutor';
import ViewChildren from '../pages/DASHBOARDALL/ViewWill/viewChildren';
import OtherFlex from '../pages/willproducts/otherProducts/otherFlex';
import OtherTestamentary from '../pages/willproducts/otherProducts/otherTestamentary';
import OtherCompact from '../pages/willproducts/otherProducts/otherCompact';
import OtherPro from '../pages/willproducts/otherProducts/otherPro';
import AuthorizationUrl from '../pages/WillPAYMENT/authorizationUrl';
import Error404 from './errorPage/error404';
import MainProForm from '../pages/PROWILLALL/proAsset/mainProForm';


const Router = () => {

    const [ispayment, setispayment] = useState(false)

    return (
        <Routes>

            <Route exact path="/viewchildren/:childId" caseSensitive={false} element={<ViewChildren />} />
            <Route exact path="/flexasset/:page" caseSensitive={false} element={<FlexAssets />} />
            <Route exact path="/" caseSensitive={false} element={<Landing />} />
            <Route exact path="/register" caseSensitive={false} element={<MainREGISTER />} />
            <Route exact path="/login" caseSensitive={false} element={<Signin />} />
            <Route exact path="/register_pop" caseSensitive={false} element={<Registerpop />} />
            <Route exact path="/register_success" caseSensitive={false} element={<Registersuccess />} />
            <Route exact path="/forgot_password" caseSensitive={false} element={<Fpassword />} />
            <Route exact path="/create_new_password" caseSensitive={false} element={<Createpassword />} />
            <Route exact path="/createpassword_success" caseSensitive={false} element={<CreatePwdsuccess />} />
            <Route exact path="/product_landing" caseSensitive={false} element={<Productlanding />} />
            <Route exact path="/flex_executor_success" caseSensitive={false} element={<Executorsuccess />} />

            <Route exact path="/reset_password" caseSensitive={false} element={<RESETPassword />} />
            <Route exact path="/reset_create_password" caseSensitive={false} element={<ResetCreatepassword />} />

            <Route exact path="/faqs" caseSensitive={false} element={<RegFaq />} />
            <Route exact path="/booking" caseSensitive={false} element={<Booking />} />

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
            <Route exact path="/flex_will_personal_landing" caseSensitive={false} element={<FlexwillPersonalLanding />} />
            <Route exact path="/flex_will_executor_landing" caseSensitive={false} element={<FlexwillExecutorLanding />} />
            <Route exact path="/flex_will_assets_landing" caseSensitive={false} element={<FlexwillAssetLanding />} />
            <Route exact path="/flex_cashinbank_landing" caseSensitive={false} element={<Flexcashlanding />} />
            <Route exact path="/flex_foreign_cashform" caseSensitive={false} element={<FlexForeignCashForm />} />


            <Route path="/flex_will_personal_info/:page" key={"/flex_will_personal_info"} caseSensitive={false} element={<Personalform />} />



            {/* pro will route */}
            <Route exact path="/pro_personal_landing" caseSensitive={false} element={<ProPersonalLanding />} />
            <Route exact path="/pro_assets_landing" caseSensitive={false} element={<ProAssetLanding />} />
            <Route exact path="/pro_executor_landing" caseSensitive={false} element={<ProExecutorLanding />} />
            <Route exact path="/pro_executor_success" caseSensitive={false} element={<Proexecutorsuccess />} />
            <Route exact path="/pro_personalinfo/:page" caseSensitive={false} element={<Propersonalinfo />} />
            <Route exact path="/pro_assets" caseSensitive={false} element={<ProAssets />} />
            <Route exact path="/pro_form/:page" caseSensitive={false} element={<MainProForm />} />


            <Route exact path="/pro_rsa_form" caseSensitive={false} element={<ProRsa />} />
            <Route exact path="/pro_distribute_assets1" caseSensitive={false} element={<Prodistribute1 />} />
            <Route exact path="/pro_assetrsa" caseSensitive={false} element={<AssetsRSA />} />
            <Route exact path="/pro_cash_landing" caseSensitive={false} element={<Procashlanding />} />
            <Route exact path="/pro_cash_form" caseSensitive={false} element={<ProCash />} />
            <Route exact path="/pro_foreign_cash_form" caseSensitive={false} element={<ProForeignCashForm />} />
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
            {/* <Route exact path="/trust_child_review" caseSensitive={false} element={<TrustChildReview />} />
            <Route exact path="/trust_spouse_review" caseSensitive={false} element={<TrustSpouseReview />} /> */}
            <Route exact path="/trust_executor_landing" caseSensitive={false} element={<TrustExecutorLanding />} />
            <Route exact path="/trust_reviewdetails" caseSensitive={false} element={<TrustReviewDetails />} />

            {/* compact will */}
            <Route exact path="/compact_personal_landing" caseSensitive={false} element={<CompactPersonalLanding />} />
            <Route exact path="/compact_personalinfo/:page" caseSensitive={false} element={<Compactpersonalinfo />} />
            {/* <Route exact path="/compact_child_review" caseSensitive={false} element={<CompactChildReview />} />
            <Route exact path="/compact_spouse_review" caseSensitive={false} element={<CompactSpouseReview />} /> */}
            <Route exact path="/compact_executor_landing" caseSensitive={false} element={<CompactExecutorLanding />} />
            <Route exact path="/compact_assets_landing" caseSensitive={false} element={<CompactAssetLanding />} />
            <Route exact path="/compact_assets" caseSensitive={false} element={<CompactAsset />} />
            <Route exact path="/compact_rsa_form" caseSensitive={false} element={<CompactRSAForm />} />
            <Route exact path="/compact_rsa_distribute" caseSensitive={false} element={<CompactRsaDistribute />} />
            <Route exact path="/compact_asset_rsa" caseSensitive={false} element={<CompactAssetRsa />} />
            <Route exact path="/compact_cash_landing" caseSensitive={false} element={<Compactcashlanding />} />
            <Route exact path="/compact_cash_form" caseSensitive={false} element={<CompactCashForm />} />
            <Route exact path="/foreign_compact_cashform" caseSensitive={false} element={<CompactForeignCashForm />} />
            <Route exact path="/compact_cash_distribute" caseSensitive={false} element={<CompactCashDistribute />} />
            <Route exact path="/compact_cash_assets" caseSensitive={false} element={<CompactCashAsset />} />
            <Route exact path="/compact_realestate_form" caseSensitive={false} element={<CompactRealEstateForm />} />
            <Route exact path="/compact_realestate_assets" caseSensitive={false} element={<CompactRealEstate />} />
            <Route exact path="/compact_realestate" caseSensitive={false} element={<ComrealEState />} />
            <Route exact path="/compact_shares_form" caseSensitive={false} element={<CompactsharesForm />} />
            <Route exact path="/compact_share_distribute" caseSensitive={false} element={<CompactSharesDistribute />} />
            <Route exact path="/compact_share_assset" caseSensitive={false} element={<CompactShareAsset />} />
            <Route exact path="/compact_lifeinsurance_form" caseSensitive={false} element={<CompactLifeInsuranceForm />} />
            <Route exact path="/compact_life_distribute" caseSensitive={false} element={<CompactLifeDistribute />} />
            <Route exact path="/compact_life_asset" caseSensitive={false} element={<CompactAssetsInsurance />} />
            <Route exact path="/compact_investment_form" caseSensitive={false} element={<CompactInvestmentForm />} />
            <Route exact path="/compact_investment_distribute" caseSensitive={false} element={<CompactInvestmentDistribute />} />
            <Route exact path="/compact_investment_assets" caseSensitive={false} element={<CompactAssetsInvestment />} />
            <Route exact path="/compact_stock_form" caseSensitive={false} element={<CompactStockForm />} />
            <Route exact path="/compact_stock_distribute" caseSensitive={false} element={<CompactStockDistribute />} />
            <Route exact path="/compact_stock_assets" caseSensitive={false} element={<CompactAssetsStock />} />
            <Route exact path="/compact_other_form" caseSensitive={false} element={<CompactFormOthers />} />
            <Route exact path="/compact_others_distribute" caseSensitive={false} element={<ComOtherAssets />} />
            <Route exact path="/compact_showall_assets" caseSensitive={false} element={<CompactShowAllAsset />} />
            <Route exact path="/compactasset_view" caseSensitive={false} element={<CompactAssetNew />} />


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
            <Route exact path="/booking_success" caseSensitive={false} element={<BookingSuccess />} />
            <Route exact path="/compact_asset_success" caseSensitive={false} element={<CompactAssetSuccess />} />
            <Route exact path="/compact_review_success" caseSensitive={false} element={<CompactReviewSuccess />} />

            {/* review details */}
            <Route exact path="/flex_review_details" caseSensitive={false} element={<Flexwilldetails />} />
            <Route exact path="/pro_review_details" caseSensitive={false} element={<ProReviewDetails />} />
            <Route exact path="/compact_review_details" caseSensitive={false} element={<CompactReviewDetails />} />
            {/* payment */}
            <Route exact path="/pro_payment" caseSensitive={false} element={<ProPayment />} />
            <Route exact path="/flex_payment" caseSensitive={false} element={<FlexPayment />} />
            <Route exact path="/compact_payment" caseSensitive={false} element={<CompactPayment />} />
            <Route exact path="/autorization_url" caseSensitive={false} element={<AuthorizationUrl />} />

            <Route exact path="/spouse_review" caseSensitive={false} element={<SpouseReview />} />


            {/* dashboard */}
            <Route exact path="/dashboard" caseSensitive={false} element={<Dashboard />} />
            <Route exact path="/will" caseSensitive={false} element={<Will />} />
            <Route exact path="/settings" caseSensitive={false} element={<Settings />} />
            <Route exact path="/dashboard_faqs" caseSensitive={false} element={<DashboardFaqs />} />
            <Route exact path="/notifications" caseSensitive={false} element={<Notification />} />
            <Route exact path="/view_personal" caseSensitive={false} element={<ViewPersonal />} />
            <Route exact path="/view_executor" caseSensitive={false} element={<ViewExecutor />} />

            <Route exact path="/flexwill_other" caseSensitive={false} element={<OtherFlex />} />
            <Route exact path="/prowill_other" caseSensitive={false} element={<OtherPro />} />
            <Route exact path="/compactwill_other" caseSensitive={false} element={<OtherCompact />} />
            <Route exact path="/testamentarywill_other" caseSensitive={false} element={<OtherTestamentary />} />


            {/* page not found */}
            <Route path='*' caseSensitive={false} element={<Error404 />} />
        </Routes>
    )
}
export default Router