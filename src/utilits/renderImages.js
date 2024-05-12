import { dataImages } from "../data/data";

export default function renderImages(type, num) {
  while (type.length < num) {
    let rundomnumber =
      dataImages[Math.floor(Math.random() * dataImages.length)];
    if (type.indexOf(rundomnumber) == -1) {
      type.push(rundomnumber);
    }
  }
  return type;
}
