import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect.hook';


const FormComponent = props => {


    const APICategories = [
       {value: 'business', label: 'Business'},
       {value: 'entertainment', label: 'Entertainment'},
       {value: 'general', label: 'General'},
       {value: 'health', label: 'Health'},
       {value: 'science', label: 'Science'},
       {value: 'sports', label: 'Sports'},
       {value: 'technology', label: 'Technology'}
    ];

    // custom hook
    const [categories, SelectNewsHook] = useSelect('technology', APICategories);


    const onSubmit = event => {
        event.preventDefault();

        props.setFormCategorySearched(categories);
    }
    

    return (
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={onSubmit}>
                    <h2 className={styles.heading}>Find news by Categories</h2>

                    <SelectNewsHook/>
                    
                    {/** Button */}
                    <div className="input-field col s12">
                        <input type="submit"
                          value="Search now"
                          className={`${styles['btn-block']} btn-large amber darken-2`}
                        />                         
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComponent;
