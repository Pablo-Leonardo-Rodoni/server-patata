import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";
import { NotF } from "./NotF";
import { LottieContainer } from "../Lottie/LottieContainer";
import "../assets/styles/info.css";

export const Info = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const selectedData = [Data.EARTH, Data.WATER, Data.FIRE, Data.WIND];
  const serverData = selectedData.find((server) => server.id === id);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <LottieContainer />;
  }

  if (!serverData) {
    return <NotF />;
  }

  return (
    <main>
      <div className="container-info">
        <div className="info-content">
          <h2 className="server-name">{serverData.name}</h2>
          <p className="server-lore">{serverData.lore}</p>
          <button type="button" className="server-button">
            <a className="server-anchor" href={serverData.download}></a>
          </button>
        </div>
      </div>
    </main>
  );
};
