import { skeleton } from "../../declarations/skeleton";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with skeleton actor, calling the greet method
  const greeting = await skeleton.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
