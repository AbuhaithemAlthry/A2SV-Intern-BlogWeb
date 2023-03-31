const Navbar = () => {
    return (
    <div style={{height: "80px", width: "100%", boxShadow:"1px 2pxlightgrey", display: "flex", alignItems: "center"}}>
        <img style={{height:"70px", width: "80px"}} src="Blogging-amico.svg" alt="blog" />
        <h2  style={{marginLeft: "100px"}}><i>"Your"</i> <b>BLOG</b></h2>
    </div>
    );
}

export default Navbar;