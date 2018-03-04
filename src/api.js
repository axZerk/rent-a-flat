import flats from "./flats";
import v4 from "uuid/v4";

const data = flats.map(flat => ({
  id: v4(),
  ...flat
}));

export const fetchSyncFlats = () => data;

export const fetchAsyncFlats = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });
