const formatDate = (date: string) => {
  const resultDate = date.split("-", 3);
  return `${resultDate[2].slice(0, 2)}/${resultDate[1]}/${resultDate[0]}`;
};

export default formatDate;
