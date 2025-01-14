import styles from "./styles.module.scss";
import { SidebarMenuItem } from "../Sidebar";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu({
  path,
  icon,
  label,
  iconActive,
  onClick,
}: SidebarMenuItem) {
  const pathname = usePathname();

  return (
    <div
      className={`${styles["sidebar-menu-item"]} ${
        pathname?.split("/")[1] === path?.split("/")[1] ? styles["active"] : ""
      }`}
    >
      <Link href={path ?? ""} onClick={onClick}>
        <SvgIcon
          name={
            pathname?.split("/")[1] === path?.split("/")[1]
              ? iconActive?.name
              : icon?.name
          }
        />
        <span>{label}</span>
      </Link>
    </div>
  );
}
