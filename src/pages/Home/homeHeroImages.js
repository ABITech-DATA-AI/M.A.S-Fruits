// ---------------------------------------------------------------------
// The 6 mini circle images shown in the Home page hero grid.
// Each one is its own named import — edit ANY single line below to swap
// just that one photo, without affecting the others or the main
// products catalogue (src/data/products.js).
//
// To change an image: replace the file in src/assets/images/ (or point
// the import at a new file) and the corresponding circle updates.
// ---------------------------------------------------------------------
import heroImage1 from "../../assets/images/red-banana.jpg";
import heroImage2 from "../../assets/images/elaichi-banana.jpg";
import heroImage3 from "../../assets/images/yelakki-banana.jpg";
import heroImage4 from "../../assets/images/poovan-banana.jpg";
import heroImage5 from "../../assets/images/raw-banana.jpg";
import heroImage6 from "../../assets/images/monthan-banana.jpg";

const homeHeroImages = [
  { id: "hero-1", image: heroImage1, label: "Red Banana" },
  { id: "hero-2", image: heroImage2, label: "Nendhran Banana" },
  { id: "hero-3", image: heroImage3, label: "Yelakki Banana" },
  { id: "hero-4", image: heroImage4, label: "Poovan Banana" },
  { id: "hero-5", image: heroImage5, label: "Rasthali Banana" },
  { id: "hero-6", image: heroImage6, label: "Monthan Banana" },
];

export default homeHeroImages;
