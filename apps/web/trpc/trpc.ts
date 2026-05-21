import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@tclastrpc/trpc";

export const trpc = createTRPCReact<AppRouter>();
