function Nav (){


    return(
        <div>
            <nav className="flex justify-between items-center p-4 bg-gray-700 text-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl">Reealsearch</h1>
        </div>
        <div>
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>
      </div>
    
    )
}

export default Nav;