const angryProfessor = (k, a) => {
    let onTimeCount = 0;

    a.map(t => {
        (t <= 0) ? onTimeCount+=1 : onTimeCount;
    });
    
    let resp = (onTimeCount >= k) ? 'NO' : 'YES';
    return resp
  };
  
  console.log(angryProfessor(3, [-1,-3,4,2]));
  console.log(angryProfessor(2, [0,-1,2,1]));