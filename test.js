var isValid2 = s => {
    const par = {
        "(": ")",
        "{": "}",
        "[": "]",
      };
    const rep = [];
    for (let i = 0; i < s.length; i++) {
      if (par[s[i]]) {
        rep.push(par[s[i]]);
      } 
      
      else {

        if (rep.pop() !== s[i]) {
          return false;
        }
      }
    }
    console.log(rep)
    return rep.length === 0;
  };
  console.log(isValid2("()()[]{}{"))