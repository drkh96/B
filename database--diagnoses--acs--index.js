import history from "./database--diagnoses--acs--history--index.js";
import examination from "./database--diagnoses--acs--examination--index.js";
import investigations from "./database--diagnoses--acs--investigations--index.js";
import management from "./database--diagnoses--acs--management--index.js";
import complications from "./database--diagnoses--acs--complications--index.js";
import reasoning from "./database--diagnoses--acs--reasoning.js";

const acs = {
  id: "acute-coronary-syndrome",

  name: {
    ar: "متلازمة الشريان التاجي الحادة",
    en: "Acute Coronary Syndrome"
  },

  history,
  examination,
  investigations,
  management,
  complications,
  reasoning
};

export default acs;