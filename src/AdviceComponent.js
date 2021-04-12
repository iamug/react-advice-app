import React, { useState, useEffect } from "react";
import axios from "axios";

const AdviceComponent = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchadvice = async () => {
    setLoading(false);
    let response = await axios.get("https://api.adviceslip.com/advice");
    console.log({ response });
    const { advice } = response.data.slip;
    setAdvice(advice);
    setLoading(true);
  };

  useEffect(async () => {
    await fetchadvice();
    //   return () => {
    //       cleanup
    //   }
  }, []);

  return (
    <div className="container">
      {loading ? (
        <>
          <h2> {advice} </h2>
          <button onClick={() => fetchadvice()}> Give me advice </button>
        </>
      ) : (
        <img src="loading.gif" />
      )}
    </div>
  );
};

export default AdviceComponent;
