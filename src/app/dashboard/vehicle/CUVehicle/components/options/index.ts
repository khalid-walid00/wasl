export const  optionsPlateType=[{ value: 2, label: "Public" }, { value: 3, label: "Private" }]
const arabicLetters = "أبجدهوزحطيكلمنسعفصقرشتثخذضظغ".split("");
export const optionsVehiclePlateLetter = arabicLetters.map((letter) => ({
  value: letter,
  label: letter,
}));