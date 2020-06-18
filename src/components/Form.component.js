import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect.hook';


const FormComponent = () => {

    // custom hook
    const [categories, SelectNewsHook] = useSelect('', "FIATCURRENCY");

    return (
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
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
