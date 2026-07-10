import bedside from "./database--diagnoses--acs--investigations--bedside.js";
import laboratory from "./database--diagnoses--acs--investigations--laboratory.js";
import imaging from "./database--diagnoses--acs--investigations--imaging.js";
import specialTests from "./database--diagnoses--acs--investigations--special-tests.js";
import scoring from "./database--diagnoses--acs--investigations--scoring.js";

const investigations = {
  bedside,
  laboratory,
  imaging,
  specialTests,
  scoring
};

export default investigations;