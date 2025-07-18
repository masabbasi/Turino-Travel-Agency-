const cityList = {
  Bus: "اتوبوس",
  Van: "ون",
  SUV: "شاسی بلند",
  Airplane: "هواپیما",
};
export const tourFleetVehicleFromEnToFa = (fleetVehicle) => {
  return cityList[fleetVehicle];
};
