"use client";

import styles from "./styles.module.scss";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import { useDebounce } from "@/hooks/useDebounce";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderSearch() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 300);

  useEffect(() => {
    if (!params?.keyword) return;
    setKeyword(params?.keyword);
  }, [params.keyword]);

  useEffect(() => {
    if (pathname.includes("search"))
      router.replace(
        !debouncedKeyword ? "/search" : `/search/${debouncedKeyword}`
      );
  }, [debouncedKeyword]);

  useEffect(() => {
    if (!pathname.includes("search")) {
      setKeyword("");
    }
  }, [pathname]);

  const onFocus = () => {
    if (!pathname.includes("search")) router.replace("/search");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className={styles["header-search"]}>
      <input
        className={styles["header-input"]}
        type="search"
        placeholder="Search..."
        value={keyword}
        onChange={onChange}
        onFocus={onFocus}
      />
      <button className={styles["header-button"]}>
        <SvgIcon name="search" />
      </button>
    </div>
  );
}