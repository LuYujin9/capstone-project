export async function updateReserve(url, { arg }) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    const reserveMessage = "Es gibt einen Fehler, bitten versuchen Sie später.";
    setReserveMessage(reserveMessage);
    console.error(`Error: ${response.status}`);
  }
}
