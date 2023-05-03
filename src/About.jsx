export default function About() {
    return (
        <>  
            <div className="container p-5">
                <h1>What is a CV?</h1>
                <p className="mt-5">A CV is an essential part of any job search, not to mention a great way to put all of your skills, experience, and qualifications in one place. In fact, a well written CV could be the difference between getting an interview and not being considered for the role.</p>
            </div>

            <div className="container p-5">
                <p>C.V. Builder uses ReactJS to store your information in client side state. The data is then passed as props to the C.V. component which handles the layout. From here it can be exported as a PDF.</p>
            <p>This site was built as a study on forms and prop drilling in React.</p>
            </div>
            
        </>
    )
}