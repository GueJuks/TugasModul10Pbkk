const Layout = ({ children }) => {
    return (
        <>
                <div style= {{ height: 300, width: 500,background: "blue"}}>
                    <h2>layout user</h2>
                    {children}
              </div>
        </>
    );

};

export default Layout;