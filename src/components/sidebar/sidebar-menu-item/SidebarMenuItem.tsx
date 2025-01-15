import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { SidebarMenuItemProps } from "../Sidebar";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenuItem({
  path,
  icon,
  label,
  iconActive,
  onClick,
}: SidebarMenuItemProps) {
  const pathname = usePathname();
  const cx = classNames.bind(styles);

  return (
    <div
      className={cx("sidebar-menu-item", {
        active: pathname?.split("/")[1] === path?.split("/")[1],
      })}
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
