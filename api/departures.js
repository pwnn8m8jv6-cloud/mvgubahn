export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.mvg.de/api/fib/v2/departure?globalId=de:09162:70"
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Fehler" });
  }
}
