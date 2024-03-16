import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';
export const Appbar = () => {
    // const [searchParams] = useSearchParams();
    // const name = searchParams.get("name");

    const navigate = useNavigate();
    return <div className="shadow h-14 flex justify-between bg-slate-400">
        <div className="flex flex-col justify-center h-full ml-4" >
            PayTM App
        </div>
        <div className="flex">
            
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                {/* <span class="text-2xl text-white">{name[0].toUpperCase()}</span> */}U
                </div>
            </div>
            <div className="flex flex-col justify-center h-full mr-4 pt-2">
                <Button onClick={async () => {
                    
                    localStorage.removeItem("token");
                    navigate("/")
                }} label={"Log out"} />
            </div>
        </div>
    </div>
}