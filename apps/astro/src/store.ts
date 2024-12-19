import { atom } from "nanostores";

export type Theme = "dark" | "light";

export const $theme = atom<Theme>("dark");
