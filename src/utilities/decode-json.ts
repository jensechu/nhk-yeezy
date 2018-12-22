export default (json: any) => {
  return JSON.parse(
    decodeURIComponent(
      JSON.parse('"' + `${json}`.replace(/\"/g, '\\"') + '"').trim()
    )
  );
};
