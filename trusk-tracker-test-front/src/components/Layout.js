import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import {useStyletron} from 'baseui';

const Layout = ({ children }) => {
    const [css] = useStyletron();
    return (
        <Block className={css({width: '90vw', marginTop: '20px', borderRadius: '15px',})}
            >
          {children}
        </Block>
);}

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: undefined
};

export default Layout;
