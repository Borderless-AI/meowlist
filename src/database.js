/**
 * DO NOT MODIFY THIS FILE
 */

export const getCatAtIndex = (i) => {
  return new Promise((r) => setTimeout(r, Math.random(1000) + 1000)).then(
    () => {
      return CATS[i];
    }
  );
};

const CATS = [
  {
    name: "Fred",
    description:
      "While us humans have 206 bones, cats on average have 244. It ranges between 230-250 depending on how long a cat’s tail is and how many toes the cat has.",
  },
  {
    name: "Kitty",
    description: "Adult cats have 30 teeth, while kittens have 26",
  },
  {
    name: "Sunny",
    description:
      "Cats can run around 48 kph (30 mph), but only over short distances. A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
  },
  {
    name: "Mr. Meow",
    description: "Cats can jump 5 times their height",
  },
  {
    name: "Snow White",
    description:
      "An adult cat’s brain is approximately 5 cm (2 inches) long and weighs 30g and has nearly twice the amount of neurons in their cerebral cortex as dogs. These cats sure are smart eh! I wonder why we love dogs so much. Cats would make much better hunter animals",
  },
  {
    name: "Ginger",
    description:
      "Males are more likely to be left pawed, while females and more likely to be right pawed- some are ambidextrous.",
  },
  {
    name: "Scruffy",
    description:
      "A cat’s tongue contains a number of backward facing hooks known as filiform papillae, these rough tongues can lick bones clean of any bits of meat.",
  },
];
