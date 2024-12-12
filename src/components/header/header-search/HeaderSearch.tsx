"use client";
import styles from "./styles.module.scss";
import SvgIcon from "@/components/svgIcon/SvgIcon";
import { useState } from "react";

export default function HeaderSearch() {
    const [keyword, setKeyword] = useState("");

    // const location = useLocation();
    // const navigate = useNavigate();
    // const params = useParams();
    // const debouncedKeyword = useDebounce(keyword, 500);

    // useEffect(() => {
    //     if (!params?.keyword) return;
    //     setKeyword(params?.keyword);
    // }, [params.keyword]);

    // useEffect(() => {
    //     if (location.pathname.includes("search"))
    //         navigate(!debouncedKeyword ? "/search" : `/search/${debouncedKeyword}`, {
    //             replace: true,
    //         });
    // }, [debouncedKeyword]);

    // useEffect(() => {
    // if (!window.location.pathname.includes("search")) {
    //     setKeyword("");
    // }
    // }, []);

    return <div className={styles["header-search"]}>
        <input
            className={styles["header-input"]}
            type="search"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => {
                setKeyword(e.target.value);
            }}
        />
        <button className={styles["header-button"]}>
            <SvgIcon name="search" />
        </button>
    </div>
}