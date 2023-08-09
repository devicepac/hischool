import axios from "axios";
import { client } from "./client";

export const postSignUp = async formData => {
  try {
    console.log(formData);
    console.log("시도");
    const res = await axios.post("/api/sign-up", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("성공했니?:", res.data);
  } catch (error) {
    console.error("실패니..?", error);
  }
};

export const postEmail = async idEmail => {
  try {
    const res = await client.post(`/api/mail-confirm?email=${idEmail}`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const postEmailCodeConFirm = async emailConFirm => {
  try {
    const res = await client.post(`/api/code-confirm?code=${emailConFirm}`);
    console.log(res.data);
    if (res.data === 1) {
      alert("이메일 인증이 완료되었습니다");
    } else {
      alert("코드가 틀렸습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};
