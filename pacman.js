let world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 5, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 5, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2, 2, 1, 5, 2, 1, 1, 1, 2, 5, 1, 2, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
let difficulty;
let pacman = {
  x: 1,
  y: 1,
};

let ghost1 = {
  x: 8,
  y: 9,
};
let ghost2 = {
  x: 8,
  y: 11,
};
let ghost3 = {
  x: 8,
  y: 10,
};
let ghost4 = {
  x: 9,
  y: 10,
};

let start = false;
let key;

function button(diff) {
  start = true;
  if (diff == "easy") {
    setInterval(function () {
      moveGhost(ghost1);
    }, 200);
    setInterval(function () {
      moveGhost(ghost2);
    }, 300);
    world = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 1, 2, 1, 1, 5, 1, 2, 1, 2, 1, 5, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 5, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 5, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 2, 1, 5, 2, 1, 1, 1, 2, 5, 1, 2, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
  } else if (diff == "medium") {
    setInterval(function () {
      moveGhost(ghost1);
    }, 200);
    setInterval(function () {
      moveGhost(ghost2);
    }, 300);
    setInterval(function () {
      moveGhost(ghost3);
    }, 400);
    world = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 1, 2, 2, 2, 5, 2, 2, 1, 2, 2, 5, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 2],
      [2, 1, 2, 1, 5, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
  } else if (diff == "hard") {
    setInterval(function () {
      moveGhost(ghost1);
    }, 200);
    setInterval(function () {
      moveGhost(ghost2);
    }, 300);
    setInterval(function () {
      moveGhost(ghost3);
    }, 400);
    setInterval(function () {
      moveGhost(ghost4);
    }, 500);
    world = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 5, 2, 2, 1, 2, 2, 5, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 5, 2],
      [2, 1, 2, 1, 1, 1, 5, 1, 1, 2, 1, 2, 1, 1, 5, 1, 1, 1, 2, 2, 2],
      [2, 1, 1, 1, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 2, 1, 5, 1, 2],
      [2, 2, 2, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 2, 1, 2],
      [2, 5, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 5, 2, 2, 1, 2, 2, 5, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
  }
  // Buttons
  let buttons = document.getElementsByClassName("button");

  for (let i = buttons.length - 1; i >= 0; i--) {
    let button = buttons[i];
    button.parentNode.removeChild(button);
  }
  let textElement = document.getElementById("textRemove");
  if (textElement) {
    // Remove the text by setting the element's innerHTML to an empty string
    textElement.innerHTML = "";
  }
}
// Buttons 

// comment
function displayWorld(key) {
  let output = "";

  for (let x = 0; x < world.length; x++) {
    output += "\n<div class = 'row'>";
    for (let y = 0; y < world[x].length; y++) {
      if (world[x][y] == 2) {
        output += "\n\t<div class ='bricks'></div>";
      } else if (world[x][y] == 1) {
        output += "\n\t<div class ='coins'></div>";
      } else if (world[x][y] == 3) {
        output +=
          '\n\t<img id="pacman" src="pacman-images/pactiles/pac' +
          key +
          '.gif" alt="Pac-Man" />';
      } else if (world[x][y] == 0) {
        output += "\n\t<div class ='blank'></div>";
      } else if (world[x][y] == 4) {
        output += "\n\t<div class ='ghost'></div>";
      } else if (world[x][y] == 5) {
        output += "\n\t<div class ='banana'></div>";
      }
    }
    output += "\n</div>";
  }
  document.getElementById("world").innerHTML = output;
}
displayWorld("ArrowLeft");

let points = 0;

document.getElementById("points").textContent = "Points: " + points;

document.onkeydown = function (event) {
  let pacmanImg = document.getElementById("pacman");
  key = event.key;
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
  if (start == true) {
    if (points >= 50) {
      alert("You win, Click ok and wait 3 seconds to restart.");
      setTimeout(function () {
        window.location.reload(true);
      }, 3000);
    }
    if (event.key == "ArrowLeft" && world[pacman.x][pacman.y - 1] != 2) {
      // LEFT
      if (world[pacman.x][pacman.y - 1] == 1) {
        points += 1;
      } else if (world[pacman.x][pacman.y - 1] == 5) {
        points += 10;
      }
      world[pacman.x][pacman.y] = 0;
      pacman.y--;
      world[pacman.x][pacman.y] = 3;
    } else if (
      event.key == "ArrowRight" &&
      world[pacman.x][pacman.y + 1] != 2
    ) {
      // RIGHT
      if (world[pacman.x][pacman.y + 1] == 1) {
        points += 1;
      } else if (world[pacman.x][pacman.y + 1] == 5) {
        points += 10;
      }
      world[pacman.x][pacman.y] = 0;
      pacman.y++;
      world[pacman.x][pacman.y] = 3;
    } else if (event.key == "ArrowDown" && world[pacman.x + 1][pacman.y] != 2) {
      // DOWN
      if (world[pacman.x + 1][pacman.y] == 1) {
        points += 1;
      } else if (world[pacman.x + 1][pacman.y] == 5) {
        points += 10;
      }
      world[pacman.x][pacman.y] = 0;
      pacman.x++;
      world[pacman.x][pacman.y] = 3;
    } else if (event.key == "ArrowUp" && world[pacman.x - 1][pacman.y] != 2) {
      // UP
      if (world[pacman.x - 1][pacman.y] == 1) {
        points += 1;
      } else if (world[pacman.x - 1][pacman.y] == 5) {
        points += 10;
      }
      world[pacman.x][pacman.y] = 0;
      pacman.x--;
      world[pacman.x][pacman.y] = 3;
    }
    displayWorld(event.key);
    document.getElementById("points").textContent = "Points: " + points;
  }
};


function moveGhost(ghost) {
  const randomInt = Math.floor(Math.random() * 4) + 1;
  // LEFT
  if (randomInt == 1) {
    let prev = world[ghost.x - 1][ghost.y];
    if (prev == 2 || prev == 4) return;
    ghost.x--;
    if (world[ghost.x][ghost.y] == 3) {
      window.location.reload(true);
      alert("You lose");
    }
    world[ghost.x][ghost.y] = 4;
    world[ghost.x + 1][ghost.y] = prev;
    // RIGHT
  } else if (randomInt == 2) {
    let prev = world[ghost.x + 1][ghost.y];
    if (prev == 2 || prev == 4) return;
    ghost.x++;
    if (world[ghost.x][ghost.y] == 3) {
      window.location.reload(true);
      alert("You lose");
    }
    world[ghost.x][ghost.y] = 4;
    world[ghost.x - 1][ghost.y] = prev;
    // DOWN
  } else if (randomInt == 3) {
    let prev = world[ghost.x][ghost.y - 1];
    if (prev == 2 || prev == 4) return;
    ghost.y--;
    if (world[ghost.x][ghost.y] == 3) {
      window.location.reload(true);
      alert("You lose");
    }
    world[ghost.x][ghost.y] = 4;
    world[ghost.x][ghost.y + 1] = prev;
    // UP
  } else if (randomInt == 4) {
    let prev = world[ghost.x][ghost.y + 1];
    if (prev == 2 || prev == 4) return;
    ghost.y++;
    if (world[ghost.x][ghost.y] == 3) {
      window.location.reload(true);
      alert("You lose");
    }
    world[ghost.x][ghost.y] = 4;
    world[ghost.x][ghost.y - 1] = prev;
  }
  displayWorld(key);
}
