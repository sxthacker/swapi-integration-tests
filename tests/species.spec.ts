import {
  describeSWApiValidation,
  SWApiValidationSet,
} from "./util";

const validationSet: SWApiValidationSet = [];

describeSWApiValidation({
  endpoint: "species",
  totalEntries: 37,
  validationSet,
});

