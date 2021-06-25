import {connect} from "react-redux";
import MyAccount from "./MyAccount";

function logOut() {
    console.log(1)
}
const mapStateToProps = (state: any) => ({
    myProfile: state.auth.myProfile
})

const MyAccountContainer = connect(mapStateToProps, {logOut})(MyAccount);

export default MyAccountContainer;