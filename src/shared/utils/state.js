export function normalizeState(data, typeId = 'id') {
  const items = {};
  data.forEach((d) => {
    items[d[typeId]] = d;
  });

  return items;
}

export const unNormalizeState = (data) =>
  Object.keys(data).map((id) => data[id]);

export const createMarkup = html => ({
  __html: html
});
