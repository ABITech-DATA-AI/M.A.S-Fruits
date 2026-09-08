# Images folder

The site currently renders themed SVG banana illustrations (see
`src/components/BananaSVG.jsx`) instead of photos, because this build
environment has no general internet image-download access and could not
save your uploaded design file to disk.

To use real photography:

1. Drop your image files here, e.g.:
   - `red-banana.jpg`
   - `elaichi-banana.jpg`
   - `yelakki-banana.jpg`
   - `poovan-banana.jpg`
   - `raw-banana.jpg`
   - `monthan-banana.jpg`
   - `hill-banana.jpg`
   - `hero-bg.jpg`
   - `logo.png`

2. In `src/data/products.js`, add an `image` field per product, e.g.
   `image: "/src/assets/images/red-banana.jpg"`.

3. In `src/components/ProductCard.jsx`, swap the `<BananaSVG ... />` line for:
   ```jsx
   {image ? <img src={image} alt={name} /> : <BananaSVG variant={variant} size={130} />}
   ```

4. Do the same in `Home.jsx`, `Navbar.jsx` (logo), and `Farms.jsx` /
   `Gallery.jsx` wherever `<BananaSVG />` placeholders appear.
