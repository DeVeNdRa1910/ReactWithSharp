return (
    <div className='expense-item'>
        <ExpenseDate date ={props.date} />
            <div>
                <h1>Expense 1</h1>
                <h1>Expense 2</h1>
            </div>
    <div>
)

Now we are making this element by React.createElement()

syntax -> React.createElement( 'element(jo banana hai)' , {use element ke arguments} , fir us elemenet ke children,,,,, )

Ex->1  React.createElement('div' , {className:"expense-item"} , React.createElement(ExpenseDate , {date:{props.date}}) , React.createElement('h2', {} ,"Expense 1" ) , React.createElement('h2', {} ,"Expense 2" ) )

for custom component no need to pass as String like ExpenseDate