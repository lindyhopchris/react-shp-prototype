export default function preload() {
  let el = document.getElementById('react-shp-preload');

  if (el) {
    return JSON.parse(el.innerText.trim());
  }

  throw new Error('Expecting preload data.');
}
