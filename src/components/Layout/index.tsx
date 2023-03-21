import { Loader } from "@components/Loader";
import { Navbar } from "@components/Navbar";
import React, { ReactNode } from "react";
import s from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={s.container}>
      <Navbar />
      <main>{children}</main>
    </div>
    <Loader />
  </>
);
