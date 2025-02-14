import {MapIcon, Menu} from "lucide-react";
import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import {useLoginStore} from "@/store/store"

interface IndexHeaderProps {
}

const IndexHeader: FunctionComponent<IndexHeaderProps> = () => {
    const isLogin = useLoginStore((state) => state.isLogin);

    return (
        <div className="flex justify-between px-1 mb-3">
            <div className="flex items-center gap-2">
                <img src="profileCircle.svg" alt="profile image" width="30%"/>
                <div>
                    {isLogin && <span>소로소님</span>}
                    {!isLogin && <Link to="login">로그인</Link>}
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <Link to="map">
                    <MapIcon/>
                </Link>
                <Link to="#">
                    <Menu/>
                </Link>
            </div>
        </div>
    );
};

export default IndexHeader;
