type Image = {
  height: number,
  imageUrl: string,
  width: number,
};

type V = {
  i: Image,
  id: string,
  l: string,
  s: string,
};

export type D = {
  i: Image,
  id: string,
  l: string,
  q: string,
  rank: number,
  s: string,
  v: Array<V>,
  vt: number,
  y: number,
  yr: string,
};

export type Props = {
  d: Array<D>,
  q: string,
  v: number,
};
