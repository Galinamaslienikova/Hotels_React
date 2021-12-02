export function Modal({modal,children,close}){
    return(
        <div className={modal?'imageModal show':' imageModal notShow'}>
            <button onClick={close} className='orangeButton'>close</button>
            {children}
        </div> 
    )
}