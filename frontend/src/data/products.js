import redBanana from "../assets/images/red.jpg";
import elaichiBanana from "../assets/images/elaichi.jpg";
import yelakkiBanana from "../assets/images/yelakki.jpg";
import poovanBanana from "../assets/images/poovan.jpeg";
import rawBanana from "../assets/images/raw.jpg";
import monthanBanana from "../assets/images/monthan.jpg";
import hillBanana from "../assets/images/hill-banana.jpg";
import nendranBanana from "../assets/images/nendran.jpg";
import karpuravalaiBanana from "../assets/images/karpuravalai.jpg";
import rasthaliBanana from "../assets/images/rasthali.jpg";
// Central product list — used by Home (featured picks) and Products page (all 10).
// variant maps to BananaSVG colors: "yellow" | "green" | "red"
//
// `nutrition` and `benefits` power the click-to-open popup on every product
// card (see ProductModal) — nutrition values are per 100g, approximate.
const products = [
  {
    image: redBanana,
    id: "red-banana",
    name: "Red Banana",
    desc: "A premium banana with a distinctive red peel, rich sweetness, creamy texture and naturally aromatic flavor.",
    variant: "red",
    tag: "Popular",
    nutrition: {
      Calories: "90 kcal",
      Carbs: "22 g",
      Fiber: "2.6 g",
      Protein: "1.2 g",
      Potassium: "360 mg",
      "Vitamin C": "10 mg",
    },
    benefits: [
      "High in anthocyanin antioxidants that support heart health",
      "Rich in vitamin C to help boost immunity",
      "Creamy texture makes it easy to digest",
      "Good source of potassium for healthy blood pressure",
    ],
  },
  {
    image: rasthaliBanana,
    id: "rasthali-banana",
    name: "Rasthali Banana",
    desc: "Delicately aromatic and naturally sweet, Rasthali Banana delivers a smooth, creamy texture and premium flavor.",
    variant: "yellow",
    nutrition: {
      Calories: "100 kcal",
      Carbs: "25 g",
      Fiber: "2.2 g",
      Protein: "1.2 g",
      Potassium: "350 mg",
      "Vitamin B6": "0.35 mg",
    },
    benefits: [
      "Rich natural sweetness, a favourite for festive offerings",
      "Vitamin B6 supports energy metabolism and mood",
      "Thin skin makes it quick and easy to peel and eat",
      "Great natural pick-me-up between meals",
    ],
  },
  
  {
    image: yelakkiBanana,
    id: "yelakki-banana",
    name: "Yelakki Banana",
    desc: "A premium small-sized banana with an irresistible aroma, naturally sweet flavor and smooth, creamy texture.",
    variant: "yellow",
    nutrition: {
      Calories: "95 kcal",
      Carbs: "23 g",
      Fiber: "2.4 g",
      Protein: "1.1 g",
      Potassium: "330 mg",
      "Vitamin C": "9 mg",
    },
    benefits: [
      "Gentle on the stomach — good for sensitive digestion",
      "Contains prebiotic fibre that supports gut bacteria",
      "Low in fat, ideal for a light everyday snack",
      "Naturally hydrating with a high water content",
    ],
  },
  {
    image: poovanBanana,
    id: "poovan-banana",
    name: "Poovan Banana",
    desc: "Naturally sweet and aromatic, Poovan Banana offers a smooth texture and authentic traditional flavor.",
    variant: "yellow",
    nutrition: {
      Calories: "98 kcal",
      Carbs: "24 g",
      Fiber: "2.3 g",
      Protein: "1.1 g",
      Potassium: "340 mg",
      Iron: "0.3 mg",
    },
    benefits: [
      "Firm flesh holds up well in cooked and fried dishes",
      "Good everyday source of quick, natural carbohydrates",
      "Contains iron that supports healthy red blood cells",
      "Mild tang pairs well with savoury South Indian recipes",
    ],
  },
  {
    image: nendranBanana,
    id: "nendran-banana",
    name: "Nendran Banana",
    desc: "A premium traditional banana with firm texture, rich flavor and exceptional versatility for cooking, steaming and crispy banana chips.",
    variant: "green",
    nutrition: {
      Calories: "119 kcal",
      Carbs: "31 g",
      Fiber: "2.3 g",
      "Vitamin A": "Good source",
      Potassium: "410 mg",
    },
    benefits: [
      "Good source of vitamin A, supporting healthy vision",
      "Classic choice for crisp, golden banana chips",
      "High energy content, great for active lifestyles",
      "Traditional Kerala staple rich in dietary fibre",
    ],
  },
  
  {
    image: monthanBanana,
    id: "monthan-banana",
    name: "Monthan Banana",
    desc: "Firm, starchy and versatile, Monthan Banana is a trusted choice for traditional cooking, curries, fries and banana chips.",
    variant: "green",
    nutrition: {
      Calories: "122 kcal",
      Carbs: "31 g",
      Fiber: "2.3 g",
      Protein: "1.3 g",
      Potassium: "420 mg",
      Magnesium: "37 mg",
    },
    benefits: [
      "Dense complex carbs make it a great pre-workout food",
      "High potassium supports healthy muscle function",
      "Magnesium content helps with energy metabolism",
      "Traditional festival favourite, cooks well in curries",
    ],
  },
  {
    image: hillBanana,
    id: "hill-banana",
    name: "Hill Banana",
    desc: "Naturally grown in the hills, Hill Banana is prized for its rich aroma, distinctive flavor, firm texture and premium quality.",
    variant: "green",
    tag: "Special",
    nutrition: {
      Calories: "105 kcal",
      Carbs: "27 g",
      Fiber: "3.1 g",
      Protein: "1.3 g",
      Potassium: "400 mg",
      Magnesium: "32 mg",
    },
    benefits: [
      "Grown on natural hill soil for extra aroma and sweetness",
      "Rich in potassium and magnesium for heart & muscle health",
      "High fibre content supports healthy digestion",
      "Naturally energising — no artificial ripening, ever",
      "Loaded with antioxidants thanks to slow, natural ripening",
    ],
  },
  {
    image: rawBanana,
    id: "raw-banana",
    name: "Raw Banana",
    desc: "Fresh, firm and versatile, Raw Banana is ideal for traditional cooking, curries, fries and crispy banana chips.",
    variant: "green",
    nutrition: {
      Calories: "89 kcal",
      Carbs: "24 g",
      Fiber: "2.8 g",
      "Resistant Starch": "High",
      Potassium: "350 mg",
      "Vitamin B6": "0.3 mg",
    },
    benefits: [
      "Rich in resistant starch — supports stable blood sugar",
      "High fibre content keeps you fuller for longer",
      "Popular low-GI choice for weight-conscious diets",
      "Versatile for curries, chips and traditional cooking",
    ],
  },
  {
    image: karpuravalaiBanana,
    id: "karpuravalai-banana",
    name: "Karpuravalai Banana",
    desc: "Naturally sweet and aromatic, Karpuravalli Banana offers a creamy texture, excellent flavor and dependable keeping quality.",
    variant: "yellow",
    nutrition: {
      Calories: "93 kcal",
      Carbs: "22 g",
      Fiber: "2.5 g",
      Protein: "1.1 g",
      Potassium: "320 mg",
    },
    benefits: [
      "Traditionally used to help soothe digestive discomfort",
      "Unique camphor-like aroma aids appetite and freshness",
      "Naturally cooling variety, popular in warm weather",
      "Good everyday source of gentle, natural energy",
    ],
  },
  {
    image: elaichiBanana,
    id: "elaichi-banana",
    name: "Ney Poovan Banana",
    desc: "Small in size, rich in aroma and naturally sweet, Elaichi Banana offers a delicate texture and delightful flavor.",
    variant: "yellow",
    tag: "Best Seller",
    nutrition: {
      Calories: "116 kcal",
      Carbs: "27 g",
      Fiber: "2.0 g",
      Protein: "1.3 g",
      Potassium: "370 mg",
      "Vitamin B6": "0.4 mg",
    },
    benefits: [
      "Quick, natural energy boost — great for kids and workouts",
      "Vitamin B6 helps support mood and brain function",
      "Naturally sweet, so it's an easy sugar-craving swap",
      "Small size makes it perfect for portion-controlled snacking",
    ],
  },
];

export default products;
