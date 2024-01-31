import React from "react";
import { Buttons, FormWrapper, ImgAndText, Links, SelectWrapper, TextArea } from "./index.styled";
import rasm from "../../assets/img.svg";
import Input from "../input";
import global from "../../assets/Vector.svg";
import gitHub from "../../assets/iconoir_github.svg";
import img from "../../assets/ion_logo-instagram.svg";
import facebook from "../../assets/mingcute_facebook-line.svg";
import telegram from "../../assets/ic_baseline-telegram.svg";

export default function Form() {
  return (
    <>
      <FormWrapper>
        <h2>Kompaniya ma’lumotlari</h2>
        <p className="description">Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <ImgAndText>
          <img src={rasm} alt="" />
          <p>Yuklash</p>
        </ImgAndText>
        <Input name="Kompaniya nomi" a="Kompaniya nomi" />
        <Input name="Email" a="Email" />
        <Input name="Telefon raqami" a="+9989" />

        <Links>
          <label>
            Linklar<span>*</span>
          </label>
          <div>
            <div>
              <img src={global} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={telegram} alt="" />
            </div>
            <div>
              <img src={gitHub} alt="" />
            </div>
          </div>
        </Links>

        <SelectWrapper>
          <div>
            <label>
              Davlat
              <span>*</span>
            </label>
            <select>
              <option value="">Davlat</option>
              <option value="uzb">Uzb</option>
              <option value="rus">Rus</option>
              <option value="eng">Baa</option>
            </select>
          </div>
          <div>
            <label>
              Shahar
              <span>*</span>
            </label>
            <select>
              <option value="">Shahar</option>
              <option value="uzb">Uzb</option>
              <option value="rus">Rus</option>
              <option value="eng">Baa</option>
            </select>
          </div>
        </SelectWrapper>
        <Input name = "Yashash joyi" a = "Joy"/>
        <Input name = "Hodimlar soni" a = "Hodimlar soni"/>

        <TextArea>
          <label htmlFor="a">
          Izoh <span>*</span>
          </label>
          <textarea id="a" cols="30" rows="5" placeholder="Kompaniya haqida izoh kiriting"></textarea>
        </TextArea>

        <Buttons>
          <button>
            Ortga
          </button>
          <button>
            Keyingisi
          </button>
        </Buttons>
      </FormWrapper>
    </>
  );
}
