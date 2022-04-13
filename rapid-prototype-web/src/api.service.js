const rootUrl = "http://localhost:3000";

export const getTanks = async () => {
  const response = await fetch(`${rootUrl}/tanks`);
  return await response.json();
};

export const updateTank = async (id, body) => {
  const response = await fetch(`${rootUrl}/tanks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const fillTank = async (tank) => {
  return await updateTank(tank.id, { ...tank, amount: 100 });
};
export const emptyTank = (tank) => updateTank(tank.id, { ...tank, amount: 0 });
export const heatTank = (tank) =>
  updateTank(tank.id, { ...tank, temp: tank.temp + 1 });

