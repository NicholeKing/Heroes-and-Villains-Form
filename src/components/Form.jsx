import React, { useState } from 'react';

const Form = props => {

    const [myForm, setMyForm] = useState({
        alias: "",
        realName: "",
        yearsActive: 0,
        abilities: "",
        leaning: "Hero",
        isAlive: true
    }); 

    const onSubmitHandler = e => {
        e.preventDefault();
        //Handle submit here
        props.onSubmitChar(myForm);
    }

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const onCheckedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked})
    }

    return(
        <div className="col-6">
            <h1>Add your favorite hero or villain</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Alias</label>
                    <input type="text" name="alias" className="form-control" value={myForm.alias} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Real Name</label>
                    <input type="text" name="realName" className="form-control" value={myForm.realName} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Years Active</label>
                    <input type="number" name="yearsActive" className="form-control" value={myForm.yearsActive} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Abilities</label>
                    <input type="text" name="abilities" className="form-control" value={myForm.abilities} onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Leaning</label>
                    <select name="leaning" className="form-control" onChange={onChangeHandler}>
                        <option value="Hero">Hero</option>
                        <option value="Villain">Villain</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Is Alive</label>
                    <input type="checkbox" name="isAlive" className="form-control" checked={myForm.isAlive} onChange={onCheckedHandler}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="+ Add" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default Form;