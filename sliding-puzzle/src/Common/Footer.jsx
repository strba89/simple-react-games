/* @flow */

import React from "react";

/**
* Returns render information of the footer component.
* @return {Reac.Element<*>} render info of footer
*/
const Footer = (): React.Element<*> => (
  <footer id="footer">
    <div className="container flex">
      <div className="left-flex">Slagalica Brojeva</div>
      <div className="right-flex">Copyright © <a href='www.septembar.rs'>www.septembar.rs</a> 2018</div>
    </div>
  </footer>
);

export default Footer;
