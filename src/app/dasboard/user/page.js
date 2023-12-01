const Page = ({ children }) => {
    return (
        <>
            <div style={{ height: 200, width: 400, background: "green" }}>
                <h2>page user</h2>
                {children}
            </div>
        </>
    );

};

export default Page;