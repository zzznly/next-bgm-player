import styles from "./styles.module.scss";
import DiscoverNewRelease from "@/components/pages/discover/discover-new-releases/DiscoverNewRelease";
import DiscoverCurrentPlaylists from "@/components/pages/discover/discover-current-playlists/DiscoverCurrentPlaylists";

export default async function DiscoverPage() {
  return (
    <div className={styles["page"]}>
      <h2 className={styles["page-title"]}>Discover</h2>
      <div className={styles["page-content"]}>
        <DiscoverNewRelease />
        <DiscoverCurrentPlaylists />
      </div>
    </div>
  );
}
