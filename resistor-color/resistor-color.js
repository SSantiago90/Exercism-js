export const colorCode = (c) => {
  let code = COLORS.indexOf(c.toString().toLowerCase());
  if (code >= 0) 
    return code;
  else 
    throw new Error("The value provided does not match any color code.");
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
