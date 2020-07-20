export const transform = (oldScore) => {
  let res = Object.keys(oldScore).map((score) =>
    oldScore[score].map( (letter) => {
      return { [letter.toLowerCase()]: Number(score) };
    })
  )
  .reduce( (acc,val) => [...acc,...val])
  .reduce( (acc,val) => ({...acc,...val})
  );





    //.reduce((acc, val) => acc.concat(val), [])
    //.reduce((a, b) => ({ ...a, ...b }));

    return res;
};