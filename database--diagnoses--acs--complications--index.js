import arrhythmias from "./database--diagnoses--acs--complications--arrhythmias.js";
import heartFailure from "./database--diagnoses--acs--complications--heart-failure.js";
import cardiogenicShock from "./database--diagnoses--acs--complications--cardiogenic-shock.js";
import mechanical from "./database--diagnoses--acs--complications--mechanical.js";
import thromboembolism from "./database--diagnoses--acs--complications--thromboembolism.js";

const complications = {
  arrhythmias,
  heartFailure,
  cardiogenicShock,
  mechanical,
  thromboembolism
};

export default complications;