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
    console.error(`Error: ${response.status}`);
    return <h2> Es gibt einen Fehler, bitten versuchen Sie später.</h2>;
  }
}

export async function deleteData(url) {
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
    return <h2> Es gibt einen Fehler, bitten versuchen Sie später.</h2>;
  }
}

export async function postNewData(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
    return <h2> Es gibt einen Fehler, bitten versuchen Sie später.</h2>;
  }
}
