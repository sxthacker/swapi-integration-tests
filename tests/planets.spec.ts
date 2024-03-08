import {
  describeSWApiValidation,
  SWApiValidationSet,
} from "./util";

const validationSet: SWApiValidationSet = [];

describeSWApiValidation({
  endpoint: "planets",
  totalEntries: 60,
  validationSet,
});

