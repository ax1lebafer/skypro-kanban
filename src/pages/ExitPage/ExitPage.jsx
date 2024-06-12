import PopExit from "../../components/PopExit/PopExit";
import { useUser } from "../../hooks/useUser";

const ExitPage = () => {
    const { logout } = useUser();

    return ( <PopExit logout={logout}/> );
}
 
export default ExitPage;