import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white/5 border-t border-white/10 backdrop-blur-md py-6 text-center">
          <div className="flex justify-center items-center gap-2">
            <a href="https://github.com/theblag" target="_blank">
            <lord-icon
              src="https://cdn.lordicon.com/ioihllwu.json"
              trigger="hover"
              colors="primary:#3a3347,secondary:#ebe6ef"
              alt="Github Logo">
            </lord-icon></a>
          <a href='https://www.instagram.com/adityaarun._.10/' target='_blank'><lord-icon
            src="https://cdn.lordicon.com/wbuzyhjx.json"
            trigger="hover"
            colors="primary:#545454,secondary:#e4e4e4,tertiary:#ffc738,quaternary:#4bb3fd">
          </lord-icon></a>
          <a href='https://www.linkedin.com/in/aditya-a-664089332/' target='_blank'>
            <lord-icon
              src="https://cdn.lordicon.com/nwqudhei.json"
              trigger="morph"
              state="morph-alone"
              colors="primary:#545454,secondary:#e4e4e4">
            </lord-icon>
          </a>
          </div>
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Vaultmaster. All rights reserved.</p>

        </footer>
     )
}

export default Footer
