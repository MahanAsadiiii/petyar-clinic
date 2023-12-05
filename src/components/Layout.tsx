import React ,{ReactNode} from 'react'
import NextProgress from 'nextjs-progressbar'

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className=''>
            <NextProgress color={"#ffefcd"} />
            {children}
        </div>
    )
}

export { Layout }