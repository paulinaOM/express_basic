const app = require('./app/app')

const start = (port) => {
    try {
        //Con esto inicializamos esta app
        app.listen(port, ()=>{
            console.log(`Server listening at port ${port}`);
        })
    } catch (err) {
      console.error(err);
      process.exit();
    }
  };
  
  start(3000);