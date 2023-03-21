import { useEffect, useState } from "react";

import s from "./styles.module.css";

import { Squat, Stand } from "@components/Icons";
import { useAppSelector } from "@app/hooks";

export const Loader = () => {
  const loading = useAppSelector(({ app: { loading } }) => loading);

  const [squat, setSquat] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (loading && !interval) {
      interval = setInterval(() => {
        setSquat((prevState) => !prevState);
      }, 750);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className={s.container}>
      <div className={s.loadingContainer}>{squat ? <Squat /> : <Stand />}</div>
    </div>
  );
};
