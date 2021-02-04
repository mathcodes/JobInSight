import React, { useState } from "react";
import {motion} from "framer-motion";

function MovieDetail(props) {
   const [isActive, setIsActive] = React.useState(false);
  return (
     <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 180 : 0
      }}
    >
     <button>
     <video controls="controls" width="200" height="auto" 
       name="Video Name" src="JISsm.mov"></video>
    </button></motion.div>
    
  );
}

export default MovieDetail;