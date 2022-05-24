const { findIndex } = require("lodash");

const tariffs = [
  { label: "TED", value: 1.1 },
  { label: "Transferência interna", value: 0.1 },
];

const getTariffs = (type) => {
  type = String(type).toLowerCase();
  const enumType = {
    ted: "TED",
    tef: "Transferência interna",
    pix: "PIX",
  };
  const index = findIndex(tariffs, { label: enumType[type] });
  if (index > -1) {
    return tariffs[index].value;
  }
  return 0;
};

console.log(getTariffs("TEF"));
