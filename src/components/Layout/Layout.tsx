import React from 'react';
import Aux from '../../hoc/Aux';
import './layout.css'

const layout: React.FC = (props: any) => {
    return (
        <Aux>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className='Content'>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout
