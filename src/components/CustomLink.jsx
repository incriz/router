import { Link, useMatch } from "react-router-dom"

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
      path: to,
      end: to.length === 1,
    });
    console.log({match})
  return (
    <div>
        <Link to={to} {...props} style={{
            color: match ? 'blue' : 'white'
        }}>
            {children}
        </Link>
    </div>
  )
}

export {CustomLink}