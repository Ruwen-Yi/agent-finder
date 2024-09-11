import { handlers } from "@/auth";

// Whenever a request is made to the /api/auth endpoint,
// the request is delegated to either GET or POST handler provided by NextAuth
export const { GET, POST } = handlers;