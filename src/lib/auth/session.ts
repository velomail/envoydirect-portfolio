import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  verifyAdminPassword,
  verifyAdminSessionToken,
} from "./tokens";

export {
  ADMIN_COOKIE,
  createAdminSessionToken,
  verifyAdminPassword,
  verifyAdminSessionToken,
};

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return verifyAdminSessionToken(token);
}
