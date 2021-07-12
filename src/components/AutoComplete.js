import React,{Fragment,useState} from 'react'
import { SelectedItems } from './SelectedItems'

const AutoComplete = () => {

    const [values,setValues] = useState({
        isVisible:false,
        options:[
            "HTML5",
            "CSS3",
            "React",
            "Vue",
            "TypeScript",
            "Python",
            "Java"],
        suggestions:[],
        selectedArr:[]
    })

    const [newOption,setNewOption] = useState("");

    const {isVisible,options,suggestions,selectedArr} = values;

    const handleChange = (e) => {
        let listOptions = options.filter(el => el.includes(e.target.value));
        setValues({...values,isVisible:true,suggestions:listOptions});
        setNewOption(e.target.value)
    }

    const handleClick = (name)=> (e) => {
        setValues({...values,selectedArr:[...selectedArr,name]});
    }

    const handleAdd = () => {
        setValues({...values,selectedArr:[...selectedArr,newOption],options:[...options,newOption]});
    }

    const handleDel = (name) => {
        let removeFromSelected = selectedArr.filter(item => item !== name);
        setValues({...values,selectedArr:removeFromSelected});
    }

    return(
        <Fragment>
            <div className="container">
                <div>
                    <p id="tag">TAGS</p>
                    <p id="helperText">Select time for your events</p>
                        <div>
                            <div className="container">
                            {
                            selectedArr.map((item,index)=><SelectedItems key={index} currentSelection={item} onDel = {handleDel} />)
                            }  
                            </div>  
                        <input placeholder="Add Tags"  list= "tags" onChange={handleChange} />
                        </div>
                        {isVisible && 
                        <div  className="options">
                            <ul>
                                {suggestions.length > 0 ?(suggestions.map((el,index)=><li key={index} onClick={handleClick(el)} name={el}>{el}</li>)):
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png" onClick={handleAdd} alt="plus"/>
                                }
                            </ul>
                        </div>}
                </div>
            </div>
        </Fragment>
    )
}

export default AutoComplete;