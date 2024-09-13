function generateActivitiesNo(id) {
  return `AC-${id.toString().padStart(4, "0")}`;
}

module.exports = generateActivitiesNo;
