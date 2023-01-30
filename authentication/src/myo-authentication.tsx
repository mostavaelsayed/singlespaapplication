// Anything exported from this file is importable by other in-browser modules.
export function getCurrentUser() {
  let data = {
    name: "ahmed",
  };
  console.log("current user is ", data);
  return data;
}
