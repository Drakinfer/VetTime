import '../../assets/css/components/PopupValidation.css'

const PopupValidation = (props) => {
    return (
        <>
            <div className="popup-content">
            <span className="close" onClick={props.onClose}>
                &times;
            </span>
                <p>Valider vous ce créneau?</p>
                <button onClick={props.handleValidation} >Valider</button>
            </div>
        </>
    )
    ;
  };
  
  export default PopupValidation;