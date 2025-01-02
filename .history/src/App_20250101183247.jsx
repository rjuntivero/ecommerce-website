function App() {
  return (
    <>
      <body className="">
        <div className="flex p-4 mb-4 flex-row justify-between items-center">
          <div className="p-5">
            <h1 className="flex text-2xl space-x-6">
              <img src="" className="text-2xl font-bold" alt="LOGO"/>
              <span className="text-lg">Ecommerce Website</span>
            </h1>
          </div>
          <div className="flex space-x-4">
            <a href="">settings</a>
            <a href="">login</a>
          </div>
        </div>
        
        
        <header>
          <nav className="p-8 bg-green-500 text-center">
            <div className="text-xl space-x-20">
              <a className="text-white" href="">HOME</a>
              <a className="text-white" href="">ABOUT</a>
              <a className="text-white" href="">CONTACT</a>
              <a className="text-white" href="">PRODUCT</a>
            </div>
          </nav>
        </header>
        <div className="m-4 p-2 text-3xl shadow-md">
            <img src="./src/assets/images/testimage.jpg" className="text-4xl place-content-center size-auto object-contain blur hover:blur-none" alt="BIG PICTURE"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolor expedita, est exercitationem voluptatibus repellat voluptates 
              deserunt officia nam maxime a nostrum porro sequi, vitae numquam deleniti minus 
              architecto reprehenderit optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolor expedita, est exercitationem voluptatibus repellat voluptates 
              deserunt officia nam maxime a nostrum porro sequi, vitae numquam deleniti minus 
              architecto reprehenderit optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Dolor expedita, est exercitationem voluptatibus repellat voluptates 
              deserunt officia nam maxime a nostrum porro sequi, vitae numquam deleniti minus 
              architecto reprehenderit optio.
              </p>
              <div>
                <p className="bg-green-500 text-white p-5">THIS IS A PRODUCT</p>
              </div>

          </div>

        <footer>
          <div className="bg-zinc-300 text-3xl p-8 mb-5 text-zinc-700">
            copyright
          </div>
        </footer>
      </body>
      
    </>
    
  )
}

export default App