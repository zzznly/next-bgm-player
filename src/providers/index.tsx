import QueryProvider from "./react-query-provider";
import { AppStoreProvider } from "./app-store-provider";

export default function AppProviders({ children }: React.PropsWithChildren) {
  return (
    <QueryProvider>
      <AppStoreProvider>{children}</AppStoreProvider>
    </QueryProvider>
  );
}
