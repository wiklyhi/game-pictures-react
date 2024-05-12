export default function setOpasity(styleOpasity) {
  for (let i = styleOpasity.length; i--; ) {
    styleOpasity[i].style.opacity = 0;
    styleOpasity[i].title = "";
  }
}
