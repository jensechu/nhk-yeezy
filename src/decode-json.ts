export default (json: any) => {
  return decodeURIComponent(
    JSON.parse('"' + `${json}`.replace(/\"/g, '\\"') + '"')
  );
};
