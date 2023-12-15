import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LottieContainer } from "../Lottie/LottieContainer";
import { NotF } from "./NotF";
import "../assets/styles/review.css";
import Data from "../data/data.json";

export const Review = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const selectedData = [Data.EARTH, Data.WATER, Data.FIRE, Data.WIND];
  const serverInfo = selectedData.find((server) => server.id === id);

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

  if (!serverInfo) {
    return <NotF />;
  }

  return (
    <>
      <main>
        <div className="review-container">
          <div className="review-content">
            <h2 className="review-name">{serverInfo.name}</h2>
            <ul className="review-ul">
              <li className="review-li">
                <span className="review-info">{serverInfo.info.rates}</span>
                <span className="img-info">
                  <img alt="info-span" src="/src/images/info/expSpGold.png" />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">{serverInfo.info.exp}</span>
                <span className="img-info">
                  <img alt="info-span" src="/src/images/info/expSp.png" />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">{serverInfo.info.drop}</span>
                <span className="img-info">
                  <img alt="info-span" src="/src/images/info/adena.png" />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">
                  {serverInfo.info.safeChantWeapon}
                </span>
                <span className="img-info">
                  <img
                    alt="info-span"
                    src="/src/images/info/scrollWeapon.png"
                  />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">
                  {serverInfo.info.maxChantWeapon}
                </span>
                <span className="img-info">
                  <img
                    alt="info-span"
                    src="/src/images/info/scrollBlessedWeapon.png"
                  />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">
                  {serverInfo.info.safeChantArmor}
                </span>
                <span className="img-info">
                  <img alt="info-span" src="/src/images/info/scrollArmor.png" />
                </span>
              </li>
              <li className="review-li">
                <span className="review-info">
                  {serverInfo.info.maxChantArmor}
                </span>
                <span className="img-info">
                  <img
                    alt="info-span"
                    src="/src/images/info/scrollArmorBless.png"
                  />
                </span>
              </li>
            </ul>
            <span className="review-info">
              {serverInfo.info.custom ? "yes" : "no"}
            </span>
          </div>
        </div>
      </main>
    </>
  );
};
