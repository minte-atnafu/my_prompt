import '../styles/globals.css'

import Nav from '../componets/Nav'
import Provider from '../componets/Provider'
export const metadata = {
    title: "my_prompt",
    dicription:"Discover and share AI propmpt"
}

const RootLayout = ({children}) => {
  return (
      <html lang="en">
         <body>
              <div className='main'>
                  <div className='gradient'/>
              </div>
              <main className='app'>
                  <Nav/>
                  {children}
              </main>
         </body> 
    </html>
  )
}

export default RootLayout