import { atom } from "jotai";

export const questionNoAtom = atom(0);

export const answerNoAtom = atom([]);

export const infoAtom = atom({
    name: "",
    studentID: "",
    major: ""
    });