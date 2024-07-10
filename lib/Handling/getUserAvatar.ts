export const getUserAvatar = (url: string) => {
  const splitUrl = url.split(".");
  const extensionPattern = new RegExp("jpg", "g");
  if (splitUrl[0] === "default") {
    return "/profile/avatar.png";
  }

  return url;
};

export const getBlurUserAvatar = (url: string) => {
  const splitUrl = url.split(".");
  const blurUrl = "/api/image/blur?url=";
  if (splitUrl[0] === "default") {
    return "/profile/avatar.png";
  }

  return blurUrl + url;
};
