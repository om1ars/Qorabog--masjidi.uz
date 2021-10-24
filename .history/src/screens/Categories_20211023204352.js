import React from 'react'
import items from './CategoryData';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function Categories() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
  
    return (
        <div>
            
        </div>
    )
}

export default Categories
