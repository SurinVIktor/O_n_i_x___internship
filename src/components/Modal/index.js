import React from "react";

import "./style.css";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    componentDidUpdate(prevProps) {
        if(this.props.showModal !== prevProps.showModal) {
            this.setState(({
                show: this.props.showModal
            }));
        }
    }

    handleHideModal() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                <div className={'modal ' + (this.state.show ? 'show ' + this.props.statusModal : '')}>
                    <div className="modal-header"><h4>{this.props.statusModal === 'success' ? 'Успех' : 'Ошибка'}</h4>{this.props.headerModal && this.props.headerModal}</div>
                    <div className="modal-body">
                        <p>{this.props.bodyModal}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.handleHideModal.bind(this)}>Ok</button>
                    </div>
                </div>
                <div className={'overlay ' + (this.state.show ? 'show' : '')} />
            </div>
        )
    }
}

export default Modal;


// const Modal = ({ showModal, statusModal, headerModal, bodyModal }) => {
//     const [show, setShow] = useState(false);
//
//     useEffect(() => {
//         setShow(showModal);
//     }, [showModal]);
//
//     const handleHideModal = () => {
//         setShow(false);
//     }
//
//     return (
//         <div>
//             <div className={'modal ' + (show ? 'show ' + statusModal : '')}>
//                 <div className="modal-header"><h4>{statusModal === 'success' ? 'Успех' : 'Ошибка'}</h4>{headerModal && headerModal}</div>
//                 <div className="modal-body">
//                     <p>{bodyModal}</p>
//                 </div>
//                 <div className="modal-footer">
//                     <button onClick={handleHideModal}>Ok</button>
//                 </div>
//             </div>
//             <div className={'overlay ' + (show ? 'show' : '')} />
//         </div>
//     )
// }
//
// export default Modal;
