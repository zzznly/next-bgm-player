import ReactQueryProvider from "./react-query-provider";
import { AppStoreProvider } from "./app-store-provider";

export default function AppProviders({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <AppStoreProvider>{children}</AppStoreProvider>
    </ReactQueryProvider>
  );
}
