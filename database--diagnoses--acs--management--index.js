import emergency from "./database--diagnoses--acs--management--emergency.js";
import medications from "./database--diagnoses--acs--management--medications.js";
import reperfusion from "./database--diagnoses--acs--management--reperfusion.js";
import admission from "./database--diagnoses--acs--management--admission.js";
import discharge from "./database--diagnoses--acs--management--discharge.js";

const management = {
  emergency,
  medications,
  reperfusion,
  admission,
  discharge
};

export default management;