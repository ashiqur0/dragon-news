import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {

    const categories = use(categoryPromise);
    // console.log(categories);

    return (
        <div>
            <h2 className='font-semibold text-xl'>All Categories({categories.length})</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(ctgory => (
                        <NavLink
                            key={ctgory.id}
                            className={`btn text-xl text-accent font-medium bg-base-100 border-0 hover:bg-base-200`}
                            to={`/category/${ctgory.id}`}
                        >{ctgory.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;