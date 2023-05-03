export default function Header(arg) {
    return ( 
    <>
        <h1 className="" style={{marginBottom : "1em"}}>Header Page</h1>
        <div className="">I Received This Props</div>
        {JSON.stringify(arg)}
    </> );
}

