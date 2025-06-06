const skillSet = [
  "Java", "Python", "JavaScript", "SQL", "HTML", "CSS", "React", "Node", "Git",
  "Firebase", "Spring", "MongoDB", "REST", "C++", "Docker"
];

function extractSkills() {
  const file = document.getElementById("resumeFile").files[0];
  if (!file) {
    alert("Please upload a file");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result.toLowerCase();
    const foundSkills = skillSet.filter(skill =>
      text.includes(skill.toLowerCase())
    );

    const skillList = document.getElementById("skillsList");
    skillList.innerHTML = "";
    foundSkills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillList.appendChild(li);
    });

    if (foundSkills.length === 0) {
      skillList.innerHTML = "<li>No known skills found.</li>";
    }
  };

  reader.readAsText(file);
}
