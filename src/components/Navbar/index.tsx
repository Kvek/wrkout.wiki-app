import React from "react";
import { Logo } from "@components/Logo";
import s from "./styles.module.css";

export const Navbar = () => (
  <div className={s.container}>
    <div className={s.logoContainer}>
      <Logo />
      <span className={s.brand}>wrkout.wiki</span>
    </div>
  </div>
);
