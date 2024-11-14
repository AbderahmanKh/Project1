function Msection() {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-center flex-col gap-6 md:gap-10 p-10 md:p-52 text-white 
                      bg-[url('/src/imgs/img1.jpg')] bg-cover bg-center 
                      bg-blue-300  bg-current">
        <h1 className="text-4xl md:text-7xl">Section 1</h1>
        <p className="text-lg md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti voluptates nesciunt, necessitatibus deleniti excepturi sunt dolorem atque nam commodi error minus voluptatem fugiat possimus.
        </p>
        <div className="flex b">
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-xl px-5 py-3 text-center  m-2 ">Blue</button>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-2 ml-6 dark:border-blue-500 dark:text-white dark:font-md  dark:hover:bg-blue-500 dark:focus:ring-blue-800 transition ease-out">SIGN UP !!</button>

        </div>
        

      </div>
    );
  }
  
  export default Msection;
  