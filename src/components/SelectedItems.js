import React from 'react'

export const SelectedItems = ({currentSelection,onDel}) => {
    return(
        <div className="selectedTag">
            <div className="selectedOption">
                {currentSelection}
            </div>
            <img src="https://img.icons8.com/ios-glyphs/25/000000/multiply.png" onClick={()=>onDel(currentSelection)} />
        </div>
    )
}
