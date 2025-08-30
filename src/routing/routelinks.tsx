import { FcHome } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

let routeLinks : any = [
    {
        name : 'Home',
        icon : <FcHome />,
        path : '/home'
    },
    {
        name : 'Users',
        icon : <FcBusinessman />,
        path : '/home/users'
    }
]

export default routeLinks;