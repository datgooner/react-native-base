import { useState } from "react";

export enum RightIcon {
  VIEW_ON = "view-on",
  VIEW_OFF = "view-off",
}
export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [rightIcon, setRightIcon] = useState<RightIcon>(RightIcon.VIEW_OFF);

  const handlePasswordVisibility = () => {
    if (rightIcon === RightIcon.VIEW_ON) {
      setRightIcon(RightIcon.VIEW_OFF);
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === RightIcon.VIEW_OFF) {
      setRightIcon(RightIcon.VIEW_ON);
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
