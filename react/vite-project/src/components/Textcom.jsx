import '../App.css';

export function Text(){
    return <input type="text" name="name" id="name" />
}


export function Paratext(){
    return (
        <>
        <p className='read-the-docs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo facilis vel sapiente.</p>
        <input type="email" name="email" id="email" />
       </>
    )
}