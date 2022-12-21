const MESSAGE = {
  login: "Login Successfully",
  forgotPassword: "An email has been sent to the provided email address.",
  SESSION_EXPIRED: "Session Expired",
};
function toastMsg(title: string, type?: string) {
  return (
    title +
    ` ${
      type === "UPDATE"
        ? "updated"
        : type === "REOPEN"
        ? "reopened"
        : type === "DELETE"
        ? "deleted"
        : "added"
    } successfully`
  );
}
export { MESSAGE, toastMsg };
