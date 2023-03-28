//import { View, Image } from "@tarojs/components";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChevronDown from "../../public/icons/chevron_down";
import ChevronUp from "../../public/icons/chevron_up";

//import BottomArrow from "@/assets/bottomArrow.png";
//import RightArrow from "@/assets/rightArrow.png";

//import styles from "./index.module.less";

const StyledP = styled.p`
  margin: auto;

  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;"
      : ""};
`;

const StyledCard = styled.article`
  margin: 1rem 0;
  padding: 0.1rem;

  border-radius: 2px;
  background-color: var(--white-color);
  box-shadow: 1px 1px 1px 1px var(--linen-color);
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.5rem;

  position: relative;
  left: 90%;

  background-color: var(--white-color);
`;

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
    <StyledCard>
      <p>{time}</p>
      <StyledP ref={descRef} isExpanded={isExpanded}>
        {comment}
      </StyledP>
      {needExpandBtn && (
        <StyledButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <ChevronUp color="black" />
          ) : (
            <ChevronDown color="black" />
          )}
        </StyledButton>
      )}
    </StyledCard>
  );
}
/* 
className={styles.desc}
className={`${styles.content} ${!isExpanded ? styles.hiddenText : ""}`} */
