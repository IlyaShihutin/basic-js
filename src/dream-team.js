module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)) return false;
let arr=[];
for (let i=0; i<members.length; i++)
  {
    if(typeof(members[i])=='string')
    {
      let k=0;
      while(members[i][k]==' '){k++;}
      arr.push(members[i].charAt(k).toUpperCase());
    }
  } 
return arr.sort().join('');
};
