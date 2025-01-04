const bcrypt = require("bcrypt");
let hashedPassword;

async function hashPassword() {
  const password = "mySecretPassword";
  const saltRounds = 10; 
  hashedPassword = await bcrypt.hash(password, 4);
  console.log("Hashed Password:", hashedPassword);
}

async function verifyPassword() {
  const password = "mySecretPassword";

  if (!hashedPassword) {
    console.error(
      "Hashed password is not available. Ensure hashPassword runs first."
    );
    return;
  }
  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log("Password Match:", isMatch);
}

async function run() {
  await hashPassword(); 
  await verifyPassword(); 
}

run();
