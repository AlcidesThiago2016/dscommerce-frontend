/* eslint-disable @typescript-eslint/ban-types */
import BottonInverse from "../BottonInverse";

type Props = {
    message: string;
    onDialogClose: Function;
}


export default function DialogInfo({ message, onDialogClose}: Props){

    return(
        <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" onClick={() => onDialogClose()}>
                    <BottonInverse  text="Ok"/>
                </div> 
            </div>
        </div>
    )
}