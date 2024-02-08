import React, { useState } from "react";


import styles from "../../styles/Sidebar.module.css";
import CategoryMenu from "./CategoryMenu";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
   <section>
    {show ?      <>
                    <div className={styles.title} onClick={() => setShow(!show)}>CLOSE</div>
                    <CategoryMenu/>
                  </>
              : <div className={styles.linkCat} onClick={() => setShow(!show)}>C<br/>A<br/>T<br/>E<br/>G<br/>O<br/>R<br/>Y<br/></div>}
    </section>
  );
};
export default Sidebar;


 


