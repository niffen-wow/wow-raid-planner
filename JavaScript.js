const assignments = [
    { role: "Tank", player: "John" },
    { role: "Healer", player: "Sarah" },
    { role: "DPS", player: "Emily" },
];

const assignmentDiv = document.getElementById("assignments");

assignments.forEach((assignment) => {
    const div = document.createElement("div");
    div.classList.add("assignment");
    div.textContent = `${assignment.role}: ${assignment.player}`;
    assignmentDiv.appendChild(div);
});
