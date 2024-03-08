import {
  describeSWApiValidation,
  SWApiValidationSet,
} from "./util";

const validationSet: SWApiValidationSet = [];

describeSWApiValidation({
  endpoint: "starships",
  totalEntries: 36,
  validationSet,
});

