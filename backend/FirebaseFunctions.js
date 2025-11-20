import { ref, push,onValue, limitToLast, query } from "firebase/database";
import { db } from "./Firebase";

export const saveReading = async (db, reading) => {
  const cleanReading = {
    NO2: reading.NO2 ?? 0,
    CO: reading.CO ?? 0,
    PM25: reading.PM25 ?? 0,
    PM10: reading.PM10 ?? 0,
    SO2: reading.SO2 ?? 0,
    Ozone: reading.Ozone ?? 0,
    time: reading.time ?? Date.now(),
  };

  return push(ref(db, "readings"), cleanReading);
};

export function listenToReadings(callback) {
  const q = query(ref(db, "readings"), limitToLast(20));
  return onValue(q, (snapshot) => {
    const data = snapshot.val() || {};
    const arr = Object.keys(data).map((key) => data[key]);
    callback(arr);
  });
}