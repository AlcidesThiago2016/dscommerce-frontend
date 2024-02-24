import './styles.css'

type Props = {
    text: string;
}

export default function BottonPrimary({text} : Props){
    return(
        <div className="dsc-btn dsc-btn-blue">
             {text}
        </div>
    );
}