import React from "react";
import redBanana from "../../assets/images/red-banana.jpg";
import yelakkiBanana from "../../assets/images/yelakki-banana.jpg";
import monthanBanana from "../../assets/images/monthan-banana.jpg";
import hillBanana from "../../assets/images/hill-banana.jpg";
import karpuravalaiBanana from "../../assets/images/karpuravalai.jpg";
import nendranBanana from "../../assets/images/nendran.jpg";
import "./Farms.css";

const farms = [
  { name: "Hillcrest Farm", loc: "Kotagiri Hills, Tamil Nadu", desc: "Home of our signature Hill Banana, grown at 1,200m elevation.", image: karpuravalaiBanana },
  { name: "Riverbend Farm", loc: "Coimbatore District", desc: "Specialises in Red Banana and Elaichi Banana varieties.", image: redBanana },
  { name: "Sunrise Grove", loc: "Erode District", desc: "Our largest farm, producing Yelakki and Poovan bananas.", image: yelakkiBanana },
  { name: "Green Valley Estate", loc: "Nilgiris", desc: "Focused on organic Raw and Monthan banana cultivation.", image: monthanBanana },
  { name: "Hillside Farm", loc: "Yelagiri", desc: "A scenic hill region surrounded by fertile agricultural landscapes.", image: hillBanana },
  { name: "Tiruchirappalli Farm", loc: "Tiruchirappalli", desc: "Premium banana-growing lands along the fertile Cauvery region.", image: nendranBanana },

];

export default function Farms() {
  return (
    <>
      <section className="section section-first">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Where It All Begins</div>
            <h2>Four Farms, One Promise of Freshness</h2>
            <p>Each of our farms specialises in different banana varieties, matched to the ideal soil and climate.</p>
          </div>
          <div className="farm-grid">
            {farms.map((f, i) => (
              <div className="farm-card" key={i}>
                <div className="img">
                  <img src={f.image} alt={f.name} />
                </div>
                <div className="body">
                  <h3>{f.name}</h3>
                  <p style={{ fontWeight: 600, color: "var(--gold-dark)", marginBottom: 6 }}>{f.loc}</p>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
