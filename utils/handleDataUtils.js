export async function updateData(url, { arg }) {
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
    const Message = "Es gibt einen Fehler, bitten versuchen Sie später.";
    setMessage(Message);
    console.error(`Error: ${response.status}`);
  }
}

export async function handleDelete(url) {
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}
