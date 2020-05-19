
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "ben",
      password: "pwd!",
      role: 1,
    },
    {
      username: "kelli",
      password: "stuffandthings",
      role: 1,
    },
    {
      username: "Maury",
      password: "meow",
      role: 2,
    },
    {
      username: "kimby",
      password: "meowmeow",
      role: 2
    },
    {
      username: "notme",
      password: "hasnorole",
    },
  ];

  return knex("users").insert(users);
};
