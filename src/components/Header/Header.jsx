import s from "./style.module.css"
import {Logo} from "../logo";
import logo from "assets/images/logo.png"
import {ButtonPrimary} from "../ButtonPrimary/ButtonPrimary";
import {useNavigate} from "react-router-dom";
export function Header() {
    const naviage = useNavigate()
    return(
        <div   className={`row ${s.container}`}>
            <div className="col-xs-12 col-sm-4">
                <Logo onClik={()=>naviage("/")} title="Notomatic" subtitle="Manage your notes" image={logo}/>
            </div>
            <div className="col-xs-12 col-sm-8 text-end">
                <ButtonPrimary onClik={()=>naviage("/note/new")}>
                    Add note +
                </ButtonPrimary>
            </div>

    </div>)
}