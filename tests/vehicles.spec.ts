import {
  describeSWApiValidation,
  SWApiValidationSet,
} from "./util";

const validationSet: SWApiValidationSet = [];

describeSWApiValidation({
  endpoint: "vehicles",
  totalEntries: 39,
  validationSet,
});

