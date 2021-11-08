import { useContext } from "react";
import { CollapseDrawerContext } from "~/context/CollapseDrawer";

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
