import SucessCheck from "../../assets/images/icon-success-check.svg";
import "./Toast.css";

const Toast = () => {
	return (
		<div className="toast-container" role="dialog" aria-labelledby="toastTitle" aria-describedby="toastContent">
			<div className="title">
				<img src={SucessCheck} alt="sucess checkmark icon" />
				<h2 id="toastTitle">Message Sent!</h2>
			</div>
			<div id="toastContent" className="content">
				Thanks for completing the form. We'll be in touch soon!
			</div>
		</div>
	);
};

export default Toast;
