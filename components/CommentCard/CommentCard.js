//import { View, Image } from "@tarojs/components";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

//import BottomArrow from "@/assets/bottomArrow.png";
//import RightArrow from "@/assets/rightArrow.png";

//import styles from "./index.module.less";

const StyledP = styled.p`
  margin: auto;

  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 4; -webkit-box-orient: vertical;"
      : ""};
`;

const StyledCard = styled.article``;
export default function ThePage({ comment, time }) {
  const descRef = useRef();

  const [isExpanded, setIsExpanded] = useState(false);
  /** 是否需要展开按钮 */
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  useEffect(() => {
    /** 组件加载完成，ref加载完成，初始状态判断。 */
    setNeedExpandBtn(
      descRef?.current?.scrollHeight > descRef?.current?.clientHeight
    );
  }, []);

  return (
    <article>
      <p>{time}</p>
      <StyledP ref={descRef} isExpanded={isExpanded}>
        {comment}
      </StyledP>
      {needExpandBtn && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <p>{isExpanded ? "less" : "more"}</p>
        </button>
      )}
    </article>
  );
}
/* 
className={styles.desc}
className={`${styles.content} ${!isExpanded ? styles.hiddenText : ""}`} */
