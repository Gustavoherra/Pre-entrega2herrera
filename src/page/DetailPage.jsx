import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  let { id } = useParams();

  const [char, setChar] = useState([]);

  // console.log(char);

  useEffect(() => {
    axios().then((res) =>
      setChar(res.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {char.id ? <CardUser char={char} /> : null}
    </div>
  );
};

export default DetailPage;
