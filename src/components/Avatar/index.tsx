import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { hasBorder = true, ...rest } = props;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
};
