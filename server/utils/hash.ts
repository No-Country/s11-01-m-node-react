import crypto from "crypto-ts";

function hashPass(token: string) {
  return crypto.SHA256(token).toString();
}

export default { hashPass };
