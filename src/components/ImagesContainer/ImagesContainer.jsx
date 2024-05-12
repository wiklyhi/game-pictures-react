import "./imagescontainer.css";
import { Container, Row, Button, Image } from "react-bootstrap";
import AddImages from "../AddImages/AddImages";
import { useState } from "react";
import Modal from "../CustomModal/CustomModal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { options } from "../../utilits/options";

const resultImages = <Image src="./images/звезда.png" rounded />;
let el = {};
let result = 0;

export default function ImagesContainer({ contentImages }) {
  const [getModal, setGetModal] = useState(false);
  const [modalStart, setModalStart] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [inModalResult, setInModalResult] = useState(false);
  const [inModalStart, setInModalStart] = useState(false);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function inOpasityImages() {
    el.style.opacity = 1;
    result++;
  }

  function getStyleImages(event) {
    name = event.target.name;
    el = event.target;
    el.style.opacity == 1 ? setModalStart(true) : setGetModal(true);
  }

  function getOpasityImages() {
    const e = document.getElementsByTagName("img");
    for (let i = 0; i < e.length; ++i) {
      e[i].style.opacity = 1;
    }
  }

  function procentResult() {
    let amountImages = document.getElementsByClassName("imagesControl").length;
    let procent = (100 * result) / amountImages;
    if (procent <= 10) {
      return resultImages;
    } else if (procent <= 25) {
      return [resultImages, resultImages];
    } else if (procent <= 50) {
      return [resultImages, resultImages, resultImages];
    } else if (procent <= 75) {
      return [resultImages, resultImages, resultImages, resultImages];
    } else if (procent > 75) {
      return [
        resultImages,
        resultImages,
        resultImages,
        resultImages,
        resultImages,
      ];
    } else {
      return;
    }
  }

  return (
    <>
      <Container style={{ marginTop: 15 }}>
        <Row>
          {contentImages.map((way) => (
            <AddImages clickImages={getStyleImages} key={way.id} {...way} />
          ))}
        </Row>
      </Container>
      <Container>
        <Button
          style={{ marginTop: 15 }}
          variant="primary"
          onClick={() =>
            setInModalResult(
              result == 0 ? setInModalStart(true) : true,
              getOpasityImages()
            )
          }
        >
          РЕЗУЛЬТАТ
        </Button>
      </Container>

      <Modal open={getModal}>
        <Autocomplete
          disablePortal
          id="auto-complete"
          style={{ height: 118 }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={options}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Введите название картинки:" />
          )}
        />
        <Button
          onClick={() =>
            setGetModal(
              false,
              name == inputValue ? inOpasityImages() : setModalError(true),
              setValue("")
            )
          }
        >
          OK
        </Button>
      </Modal>

      <Modal open={modalStart}>
        <h5>
          Запомните картинки и нажмите <br></br>"СТАРТ"
        </h5>
        <p>Вы кликнули по: {name}</p>
        <Button onClick={() => setModalStart(false)}>CLOSE</Button>
      </Modal>

      <Modal open={modalError}>
        <h5>Введено неверное название!</h5>
        <Button onClick={() => setModalError(false)}>CLOSE</Button>
      </Modal>

      <Modal open={inModalResult}>
        {procentResult()}
        <br />
        <Button
          style={{ marginTop: 20 }}
          onClick={() => setInModalResult(false, (result = 0))}
        >
          CLOSE
        </Button>
      </Modal>

      <Modal open={inModalStart}>
        <h5>
          Запомните картинки и нажмите <br></br>"СТАРТ"
        </h5>
        <Button onClick={() => setInModalStart(false)}>CLOSE</Button>
      </Modal>
    </>
  );
}
