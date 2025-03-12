export const handleKeyEvaluator = (key) => {
  switch (key) {
    case " ":
    case "Escape":
    case "Tab":
    case "Shift":
    case "Control":
    case "Alt":
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowUp":
    case "ArrowDown":
    case "Meta":
      return true;
    default:
      return false;
  }
};

export const fakeWordleAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const wordleWords = [
        "apple",
        "bread",
        "chair",
        "dance",
        "eagle",
        "flour",
        "grass",
        "house",
        "ivory",
        "jolly",
        "kneel",
        "latch",
        "money",
        "nudge",
        "ocean",
        "peach",
        "queen",
        "roast",
        "sharp",
        "towel",
        "uncle",
        "vivid",
        "whisk",
        "xerox",
        "yeast",
        "zebra",
        "angle",
        "blaze",
        "crisp",
        "drown",
        "earth",
        "flame",
        "grape",
        "heart",
        "image",
        "joker",
        "knock",
        "light",
        "mango",
        "novel",
        "orbit",
        "piano",
        "quiet",
        "raven",
        "sugar",
        "trace",
        "urban",
        "vowel",
        "wrist",
        "xenon",
        "yacht",
        "zesty",
        "amber",
        "beach",
        "crane",
        "daisy",
        "ember",
        "frost",
        "glide",
        "happy",
        "irony",
        "jumbo",
        "karma",
        "lemon",
        "mirth",
        "night",
        "olive",
        "pride",
        "quilt",
        "risky",
        "smile",
        "tease",
        "unity",
        "venue",
        "watch",
        "xeric",
        "yummy",
        "zonal",
        "azure",
        "brisk",
        "cloud",
        "demon",
        "elite",
        "fancy",
        "giant",
        "hound",
        "icing",
        "jelly",
        "kites",
        "lunar",
        "macho",
        "noble",
        "oasis",
        "plume",
        "quark",
        "rumor",
        "swoop",
        "tempo",
        "upset",
        "vixen",
      ];
      resolve(wordleWords);
    }, 3000);
  });
};
