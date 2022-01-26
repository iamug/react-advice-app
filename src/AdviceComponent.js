import React, { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_BASEURL } = process.env;

const AdviceComponent = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchState, setFetchState] = useState(false);

  const fetchadvice = async () => {
    setLoading(false);
    setFetchState(false);
    let response = await axios.get(`${REACT_APP_BASEURL}advice`);
    console.log({ response });
    const { advice } = response.data.slip;
    setAdvice(advice);
    setLoading(true);
    setTimeout(() => setFetchState(true), 5000);
  };

  useEffect(() => {
    fetchadvice();
    //fetch();
    //   return () => {
    //       cleanup
    //   }
  }, []);

  return (
    <div className="container">
      {loading ? (
        <>
          <h2> {advice} </h2>
          {fetchState ? (
            <button onClick={() => fetchadvice()}>Give me advice</button>
          ) : (
            <button style={{ background: "#888888" }} disabled={fetchState}>
              Please wait....
            </button>
          )}
        </>
      ) : (
        <img src="loading.gif" alt="loading" />
      )}
    </div>
  );
};

export default AdviceComponent;
