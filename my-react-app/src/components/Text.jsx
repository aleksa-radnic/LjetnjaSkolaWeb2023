export const Text = ({name='Aleksa', country='MNE'}) => {
    return <>
        <h1 className='first-h1' style={{backgroundColor: "lime"}}>Cao DevLab React</h1>
        <h2 onClick={() => console.log("Cao")}>{name} <span>Radnic</span> - <span style={{fontStyle: "italic"}}>{country}</span></h2>
        <p dangerouslySetInnerHTML={{__html: "<b>Ponedeljak</b>"}}></p>
    </>
}