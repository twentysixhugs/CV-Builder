export default function isGeneralInfoProvided(generalInfoArray) {
  const checkResult =
    generalInfoArray[0].firstName ||
    generalInfoArray[0].lastName ||
    generalInfoArray[0].email ||
    generalInfoArray[0].phone;

  return !!checkResult;
}
