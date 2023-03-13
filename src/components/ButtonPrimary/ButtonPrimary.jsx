import s from "./style.module.css"
export function ButtonPrimary({children, onClik}) {
    return(
        <button onClick={onClik} type="button" className={`btn btn-primary ${s.button}`}>
            {children}
        </button>
    )
}