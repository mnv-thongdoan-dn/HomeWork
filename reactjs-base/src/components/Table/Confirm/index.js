import React, {Component} from "react";

class PopupConfirm extends Component{

	render(){
		const {title, content, nameBtnOk, nameBtnCancel, handleCancel, handleOk} = this.props;
		return (
			<div onClick={() => handleCancel()} className="popup-confirm-layout">
				<div className="popup-confirm">
					<h3 className="popup-confirm-title">{title || "Confirm"}</h3>
					<div className="popup-confirm-content">{content || "This is content"}</div>
					<div className="popup-confirm-footer">
						<button onClick={() => handleCancel()} className="btn-cancel">{nameBtnCancel || "CANCEL"}</button>
						<button onClick={() => handleOk()} className="btn-ok">{nameBtnOk || "OK"}</button>
					</div>
				</div>
			</div>
		)
	}
}

export default PopupConfirm;
