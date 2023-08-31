import { atom } from "recoil";

export const whiteNav = atom({
    key: "whiteNav",
    default: 1
})

export const sideNavOpen = atom({
    key: "sideNavOpen",
    default: false
})

export const isScroll = atom({
    key: "isScroll",
    default: 0
})