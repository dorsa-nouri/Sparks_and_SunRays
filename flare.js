const sparks = [];

function createSpark() {
  // Create a new spark element
  const spark = document.createElement("span");
  spark.classList.add("spark");

  // Set random initial position, size, and color
  spark.style.left = Math.random() * window.innerWidth + "px";
  spark.style.top = Math.random() * window.innerHeight + "px";
  spark.style.width = Math.random() * 6 + "px";
  spark.style.height = Math.random() * 6 + "px";
  spark.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;

  // Add animation and other properties
  document.body.appendChild(spark);
  sparks.push(spark);
}

// Create sparks at intervals
setInterval(createSpark, 50);
