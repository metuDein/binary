import { useContext } from "react";
import DataContext from "@component/context/DataProvider";


const useDataContext = () => {
    return useContext(DataContext)
}
export default useDataContext