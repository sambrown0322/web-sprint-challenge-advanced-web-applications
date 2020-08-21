import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getColorList } from "../api/getColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColorList().then((res) => {
      console.log(res);
      setColorList(res.data);
    });
  }, [colorList.length]);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColorList={getColorList}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
