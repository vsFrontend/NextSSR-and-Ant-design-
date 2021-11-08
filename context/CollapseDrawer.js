import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import useWindowSize from "~/hooks/useWindowSize";

const initialState = {
  isCollapse: false,
  handleToggleCollapse: () => {},
};
const CollapseDrawerContext = createContext(initialState);

CollapseDrawerProvider.propTypes = {
  children: PropTypes.node,
};

function CollapseDrawerProvider({ children }) {
  const { width } = useWindowSize();
  const isMobile = width <= 760;

  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [isMobile]);

  const handleToggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: collapse,
        handleToggleCollapse,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
}

export { CollapseDrawerProvider, CollapseDrawerContext };
