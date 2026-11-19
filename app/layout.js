import './globals.css';
import AgentationToolbar from './agentation';
export const metadata={title:"Little Grove — A little care. A greener home.",description:"A home gardening planner for your plants, growing spaces, and everyday care. Make a little room for growing with Little Grove.",robots:{index:false,follow:false},icons:{icon:'/icon.svg'}};
export default function Layout({children}){return <html lang="en"><body>{children}<AgentationToolbar /></body></html>}
