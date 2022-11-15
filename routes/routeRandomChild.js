// let message
process.on("message", cant => {
    console.log("cant child", cant)
    const objeto = {}
    for(let i = 0; i <= cant; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (20-1 + 1) +1)
        if(objeto[numeroAleatorio]) {
            objeto[numeroAleatorio] += 1
        } else {
            objeto[numeroAleatorio] = 1
        }
    }
        console.log("objeto child", objeto)
    process.send(objeto);
    // process.exit();
  });
  
  